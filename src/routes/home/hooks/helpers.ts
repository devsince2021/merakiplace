import _ from "lodash";

import { SearchReq } from "../../../apis/apiInterfaces";
import * as apiActions from "../../../apis/apiActions";
import { Filter, News } from "../../../types";

export const getArticle = _.throttle(
  async (filter: Filter) => {
    const req: SearchReq = {
      keyword: filter.headline,
      date: filter.date,
      countries: filter.countries.map(({ id }) => id),
      page: filter.page,
    };
    const data = await apiActions.getArticle(req);
    return data.response.docs;
  },
  500,
  { trailing: false }
);

export const canLoad = (filter: Filter, newsList?: News[]) => {
  return (filter.page + 1) * 10 === newsList?.length;
};

const TOO_MANY_REQUEST = 429;
export const handleError = (err: any) => {
  if (err.response.status === TOO_MANY_REQUEST) {
    alert("조금 후 다시 시도해주세요. ");
    return;
  }

  throw err;
};
