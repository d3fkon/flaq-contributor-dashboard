export interface VideoType {
  url: string;
  desc: string;
  title: string;
}

export interface ArticlesType {
  url: string;
  desc: string;
  title: string;
}
export interface CreateContentFormData {
  description1: string;
  title: string;
  image: string;
  contentType: string;
  videos: Array<VideoType>;
  articles: Array<ArticlesType>;
}