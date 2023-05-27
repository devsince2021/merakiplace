export interface SearchReq {
  keyword: string;
  countries: string[];
  date: string;
  page: number;
}

interface SearchRes {
  status: string; // "OK"
  copyright: string;
  response: {
    docs: any[];
    meta: {};
  };
}

interface Docs {
  web_url: string;
  snippet: string;
  print_page: number;
  print_section: string;
  source: string;
  multimedia: [];
  headline: Headline;
  abstract: string;
  pub_date: string;
  keywords: [];
  _id: string; // "nyt://article/fb7a93b6-320f-540e-a5a9-d0f47b915f0b",
  uri: string; // "nyt://article/fb7a93b6-320f-540e-a5a9-d0f47b915f0b"
}

interface Headline {
  main: string;
  kicker: string;
  content_kicker: string;
  print_headline: string;
  name: string;
  seo: string;
  sub: string;
}

interface Meta {
  hits: number;
  offset: number;
  time: number;
}
