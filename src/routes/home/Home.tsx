import React, { useEffect, useState } from "react";
import styled from "styled-components";
import _ from "lodash";

import { NAVIGATION_HEIGHT } from "../../components/layouts/navigations/BottomNavigation";
import { useSelectorFilter } from "../../hooks";
import { News, createNews } from "../../types";
import { getArticle } from "./helpers";
import { vw } from "../../utils";
import { NewsCard } from "../../components";

export const Home = () => {
  const [filter, setFilter] = useSelectorFilter();
  const [newsList, setNewsList] = useState<News[]>();

  useEffect(() => {
    getArticle(filter)?.then((res) => {
      const news = res.map(createNews);
      setNewsList(news);
    });
  }, [filter]);

  const goToDetail = (item: News) => {
    // window.location.href = item.webUrl;
  };

  const scrapNews = (item: News, isScrapped: boolean) => {
    // do scrap
  };

  return (
    <Container>
      {newsList?.map((news) => (
        <NewsCard
          key={news.id}
          item={news}
          onClickCard={goToDetail}
          onChangeScrap={scrapNews}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.bgGray};

  padding: ${vw(20)};
  padding-bottom: ${75 + NAVIGATION_HEIGHT}px;
  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0.5em;
    background-color: ${({ theme }) => theme.colors.bgGray};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.bgGray};
  }
`;
