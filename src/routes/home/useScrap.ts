import { useEffect, useState } from "react";
import _ from "lodash";

import { News } from "../../types";
import { storage } from "../../utils";

export const useScrap = () => {
  const [scrappedNews, setScrappedNews] = useState<News[]>([]);

  useEffect(() => {
    return () => {
      storage.setItem("scrap", scrappedNews);
    };
  }, []);

  const scarp = (item: News) => {
    setScrappedNews((prev) => [...prev, item]);
  };

  const unscrap = (item: News) => {
    setScrappedNews((prev) => prev.filter(({ id }) => id !== item.id));
  };

  return { scarp, unscrap };
};
