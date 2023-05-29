import { useEffect, useState } from "react";
import _ from "lodash";

import { useSelectorFilter } from "../../hooks";
import { Filter, News, createNews } from "../../types";
import { getArticle } from "./helpers";
import { useInView } from "react-intersection-observer";

const canLoad = (filter: Filter, newsList?: News[]) => {
  return (filter.page + 1) * 10 === newsList?.length;
};

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
      getArticle(filter)
        ?.then((res) => {
          const newList = res.map(createNews);
          setNewsList((prev = []) => [...prev, ...newList]);
          setIsLoading(false);
        })
        .catch(() => {
          setFilter({ ...filter, page: filter.page ? filter.page - 1 : 0 });
          setIsLoading(false);
        });
    }
  }, [filter]);

  const increasePage = () => {
    if (canLoad(filter, newsList) && !isLoading) {
      setFilter({ ...filter, page: filter.page + 1 });
    }
  };

  return {
    isLoading,
    newsList,
    observerRef: ref,
  };
};
