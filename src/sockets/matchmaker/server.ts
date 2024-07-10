import { config, logger, userService } from "../..";
import { Encryption } from "../../utilities/encryption";
import { servers } from "../gamesessions/servers";
import { XmppService, type PartyInfo } from "../xmpp/saved/XmppServices";
import { MatchmakerStates } from "./mmstates";
import { v4 as uuid } from "uuid";
import { check } from "./utilities/ServerStatusCheck";
import { hosters } from "./hosters/regionhosters";
import { ServerSessions } from "../gamesessions/manager/ServerSessions";
import { ServerStatus, type HostServer } from "../gamesessions/types";
import { isPartyMemberExists } from "./utilities/isPartyMemberExists";
import { removeClientFromQueue } from "./utilities/removeClientFromQueue";
import { HostAPI } from "../gamesessions/host";

interface MatchmakerAttributes {
  "player.userAgent": string;
  "player.preferredSubregion": string;
  "player.option.spectator": string;
  "player.inputTypes": string;
  "player.revision": number;
  "player.teamFormat": string;
  "player.subregions": string;
  "player.season": number;
  "player.option.partyId": string;
  "player.platform": string;
  "player.option.linkType": string;
  "player.input": string;
  "playlist.revision": number;
  "player.option.fillTeam": boolean;
  "player.option.uiLanguage": string;
  "player.option.microphoneEnabled": boolean;
}

export interface MatchmakerSocket {
  accountId: string;
  bucketId: string;
  attributes: MatchmakerAttributes;
  expiresAt: string;
  nonce: string;
  sessionId: string;
  matchId: string;
  region: string;
  userAgent: string;
  playlist: string;
}

export type Socket = {
  payload: MatchmakerSocket;
  identifier: string[];
  ticketId: string;
};

async function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const creatingServerLock = new Map<string, boolean>();

export const matchmakerServer = Bun.serve<Socket>({
  port: 8413,
  async fetch(request, server) {
    try {
      const authHeader = request.headers.get("Authorization");

      if (!authHeader) {
        return new Response("Authorization Payload is Invalid!", { status: 400 });
      }

      const [, , encrypted, json, signature] = authHeader.split(" ");

      if (!encrypted || !signature) {
        return new Response("Unauthorized request", { status: 401 });
      }

      const response = Encryption.decrypt(signature, config.client_secret);
      if (!response) {
        return new Response("Failed to decrypt Response!", { status: 400 });
      }

      let payload: MatchmakerSocket;
      try {
        payload = JSON.parse(response);
      } catch (error) {
        return new Response("Failed to parse decrypted Response!", { status: 400 });
      }

      const user = await userService.findUserByAccountId(payload.accountId);
      if (!user || user.banned) {
        return new Response("Unauthorized request", { status: 401 });
      }

      server.upgrade(request, {
        data: {
          payload,
          identifier: [],
          ticketId: uuid(),
        },
      });

      return undefined;
    } catch (error) {
      logger.error(`Error handling request: ${error}`);
      return new Response("Internal Server Error", { status: 500 });
    }
  },
  websocket: {
    async open(socket) {
      try {
        const payload = socket.data.payload;
        socket.data.identifier.push(payload.bucketId);

        let existingServer: HostServer | undefined = servers.find(
          (server) =>
            server.identifier === payload.bucketId &&
            server.options.region === payload.region &&
            server.options.playlist === payload.playlist &&
            server.options.userAgent === payload.userAgent,
        );

        const foundParty: PartyInfo | undefined = isPartyMemberExists(payload.accountId);

        if (!creatingServerLock.has(payload.bucketId)) {
          creatingServerLock.set(payload.bucketId, true);

          existingServer = servers.find(
            (server) =>
              server.identifier === payload.bucketId &&
              server.options.region === payload.region &&
              server.options.playlist === payload.playlist &&
              server.options.userAgent === payload.userAgent,
          );

          if (!existingServer || existingServer.queue.length === 100) {
            const config = hosters[payload.region];

            if (!config) {
              creatingServerLock.delete(payload.bucketId);
              return socket.close(1011, "Region not found");
            }

            const newServer: HostServer = {
              sessionId: payload.sessionId,
              status: ServerStatus.OFFLINE,
              version: payload.attributes["player.season"],
              identifier: payload.bucketId,
              address: config.address,
              port: config.port,
              queue: [],
              options: {
                region: payload.region,
                matchId: payload.matchId,
                playlist: payload.playlist,
                userAgent: payload.userAgent,
              },
            };

            newServer.queue.push(payload.accountId);

            servers.push(newServer);
            existingServer = newServer;
          } else {
            if (existingServer.queue.length === 100) {
              MatchmakerStates.queueFull(socket);
              socket.close(1011, "Queue is full!");
              creatingServerLock.delete(payload.bucketId);
              return;
            }

            existingServer.queue.push(payload.accountId);
          }

          creatingServerLock.delete(payload.bucketId);
        }

        if (!existingServer) {
          return socket.close(1011, "Internal Server Error");
        }

        if (!foundParty) {
          return socket.close(1011, "Party not found!");
        }

        await HostAPI.createServer(existingServer);

        logger.debug(`SessionId: ${existingServer.sessionId}`);

        MatchmakerStates.connecting(socket);
        MatchmakerStates.waiting(socket, foundParty);
        MatchmakerStates.queueFull(socket);
        MatchmakerStates.queued(socket, socket.data.ticketId, foundParty, existingServer.queue);

        while (existingServer.status !== ServerStatus.ONLINE && existingServer.queue.length > 0) {
          await wait(2000);

          existingServer = servers.find(
            (server) =>
              server.identifier === payload.bucketId &&
              server.options.region === payload.region &&
              server.options.playlist === payload.playlist &&
              server.options.userAgent === payload.userAgent,
          );

          if (!existingServer) {
            return socket.close(1011, "Server not found");
          }
        }

        if (existingServer.status === ServerStatus.ONLINE) {
          removeClientFromQueue(foundParty, existingServer.queue);
          MatchmakerStates.sessionAssignment(socket, existingServer.options.matchId);
          MatchmakerStates.join(socket, existingServer.sessionId, existingServer.options.matchId);
        } else {
          socket.close(1011, "Server took too long to start");
        }
      } catch (error) {
        logger.error(`Error handling WebSocket open event: ${error}`);
        socket.close(1011, "Internal Server Error");
      }
    },
    message(socket, message) {
      logger.debug("Ping!");

      const payload = socket.data.payload;

      const foundParty: PartyInfo | undefined = isPartyMemberExists(payload.accountId);

      const existingQueue = servers.find(
        (server) =>
          server.identifier === payload.bucketId &&
          server.options.region === payload.region &&
          server.options.playlist === payload.playlist &&
          server.options.userAgent === payload.userAgent,
        // server.sessionId === payload.sessionId &&
        // server.options.matchId === payload.matchId,
      );

      if (!existingQueue) {
        logger.warn(`Queue not found for socket: ${payload.accountId}`);
        return;
      }

      if (!foundParty) {
        return socket.close(1011, "Party not found!");
      }

      const clientInQueue = existingQueue.queue.find((id) => id === payload.accountId);

      if (!clientInQueue) {
        logger.warn(`Client not found for socket: ${socket.data.payload.accountId}`);
        return;
      }

      MatchmakerStates.queued(socket, socket.data.ticketId, foundParty, existingQueue.queue);
    },
    close(socket) {
      logger.debug("Close!");

      const payload = socket.data.payload;

      const foundParty: PartyInfo | undefined = isPartyMemberExists(payload.accountId);

      const existingQueueIndex = servers.findIndex(
        (server) =>
          server.identifier === payload.bucketId &&
          server.options.region === payload.region &&
          server.options.playlist === payload.playlist &&
          server.options.userAgent === payload.userAgent,
      );

      if (existingQueueIndex === -1) {
        logger.warn(`Queue not found for socket: ${payload.accountId}`);
        return;
      }

      if (!foundParty) {
        return socket.close(1011, "Party not found!");
      }

      const existingQueue = servers[existingQueueIndex];

      const clientInQueueIndex = existingQueue.queue.findIndex((id) => id === payload.accountId);

      if (clientInQueueIndex === -1) {
        logger.warn(`Client not found for socket: ${socket.data.payload.accountId}`);
        return;
      }

      existingQueue.queue.splice(clientInQueueIndex, 1);

      if (existingQueue.queue.length === 0) {
        servers.splice(existingQueueIndex, 1);
      }
    },
  },
});

logger.startup(`Matchmaker started on port ${matchmakerServer.port}`);
