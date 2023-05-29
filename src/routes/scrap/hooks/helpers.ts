import _ from "lodash";
import { Filter, News, ScrappedNews } from "../../../types";
import { Storage_Key, storage } from "../../../utils";

export const getArticleScrapped = async (filter: Filter, limit = 10) => {
  const scrappedTable = storage.getItem<ScrappedNews>(Storage_Key.scrap, {});
  const scrappedList = _.chain(scrappedTable).values().compact().value();

  // ----  다른 필터 조건들 검색 로직  -----

  const offset = filter.page * limit;
  const targetList = scrappedList.slice(offset, limit);

  return targetList;
};

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
