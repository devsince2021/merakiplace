import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import _ from "lodash";

import { useSelectorFilter } from "../../../hooks";
import { Filter, News } from "../../../types";
import { getArticleScrapped, canLoad, handleError } from "./helpers";

export const useFetchScrap = () => {
  const [filter, setFilter, refreshPage] = useSelectorFilter();
  const [newsList, setNewsList] = useState<News[]>();

  const [isLoading, setIsLoading] = useState(false);

  const { ref, inView } = useInView();

  useEffect(() => {
    return () => {
      refreshPage;
    };
  }, []);

  useEffect(() => {
    if (inView) {
      increasePage();
    }
  }, [inView]);

  useEffect(() => {
    if (!isLoading) {
      setIsLoading(true);
      loadArticle(filter).finally(() => setIsLoading(false));
    }
  }, [filter]);

  const loadArticle = async (currentFilter: Filter) => {
    try {
      const response = await getArticleScrapped(currentFilter);
      const newList = response ?? [];

      if (currentFilter.page === 0) {
        setNewsList(newList);
      } else {
        setNewsList((prev = []) => [...prev, ...newList]);
      }
    } catch (err) {
      handleError(err);
      setFilter({
        ...currentFilter,
        page: currentFilter.page ? currentFilter.page - 1 : 0,
      });
    }
  };

  const increasePage = () => {
    if (canLoad(filter, newsList) && !isLoading) {
      setFilter({ ...filter, page: filter.page + 1 });
    }
  };

  return {
    isEmpty: !_.isNil(newsList) && _.isEmpty(newsList),
    isLoading,
    newsList,
    observerRef: ref,
  };
};
