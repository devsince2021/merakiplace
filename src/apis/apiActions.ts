import Axios from "./apiConfig";
import { SearchReq } from "./apiInterfaces";

export const getArticle = async (req: SearchReq) => {
  const keyword = encodeURIComponent(req.keyword);
  const date = encodeURIComponent(req.date);
  const countries = req.countries.map(encodeURIComponent).join(" OR ");

  const response = await Axios({
    method: "GET",
    params: {
      q: keyword,
      begin_date: date,
      end_date: date,
      fq: `glocatioins:(${countries})`,
      page: req.page,
    },
  });
  console.log(response);
  return response;
};
