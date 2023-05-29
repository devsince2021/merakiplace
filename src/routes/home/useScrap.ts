import { useEffect, useRef, useState } from "react";
import _ from "lodash";

import { News } from "../../types";
import { storage, Storage_Key } from "../../utils";

export const useScrap = () => {
  const [scrappedNews, setScrappedNews] = useState<News[]>([]);
  const initialRender = useRef(true);

  useEffect(() => {
    if (!initialRender.current) {
      storage.setItem(Storage_Key.scrap, scrappedNews);
    }

    initialRender.current = false;
  }, [scrappedNews]);

  const scarp = (item: News) => {
    setScrappedNews((prev) => [...prev, item]);
  };

  const unscrap = (item: News) => {
    setScrappedNews((prev) => prev.filter(({ id }) => id !== item.id));
  };

  return { scarp, unscrap };
};
