import type { IProfile } from "../../../../types/profilesdefs";
import ProfileBase from "../base/ProfileBase";

export default class CommonCoreProfile extends ProfileBase {
  protected profile: IProfile;

  constructor(accountId: string) {
    const profile = CommonCoreProfile.createProfile(accountId);
    super(profile);
    this.profile = profile;
  }

  static createProfile(accountId: string): IProfile {
    return {
      _id: "",
      createdAt: "",
      updatedAt: "",
      rvn: 0,
      wipeNumber: 1,
      accountId,
      profileId: "common_core",
      version: "no_version",
      items: {
        "Token:campaignaccess": {
          templateId: "Token:campaignaccess",
          attributes: {
            level: 1,
          },
          quantity: 1,
        },
        "Token:founderspack_1": {
          templateId: "Token:founderspack_1",
          attributes: {
            level: 1,
          },
          quantity: 1,
        },
        "Token:FounderChatUnlock": {
          templateId: "Token:FounderChatUnlock",
          attributes: {
            level: 1,
          },
          quantity: 1,
        },
        "Currency:MtxPurchased": {
          templateId: "Currency:MtxPurchased",
          attributes: {
            platform: "EpicPC",
          },
          quantity: 0,
        },
        "HomebaseBannerColor:DefaultColor1": {
          templateId: "HomebaseBannerColor:DefaultColor1",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerColor:DefaultColor2": {
          templateId: "HomebaseBannerColor:DefaultColor2",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerColor:DefaultColor3": {
          templateId: "HomebaseBannerColor:DefaultColor3",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerColor:DefaultColor4": {
          templateId: "HomebaseBannerColor:DefaultColor4",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerColor:DefaultColor5": {
          templateId: "HomebaseBannerColor:DefaultColor5",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerColor:DefaultColor6": {
          templateId: "HomebaseBannerColor:DefaultColor6",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerColor:DefaultColor7": {
          templateId: "HomebaseBannerColor:DefaultColor7",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerColor:DefaultColor8": {
          templateId: "HomebaseBannerColor:DefaultColor8",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerColor:DefaultColor9": {
          templateId: "HomebaseBannerColor:DefaultColor9",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerColor:DefaultColor10": {
          templateId: "HomebaseBannerColor:DefaultColor10",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerColor:DefaultColor11": {
          templateId: "HomebaseBannerColor:DefaultColor11",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerColor:DefaultColor12": {
          templateId: "HomebaseBannerColor:DefaultColor12",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerColor:DefaultColor13": {
          templateId: "HomebaseBannerColor:DefaultColor13",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerColor:DefaultColor14": {
          templateId: "HomebaseBannerColor:DefaultColor14",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerColor:DefaultColor15": {
          templateId: "HomebaseBannerColor:DefaultColor15",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerColor:DefaultColor16": {
          templateId: "HomebaseBannerColor:DefaultColor16",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerColor:DefaultColor17": {
          templateId: "HomebaseBannerColor:DefaultColor17",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerColor:DefaultColor18": {
          templateId: "HomebaseBannerColor:DefaultColor18",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerColor:DefaultColor19": {
          templateId: "HomebaseBannerColor:DefaultColor19",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerColor:DefaultColor20": {
          templateId: "HomebaseBannerColor:DefaultColor20",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerColor:DefaultColor21": {
          templateId: "HomebaseBannerColor:DefaultColor21",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:StandardBanner1": {
          templateId: "HomebaseBannerIcon:StandardBanner1",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:StandardBanner2": {
          templateId: "HomebaseBannerIcon:StandardBanner2",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:StandardBanner3": {
          templateId: "HomebaseBannerIcon:StandardBanner3",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:StandardBanner4": {
          templateId: "HomebaseBannerIcon:StandardBanner4",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:StandardBanner5": {
          templateId: "HomebaseBannerIcon:StandardBanner5",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:StandardBanner6": {
          templateId: "HomebaseBannerIcon:StandardBanner6",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:StandardBanner7": {
          templateId: "HomebaseBannerIcon:StandardBanner7",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:StandardBanner8": {
          templateId: "HomebaseBannerIcon:StandardBanner8",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:StandardBanner9": {
          templateId: "HomebaseBannerIcon:StandardBanner9",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:StandardBanner10": {
          templateId: "HomebaseBannerIcon:StandardBanner10",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:StandardBanner11": {
          templateId: "HomebaseBannerIcon:StandardBanner11",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:StandardBanner12": {
          templateId: "HomebaseBannerIcon:StandardBanner12",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:StandardBanner13": {
          templateId: "HomebaseBannerIcon:StandardBanner13",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:StandardBanner14": {
          templateId: "HomebaseBannerIcon:StandardBanner14",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:StandardBanner15": {
          templateId: "HomebaseBannerIcon:StandardBanner15",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:StandardBanner16": {
          templateId: "HomebaseBannerIcon:StandardBanner16",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:StandardBanner17": {
          templateId: "HomebaseBannerIcon:StandardBanner17",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:StandardBanner18": {
          templateId: "HomebaseBannerIcon:StandardBanner18",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:StandardBanner19": {
          templateId: "HomebaseBannerIcon:StandardBanner19",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:StandardBanner20": {
          templateId: "HomebaseBannerIcon:StandardBanner20",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:StandardBanner21": {
          templateId: "HomebaseBannerIcon:StandardBanner21",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:StandardBanner22": {
          templateId: "HomebaseBannerIcon:StandardBanner22",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:StandardBanner23": {
          templateId: "HomebaseBannerIcon:StandardBanner23",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:StandardBanner24": {
          templateId: "HomebaseBannerIcon:StandardBanner24",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:StandardBanner25": {
          templateId: "HomebaseBannerIcon:StandardBanner25",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:StandardBanner26": {
          templateId: "HomebaseBannerIcon:StandardBanner26",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:StandardBanner27": {
          templateId: "HomebaseBannerIcon:StandardBanner27",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:StandardBanner28": {
          templateId: "HomebaseBannerIcon:StandardBanner28",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:StandardBanner29": {
          templateId: "HomebaseBannerIcon:StandardBanner29",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:StandardBanner30": {
          templateId: "HomebaseBannerIcon:StandardBanner30",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:StandardBanner31": {
          templateId: "HomebaseBannerIcon:StandardBanner31",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:FounderTier1Banner1": {
          templateId: "HomebaseBannerIcon:FounderTier1Banner1",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:FounderTier1Banner2": {
          templateId: "HomebaseBannerIcon:FounderTier1Banner2",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:FounderTier1Banner3": {
          templateId: "HomebaseBannerIcon:FounderTier1Banner3",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:FounderTier1Banner4": {
          templateId: "HomebaseBannerIcon:FounderTier1Banner4",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:FounderTier2Banner1": {
          templateId: "HomebaseBannerIcon:FounderTier2Banner1",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:FounderTier2Banner2": {
          templateId: "HomebaseBannerIcon:FounderTier2Banner2",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:FounderTier2Banner3": {
          templateId: "HomebaseBannerIcon:FounderTier2Banner3",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:FounderTier2Banner4": {
          templateId: "HomebaseBannerIcon:FounderTier2Banner4",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:FounderTier2Banner5": {
          templateId: "HomebaseBannerIcon:FounderTier2Banner5",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:FounderTier2Banner6": {
          templateId: "HomebaseBannerIcon:FounderTier2Banner6",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:FounderTier3Banner1": {
          templateId: "HomebaseBannerIcon:FounderTier3Banner1",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:FounderTier3Banner2": {
          templateId: "HomebaseBannerIcon:FounderTier3Banner2",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:FounderTier3Banner3": {
          templateId: "HomebaseBannerIcon:FounderTier3Banner3",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:FounderTier3Banner4": {
          templateId: "HomebaseBannerIcon:FounderTier3Banner4",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:FounderTier3Banner5": {
          templateId: "HomebaseBannerIcon:FounderTier3Banner5",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:FounderTier4Banner1": {
          templateId: "HomebaseBannerIcon:FounderTier4Banner1",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:FounderTier4Banner2": {
          templateId: "HomebaseBannerIcon:FounderTier4Banner2",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:FounderTier4Banner3": {
          templateId: "HomebaseBannerIcon:FounderTier4Banner3",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:FounderTier4Banner4": {
          templateId: "HomebaseBannerIcon:FounderTier4Banner4",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:FounderTier4Banner5": {
          templateId: "HomebaseBannerIcon:FounderTier4Banner5",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:FounderTier5Banner1": {
          templateId: "HomebaseBannerIcon:FounderTier5Banner1",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:FounderTier5Banner2": {
          templateId: "HomebaseBannerIcon:FounderTier5Banner2",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:FounderTier5Banner3": {
          templateId: "HomebaseBannerIcon:FounderTier5Banner3",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:FounderTier5Banner4": {
          templateId: "HomebaseBannerIcon:FounderTier5Banner4",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:FounderTier5Banner5": {
          templateId: "HomebaseBannerIcon:FounderTier5Banner5",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:NewsletterBanner": {
          templateId: "HomebaseBannerIcon:NewsletterBanner",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:InfluencerBanner1": {
          templateId: "HomebaseBannerIcon:InfluencerBanner1",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:InfluencerBanner2": {
          templateId: "HomebaseBannerIcon:InfluencerBanner2",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:InfluencerBanner3": {
          templateId: "HomebaseBannerIcon:InfluencerBanner3",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:InfluencerBanner4": {
          templateId: "HomebaseBannerIcon:InfluencerBanner4",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:InfluencerBanner5": {
          templateId: "HomebaseBannerIcon:InfluencerBanner5",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:InfluencerBanner6": {
          templateId: "HomebaseBannerIcon:InfluencerBanner6",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:InfluencerBanner7": {
          templateId: "HomebaseBannerIcon:InfluencerBanner7",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:InfluencerBanner8": {
          templateId: "HomebaseBannerIcon:InfluencerBanner8",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:InfluencerBanner9": {
          templateId: "HomebaseBannerIcon:InfluencerBanner9",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:InfluencerBanner10": {
          templateId: "HomebaseBannerIcon:InfluencerBanner10",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:InfluencerBanner11": {
          templateId: "HomebaseBannerIcon:InfluencerBanner11",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:InfluencerBanner12": {
          templateId: "HomebaseBannerIcon:InfluencerBanner12",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:InfluencerBanner13": {
          templateId: "HomebaseBannerIcon:InfluencerBanner13",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:InfluencerBanner14": {
          templateId: "HomebaseBannerIcon:InfluencerBanner14",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:InfluencerBanner15": {
          templateId: "HomebaseBannerIcon:InfluencerBanner15",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:InfluencerBanner16": {
          templateId: "HomebaseBannerIcon:InfluencerBanner16",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:InfluencerBanner17": {
          templateId: "HomebaseBannerIcon:InfluencerBanner17",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:InfluencerBanner18": {
          templateId: "HomebaseBannerIcon:InfluencerBanner18",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:InfluencerBanner19": {
          templateId: "HomebaseBannerIcon:InfluencerBanner19",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:InfluencerBanner20": {
          templateId: "HomebaseBannerIcon:InfluencerBanner20",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:InfluencerBanner21": {
          templateId: "HomebaseBannerIcon:InfluencerBanner21",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:InfluencerBanner22": {
          templateId: "HomebaseBannerIcon:InfluencerBanner22",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:InfluencerBanner23": {
          templateId: "HomebaseBannerIcon:InfluencerBanner23",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:InfluencerBanner24": {
          templateId: "HomebaseBannerIcon:InfluencerBanner24",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:InfluencerBanner25": {
          templateId: "HomebaseBannerIcon:InfluencerBanner25",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:InfluencerBanner26": {
          templateId: "HomebaseBannerIcon:InfluencerBanner26",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:InfluencerBanner27": {
          templateId: "HomebaseBannerIcon:InfluencerBanner27",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:InfluencerBanner28": {
          templateId: "HomebaseBannerIcon:InfluencerBanner28",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:InfluencerBanner29": {
          templateId: "HomebaseBannerIcon:InfluencerBanner29",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:InfluencerBanner30": {
          templateId: "HomebaseBannerIcon:InfluencerBanner30",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:InfluencerBanner31": {
          templateId: "HomebaseBannerIcon:InfluencerBanner31",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:InfluencerBanner32": {
          templateId: "HomebaseBannerIcon:InfluencerBanner32",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:InfluencerBanner33": {
          templateId: "HomebaseBannerIcon:InfluencerBanner33",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:InfluencerBanner34": {
          templateId: "HomebaseBannerIcon:InfluencerBanner34",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:InfluencerBanner35": {
          templateId: "HomebaseBannerIcon:InfluencerBanner35",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:InfluencerBanner36": {
          templateId: "HomebaseBannerIcon:InfluencerBanner36",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:InfluencerBanner37": {
          templateId: "HomebaseBannerIcon:InfluencerBanner37",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:InfluencerBanner38": {
          templateId: "HomebaseBannerIcon:InfluencerBanner38",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:InfluencerBanner39": {
          templateId: "HomebaseBannerIcon:InfluencerBanner39",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:InfluencerBanner40": {
          templateId: "HomebaseBannerIcon:InfluencerBanner40",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:InfluencerBanner41": {
          templateId: "HomebaseBannerIcon:InfluencerBanner41",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:InfluencerBanner42": {
          templateId: "HomebaseBannerIcon:InfluencerBanner42",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:InfluencerBanner43": {
          templateId: "HomebaseBannerIcon:InfluencerBanner43",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:InfluencerBanner44": {
          templateId: "HomebaseBannerIcon:InfluencerBanner44",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:InfluencerBanner45": {
          templateId: "HomebaseBannerIcon:InfluencerBanner45",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:InfluencerBanner46": {
          templateId: "HomebaseBannerIcon:InfluencerBanner46",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:InfluencerBanner47": {
          templateId: "HomebaseBannerIcon:InfluencerBanner47",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:InfluencerBanner48": {
          templateId: "HomebaseBannerIcon:InfluencerBanner48",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:InfluencerBanner49": {
          templateId: "HomebaseBannerIcon:InfluencerBanner49",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:InfluencerBanner50": {
          templateId: "HomebaseBannerIcon:InfluencerBanner50",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:InfluencerBanner51": {
          templateId: "HomebaseBannerIcon:InfluencerBanner51",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:InfluencerBanner52": {
          templateId: "HomebaseBannerIcon:InfluencerBanner52",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:InfluencerBanner53": {
          templateId: "HomebaseBannerIcon:InfluencerBanner53",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OT1Banner": {
          templateId: "HomebaseBannerIcon:OT1Banner",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OT2Banner": {
          templateId: "HomebaseBannerIcon:OT2Banner",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OT3Banner": {
          templateId: "HomebaseBannerIcon:OT3Banner",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OT4Banner": {
          templateId: "HomebaseBannerIcon:OT4Banner",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OT5Banner": {
          templateId: "HomebaseBannerIcon:OT5Banner",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OT6Banner": {
          templateId: "HomebaseBannerIcon:OT6Banner",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OT7Banner": {
          templateId: "HomebaseBannerIcon:OT7Banner",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OT8Banner": {
          templateId: "HomebaseBannerIcon:OT8Banner",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OT9Banner": {
          templateId: "HomebaseBannerIcon:OT9Banner",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OT10Banner": {
          templateId: "HomebaseBannerIcon:OT10Banner",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OT11Banner": {
          templateId: "HomebaseBannerIcon:OT11Banner",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner1": {
          templateId: "HomebaseBannerIcon:OtherBanner1",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner2": {
          templateId: "HomebaseBannerIcon:OtherBanner2",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner3": {
          templateId: "HomebaseBannerIcon:OtherBanner3",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner4": {
          templateId: "HomebaseBannerIcon:OtherBanner4",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner5": {
          templateId: "HomebaseBannerIcon:OtherBanner5",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner6": {
          templateId: "HomebaseBannerIcon:OtherBanner6",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner7": {
          templateId: "HomebaseBannerIcon:OtherBanner7",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner8": {
          templateId: "HomebaseBannerIcon:OtherBanner8",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner9": {
          templateId: "HomebaseBannerIcon:OtherBanner9",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner10": {
          templateId: "HomebaseBannerIcon:OtherBanner10",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner11": {
          templateId: "HomebaseBannerIcon:OtherBanner11",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner12": {
          templateId: "HomebaseBannerIcon:OtherBanner12",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner13": {
          templateId: "HomebaseBannerIcon:OtherBanner13",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner14": {
          templateId: "HomebaseBannerIcon:OtherBanner14",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner15": {
          templateId: "HomebaseBannerIcon:OtherBanner15",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner16": {
          templateId: "HomebaseBannerIcon:OtherBanner16",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner17": {
          templateId: "HomebaseBannerIcon:OtherBanner17",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner18": {
          templateId: "HomebaseBannerIcon:OtherBanner18",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner19": {
          templateId: "HomebaseBannerIcon:OtherBanner19",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner20": {
          templateId: "HomebaseBannerIcon:OtherBanner20",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner21": {
          templateId: "HomebaseBannerIcon:OtherBanner21",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner22": {
          templateId: "HomebaseBannerIcon:OtherBanner22",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner23": {
          templateId: "HomebaseBannerIcon:OtherBanner23",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner24": {
          templateId: "HomebaseBannerIcon:OtherBanner24",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner25": {
          templateId: "HomebaseBannerIcon:OtherBanner25",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner26": {
          templateId: "HomebaseBannerIcon:OtherBanner26",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner27": {
          templateId: "HomebaseBannerIcon:OtherBanner27",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner28": {
          templateId: "HomebaseBannerIcon:OtherBanner28",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner29": {
          templateId: "HomebaseBannerIcon:OtherBanner29",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner30": {
          templateId: "HomebaseBannerIcon:OtherBanner30",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner31": {
          templateId: "HomebaseBannerIcon:OtherBanner31",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner32": {
          templateId: "HomebaseBannerIcon:OtherBanner32",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner33": {
          templateId: "HomebaseBannerIcon:OtherBanner33",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner34": {
          templateId: "HomebaseBannerIcon:OtherBanner34",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner35": {
          templateId: "HomebaseBannerIcon:OtherBanner35",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner36": {
          templateId: "HomebaseBannerIcon:OtherBanner36",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner37": {
          templateId: "HomebaseBannerIcon:OtherBanner37",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner38": {
          templateId: "HomebaseBannerIcon:OtherBanner38",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner39": {
          templateId: "HomebaseBannerIcon:OtherBanner39",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner40": {
          templateId: "HomebaseBannerIcon:OtherBanner40",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner41": {
          templateId: "HomebaseBannerIcon:OtherBanner41",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner42": {
          templateId: "HomebaseBannerIcon:OtherBanner42",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner43": {
          templateId: "HomebaseBannerIcon:OtherBanner43",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner44": {
          templateId: "HomebaseBannerIcon:OtherBanner44",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner45": {
          templateId: "HomebaseBannerIcon:OtherBanner45",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner46": {
          templateId: "HomebaseBannerIcon:OtherBanner46",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner47": {
          templateId: "HomebaseBannerIcon:OtherBanner47",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner48": {
          templateId: "HomebaseBannerIcon:OtherBanner48",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner49": {
          templateId: "HomebaseBannerIcon:OtherBanner49",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner50": {
          templateId: "HomebaseBannerIcon:OtherBanner50",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner51": {
          templateId: "HomebaseBannerIcon:OtherBanner51",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner52": {
          templateId: "HomebaseBannerIcon:OtherBanner52",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner53": {
          templateId: "HomebaseBannerIcon:OtherBanner53",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner54": {
          templateId: "HomebaseBannerIcon:OtherBanner54",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner55": {
          templateId: "HomebaseBannerIcon:OtherBanner55",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner56": {
          templateId: "HomebaseBannerIcon:OtherBanner56",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner57": {
          templateId: "HomebaseBannerIcon:OtherBanner57",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner58": {
          templateId: "HomebaseBannerIcon:OtherBanner58",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner59": {
          templateId: "HomebaseBannerIcon:OtherBanner59",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner60": {
          templateId: "HomebaseBannerIcon:OtherBanner60",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner61": {
          templateId: "HomebaseBannerIcon:OtherBanner61",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner62": {
          templateId: "HomebaseBannerIcon:OtherBanner62",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner63": {
          templateId: "HomebaseBannerIcon:OtherBanner63",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner64": {
          templateId: "HomebaseBannerIcon:OtherBanner64",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner65": {
          templateId: "HomebaseBannerIcon:OtherBanner65",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner66": {
          templateId: "HomebaseBannerIcon:OtherBanner66",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner67": {
          templateId: "HomebaseBannerIcon:OtherBanner67",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner68": {
          templateId: "HomebaseBannerIcon:OtherBanner68",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner69": {
          templateId: "HomebaseBannerIcon:OtherBanner69",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner70": {
          templateId: "HomebaseBannerIcon:OtherBanner70",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner71": {
          templateId: "HomebaseBannerIcon:OtherBanner71",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner72": {
          templateId: "HomebaseBannerIcon:OtherBanner72",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner73": {
          templateId: "HomebaseBannerIcon:OtherBanner73",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner74": {
          templateId: "HomebaseBannerIcon:OtherBanner74",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner75": {
          templateId: "HomebaseBannerIcon:OtherBanner75",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner76": {
          templateId: "HomebaseBannerIcon:OtherBanner76",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner77": {
          templateId: "HomebaseBannerIcon:OtherBanner77",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:OtherBanner78": {
          templateId: "HomebaseBannerIcon:OtherBanner78",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:InfluencerBanner54": {
          templateId: "HomebaseBannerIcon:InfluencerBanner54",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:InfluencerBanner55": {
          templateId: "HomebaseBannerIcon:InfluencerBanner55",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:InfluencerBanner56": {
          templateId: "HomebaseBannerIcon:InfluencerBanner56",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:InfluencerBanner57": {
          templateId: "HomebaseBannerIcon:InfluencerBanner57",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:InfluencerBanner58": {
          templateId: "HomebaseBannerIcon:InfluencerBanner58",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:SurvivalBannerStonewoodComplete": {
          templateId: "HomebaseBannerIcon:SurvivalBannerStonewoodComplete",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:SurvivalBannerPlankertonComplete": {
          templateId: "HomebaseBannerIcon:SurvivalBannerPlankertonComplete",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:SurvivalBannerCannyValleyComplete": {
          templateId: "HomebaseBannerIcon:SurvivalBannerCannyValleyComplete",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:BRSeason01": {
          templateId: "HomebaseBannerIcon:BRSeason01",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:SurvivalBannerHolidayEasy": {
          templateId: "HomebaseBannerIcon:SurvivalBannerHolidayEasy",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:SurvivalBannerHolidayMed": {
          templateId: "HomebaseBannerIcon:SurvivalBannerHolidayMed",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:SurvivalBannerHolidayHard": {
          templateId: "HomebaseBannerIcon:SurvivalBannerHolidayHard",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:BRSeason02Bush": {
          templateId: "HomebaseBannerIcon:BRSeason02Bush",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:BRSeason02Salt": {
          templateId: "HomebaseBannerIcon:BRSeason02Salt",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:BRSeason02LionHerald": {
          templateId: "HomebaseBannerIcon:BRSeason02LionHerald",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:BRSeason02CatSoldier": {
          templateId: "HomebaseBannerIcon:BRSeason02CatSoldier",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:BRSeason02Dragon": {
          templateId: "HomebaseBannerIcon:BRSeason02Dragon",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:BRSeason02Planet": {
          templateId: "HomebaseBannerIcon:BRSeason02Planet",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:BRSeason02Crosshair": {
          templateId: "HomebaseBannerIcon:BRSeason02Crosshair",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:BRSeason02Bowling": {
          templateId: "HomebaseBannerIcon:BRSeason02Bowling",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:BRSeason02MonsterTruck": {
          templateId: "HomebaseBannerIcon:BRSeason02MonsterTruck",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:BRSeason02Shark": {
          templateId: "HomebaseBannerIcon:BRSeason02Shark",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:BRSeason02IceCream": {
          templateId: "HomebaseBannerIcon:BRSeason02IceCream",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:BRSeason02Log": {
          templateId: "HomebaseBannerIcon:BRSeason02Log",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:BRSeason02Cake": {
          templateId: "HomebaseBannerIcon:BRSeason02Cake",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:BRSeason02Tank": {
          templateId: "HomebaseBannerIcon:BRSeason02Tank",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:BRSeason02GasMask": {
          templateId: "HomebaseBannerIcon:BRSeason02GasMask",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:BRSeason02Vulture": {
          templateId: "HomebaseBannerIcon:BRSeason02Vulture",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:BRSeason02Sawhorse": {
          templateId: "HomebaseBannerIcon:BRSeason02Sawhorse",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:BRSeason03Bee": {
          templateId: "HomebaseBannerIcon:BRSeason03Bee",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:BRSeason03Chick": {
          templateId: "HomebaseBannerIcon:BRSeason03Chick",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:BRSeason03Chicken": {
          templateId: "HomebaseBannerIcon:BRSeason03Chicken",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:BRSeason03Crab": {
          templateId: "HomebaseBannerIcon:BRSeason03Crab",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:BRSeason03CrescentMoon": {
          templateId: "HomebaseBannerIcon:BRSeason03CrescentMoon",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:BRSeason03DeadFish": {
          templateId: "HomebaseBannerIcon:BRSeason03DeadFish",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:BRSeason03DinosaurSkull": {
          templateId: "HomebaseBannerIcon:BRSeason03DinosaurSkull",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:BRSeason03DogCollar": {
          templateId: "HomebaseBannerIcon:BRSeason03DogCollar",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:BRSeason03Donut": {
          templateId: "HomebaseBannerIcon:BRSeason03Donut",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:BRSeason03Eagle": {
          templateId: "HomebaseBannerIcon:BRSeason03Eagle",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:BRSeason03Egg": {
          templateId: "HomebaseBannerIcon:BRSeason03Egg",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:BRSeason03Falcon": {
          templateId: "HomebaseBannerIcon:BRSeason03Falcon",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:BRSeason03Flail": {
          templateId: "HomebaseBannerIcon:BRSeason03Flail",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:BRSeason03HappyCloud": {
          templateId: "HomebaseBannerIcon:BRSeason03HappyCloud",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:BRSeason03Lantern": {
          templateId: "HomebaseBannerIcon:BRSeason03Lantern",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:BRSeason03Lightning": {
          templateId: "HomebaseBannerIcon:BRSeason03Lightning",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:BRSeason03Paw": {
          templateId: "HomebaseBannerIcon:BRSeason03Paw",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:BRSeason03Shark": {
          templateId: "HomebaseBannerIcon:BRSeason03Shark",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:BRSeason03ShootingStar": {
          templateId: "HomebaseBannerIcon:BRSeason03ShootingStar",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:BRSeason03Snake": {
          templateId: "HomebaseBannerIcon:BRSeason03Snake",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:BRSeason03Sun": {
          templateId: "HomebaseBannerIcon:BRSeason03Sun",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:BRSeason03TeddyBear": {
          templateId: "HomebaseBannerIcon:BRSeason03TeddyBear",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:BRSeason03TopHat": {
          templateId: "HomebaseBannerIcon:BRSeason03TopHat",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:BRSeason03Whale": {
          templateId: "HomebaseBannerIcon:BRSeason03Whale",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:BRSeason03Wing": {
          templateId: "HomebaseBannerIcon:BRSeason03Wing",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:BRSeason03Wolf": {
          templateId: "HomebaseBannerIcon:BRSeason03Wolf",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:BRSeason03Worm": {
          templateId: "HomebaseBannerIcon:BRSeason03Worm",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:SurvivalBannerStorm2018Easy": {
          templateId: "HomebaseBannerIcon:SurvivalBannerStorm2018Easy",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:SurvivalBannerStorm2018Med": {
          templateId: "HomebaseBannerIcon:SurvivalBannerStorm2018Med",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
        "HomebaseBannerIcon:SurvivalBannerStorm2018Hard": {
          templateId: "HomebaseBannerIcon:SurvivalBannerStorm2018Hard",
          attributes: {
            item_seen: true,
          },
          quantity: 1,
        },
      },
      stats: {
        attributes: {
          survey_data: {},
          personal_offers: {},
          intro_game_played: true,
          import_friends_claimed: {},
          mtx_purchase_history: {
            refundsUsed: 0,
            refundCredits: 3,
            purchases: [],
          },
          undo_cooldowns: [],
          mtx_affiliate_set_time: "None",
          inventory_limit_bonus: 0,
          current_mtx_platform: "EpicPC",
          mtx_affiliate: "None",
          forced_intro_played: "Coconut",
          weekly_purchases: {},
          daily_purchases: {},
          ban_history: {
            banCount: {},
            banTier: {},
          },
          in_app_purchases: {
            receipts: [],
            fulfillmentCounts: {},
            ignoredReceipts: [],
            refreshTimers: {
              EpicPurchasingService: {
                nextEntitlementRefresh: "2023-09-16T01:26:50.347Z",
              },
            },
            version: 1,
          },
          permissions: [],
          undo_timeout: "min",
          monthly_purchases: {},
          allowed_to_send_gifts: true,
          mfa_enabled: false,
          allowed_to_receive_gifts: true,
          gift_history: {},
          banner_icon: "",
          banner_color: "",
          homebase_name: "",
          gifts: [],
          ban_status: {
            bRequiresUserAck: false,
            bBanHasStarted: false,
            banReasons: [],
            banStartTimeUtc: null,
            banDurationDays: null,
            additionalInfo: "",
            exploitProgramName: "",
            competitiveBanReason: "None",
          },
        },
      },
      commandRevision: 0,
    };
  }

  getProfile(): IProfile {
    return this.profile;
  }
}
