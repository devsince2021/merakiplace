import { useEffect, useRef, useState } from "react";
import _ from "lodash";

import { News, ScrappedNews } from "../types";
import { storage, Storage_Key } from "../utils";

export const useScrap = () => {
  const nextScrapNews = useRef<ScrappedNews>({});
  const [currentScarpNews, setCurrentScrappedNews] = useState<ScrappedNews>({});

  useEffect(() => {
    const scrappedList = storage.getItem<ScrappedNews>(Storage_Key.scrap, {});

    nextScrapNews.current = scrappedList;
    setCurrentScrappedNews(scrappedList);

    return () => {
      storage.setItem(Storage_Key.scrap, nextScrapNews.current);
    };
  }, []);

  const changeScrapNews = (item: News, isScrapped: boolean) => {
    const scrapTable = nextScrapNews.current;
    scrapTable[item.id] = isScrapped ? { ...item, isScrapped } : undefined;
    nextScrapNews.current = scrapTable;
  };

  return {
    nextScrapStatus: nextScrapNews.current,
    scrappedNews: currentScarpNews,
    changeScrapNews,
  };
};
