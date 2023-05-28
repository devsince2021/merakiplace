import { Docs } from "../apis/apiInterfaces";

export interface News {
  title: string;
  reporter: string;
  organization: string;
  publishDate: string;
  webUrl: string;
  isScrapped: boolean;
}

export const createNews = (protocol: Docs): News => {
  return {
    title: protocol.headline.main,
    reporter: protocol.byline.original ?? "No name",
    organization: protocol.byline.organization ?? protocol.source,
    publishDate: protocol.pub_date,
    webUrl: protocol.web_url,
    isScrapped: false,
  };
};
