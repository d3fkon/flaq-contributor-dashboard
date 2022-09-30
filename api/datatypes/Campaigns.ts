export interface IArticles {
  url: string;
  title: string;
  iconUrl: string;
}

export interface IVideos {
  url: string;
  title: string;
  desc?: string;
  iconUrl?: string;
}
export interface ICampaigns {
  _id: string;
  description1: string;
  title: string;
  contentType: string;
  status: string;
  image: string;
  articles: Array<IArticles>;
  videos?: Array<IVideos>;
  quizzes: Array<string>;
  createdAt: string;
  updatedAt: string;
  isApprovedView?: boolean;
  __v: number;
}

export default interface ICampaignsData {
  _id: string;
  username?: string;
  email: string;
  discordId: string;
  campaigns: Array<ICampaigns>;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
