import _ from "lodash";

import { SearchReq } from "../../apis/apiInterfaces";
import * as apiActions from "../../apis/apiActions";
import { Filter } from "../../types";

export const getArticle = _.throttle(
  async (filter: Filter) => {
    const req: SearchReq = {
      keyword: filter.headline,
      date: filter.date,
      countries: filter.countries.map(({ id }) => id),
      page: 0,
    };
    const data = await apiActions.getArticle(req);
    return data;
  },
  500,
  { trailing: false }
);