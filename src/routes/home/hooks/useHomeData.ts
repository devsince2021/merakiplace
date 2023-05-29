import { useMemo } from "react";
import _ from "lodash";

import { News, ScrappedNews } from "../../../types";
import { useScrap } from "../../../hooks";
import { useFetch } from "./useFetch";

const updateScrappedStatus = (
  list: News[] = [],
  scrappedNews: ScrappedNews
) => {
  return list.map((news) => ({
    ...news,
    isScrapped: !_.isNil(scrappedNews[news.id]),
  }));
};

export const useHomeData = () => {
  const { observerRef, isLoading, newsList, isEmpty } = useFetch();
  const { changeScrapNews, scrappedNews } = useScrap();

  const newsListWithScrapStatus = useMemo(
    () => updateScrappedStatus(newsList, scrappedNews),
    [newsList, scrappedNews]
  );

  return {
    observerRef,
    isLoading,
    newsList: newsListWithScrapStatus,
    isEmpty,
    changeScrapNews,
  };
};
