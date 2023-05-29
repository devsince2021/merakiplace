import { useEffect, useState } from "react";
import _ from "lodash";

import { useScrap } from "../../../hooks";
import { useFetchScrap } from "./useFetchScrap";
import { News } from "../../../types";

export const useScrapData = () => {
  const { observerRef, isLoading, newsList, isEmpty } = useFetchScrap();
  const { changeScrapNews } = useScrap();

  const [visibleNews, setVisibleNews] = useState<number>(0);

  useEffect(() => {
    const listLength = newsList?.length ?? 0;
    setVisibleNews(isEmpty ? 0 : listLength);
  }, [newsList, isEmpty]);

  const handleChangeScrap = (item: News, isScrapped: boolean) => {
    changeScrapNews(item, isScrapped);
    setVisibleNews((prev) => prev - 1);
  };

  return {
    observerRef,
    isLoading,
    newsList,
    isEmpty: visibleNews <= 0,
    changeScrapNews: handleChangeScrap,
  };
};
