import _ from "lodash";
import { Filter, ScrappedNews } from "../../types";
import { Storage_Key, storage } from "../../utils";

export const getArticleScrapped = async (filter: Filter, limit = 10) => {
  const scrappedTable = storage.getItem<ScrappedNews>(Storage_Key.scrap, {});
  const scrappedList = _.chain(scrappedTable).values().compact().value();

  // ----  다른 필터 조건들 검색 로직  -----

  const offset = filter.page * limit;
  const targetList = scrappedList.slice(offset, limit);

  return targetList;
};
