import { useEffect, useState } from "react";
import _ from "lodash";

import { useSelectorFilter } from "../../../hooks";
import { Filter, News, createNews } from "../../../types";
import { getArticle, canLoad, handleError } from "./helpers";
import { useInView } from "react-intersection-observer";

export const useFetch = () => {
  const [filter, setFilter] = useSelectorFilter();
  const [newsList, setNewsList] = useState<News[]>();
  const [isLoading, setIsLoading] = useState(false);

  const { ref, inView } = useInView();

  useEffect(() => {
    return () => {
      setFilter({ ...filter, page: 0 });
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
      const response = await getArticle(currentFilter);
      const newList = response?.map(createNews) ?? [];

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
