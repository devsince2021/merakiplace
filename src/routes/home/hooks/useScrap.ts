import { useEffect, useState } from "react";
import _ from "lodash";

import { News, ScrappedNews } from "../../../types";
import { storage, Storage_Key } from "../../../utils";

export const useScrap = () => {
  const [scrappedNews, setScrappedNews] = useState<ScrappedNews>({});

  useEffect(() => {
    const scrappedList = storage.getItem<ScrappedNews>(Storage_Key.scrap, {});
    setScrappedNews(scrappedList);
  }, []);

  const scarp = (item: News) => {
    const scrapTable = storage.getItem<ScrappedNews>(Storage_Key.scrap, {});

    if (!_.isNil(scrapTable)) {
      scrapTable[item.id] = item;
      storage.setItem(Storage_Key.scrap, scrapTable);
    }
  };

  const unscrap = (item: News) => {
    const scrapTable = storage.getItem<ScrappedNews>(Storage_Key.scrap, {});

    if (!_.isNil(scrapTable)) {
      scrapTable[item.id] = undefined;
      storage.setItem(Storage_Key.scrap, scrapTable);
    }
  };

  return { scrappedNews, scarp, unscrap };
};
