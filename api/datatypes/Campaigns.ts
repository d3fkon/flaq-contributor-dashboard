export interface IArticles {
  url: string;
  title: string;
  iconUrl: string;
}

export interface ICampaigns {
  _id: string;
  title: string;
  contentType: string;
  status: string;
  image: string;
  articles: Array<IArticles>;
  quizzes: Array<string>;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export default interface ICampaignsData {
  _id: string;
  username: string;
  email: string;
  discordId: string;
  campaigns: Array<ICampaigns>;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
