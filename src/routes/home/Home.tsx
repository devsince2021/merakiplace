import React, { useEffect, useState } from "react";
import styled from "styled-components";
import _ from "lodash";

import { useSelectorFilter } from "../../hooks";
import { News, createNews } from "../../types";
import { getArticle } from "./helpers";
import { vw } from "../../utils";
import { NewsCard } from "../../components";
import { useLocation } from "react-router-dom";

const testParams = {
  date: "2023-05-20",
  keyword: "samsung",
  countries: ["CANADA", "RUSSIA"],
  page: 0,
};

const dummy = {
  title: "Creamy, Spicy Poached Eggs for an Easy Sunday Morning",
  reporter: "By Sam Sifton",
  organization: "The New York Times",
  publishDate: "2023-05-28T15:00:02+0000".substring(0, 10).split("-").join("."),
  webUrl:
    "https://www.nytimes.com/2023/05/28/dining/creamy-spicy-poached-eggs-for-an-easy-sunday-morning.html",
  isScrapped: false,
};

export const Home = () => {
  const [filter, setFilter] = useSelectorFilter();
  // const [news, setNews] = useState<News>();

  // useEffect(() => {
  //   getArticle(filter)?.then((res) => {
  //     const news = res.map(createNews);
  //     setNews(news[0]);
  //   });
  // }, [filter]);

  const goToDetail = (item: News) => {
    window.location.href = item.webUrl;
  };

  const scrapNews = (item: News, isScrapped: boolean) => {
    // do scrap
  };

  return (
    <Container>
      <NewsCard
        item={dummy}
        onClickCard={goToDetail}
        onChangeScrap={scrapNews}
      />
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.bgGray};

  padding: ${vw(20)};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
