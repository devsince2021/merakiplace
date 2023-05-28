export interface SearchReq {
  keyword: string;
  countries: string[];
  date: string;
  page: number;
}

export interface SearchRes {
  copyright: string;
  status: string; // "OK"
  response: {
    docs: Docs[];
    meta: Meta;
  };
}

export interface Docs {
  abstract: string;
  byline: Byline;
  document_type: string; // "article"
  headline: Headline;
  keyword: Keyword[];
  lead_paragraph: string;
  multimedia: Multimedia[];
  news_desk: string;
  pub_date: string; // "2023-05-28T14:07:48+0000"
  section_name: string;
  snippet: string;
  source: string;
  subsection_name: string;
  type_of_material: string;
  uri: string; // "nyt://article/556fb6bf-b1dd-589a-8503-5dcd4f8d084f";
  web_url: string; // "https://www.nytimes.com/2023/05/28/opinion/letters/child-death-sarah-wildman.html";
  word_count: number;
  _id: string; // "nyt://article/fb7a93b6-320f-540e-a5a9-d0f47b915f0b",
  print_page?: number;
  print_section?: string;
}

interface Keyword {
  major: string; // "N";
  name: string; //  "subject";
  rank: string; // 1;
  value: string; // "Children and Childhood";
}

interface Byline {
  organization: string | null;
  original: string | null;
  person: [];
}

interface Multimedia {
  caption: string | null;
  credit: string | null;
  crop_name: string; // "articleLarge";
  height: number;
  legacy: {
    xlarge: string; // "images/2023/05/21/opinion/19wildman/19wildman-articleLarge.jpg";
    xlargewidth: number; // 600;
    xlargeheight: number; // 600;
  };
  rank: number; // 0;
  subType: string; // "xlarge";
  subtype: string; // "xlarge";
  type: string; // "image";
  url: string; // "images/2023/05/21/opinion/19wildman/19wildman-articleLarge.jpg";
  width: number; // 600;
}

interface Headline {
  content_kicker: string | null;
  kicker: string | null;
  main: string;
  name: string | null;
  print_headline: string;
  seo: string;
  sub: string;
}

interface Meta {
  hits: number;
  offset: number;
  time: number;
}
