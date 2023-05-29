import _ from "lodash";
import Axios from "./apiConfig";
import { SearchReq, SearchRes } from "./apiInterfaces";

export const getArticle = async (req: SearchReq): Promise<SearchRes> => {
  const keyword = encodeURIComponent(req.keyword);
  const date = encodeURIComponent(req.date);
  const countries = req.countries.map(encodeURIComponent).join(" OR ");

  const response = await Axios({
    method: "GET",
    params: {
      q: keyword,
      begin_date: !_.isEmpty(date) ? date : undefined,
      end_date: !_.isEmpty(date) ? date : undefined,
      fq: !_.isEmpty(countries) ? `glocatioins:(${countries})` : undefined,
      page: req.page,
    },
  });

  return response.data;
};
