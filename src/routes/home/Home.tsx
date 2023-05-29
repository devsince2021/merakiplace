import React, { Fragment, useState } from "react";
import styled from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";
import _ from "lodash";

import { NAVIGATION_HEIGHT } from "../../components/layouts/navigations/BottomNavigation";
import { Filter, News } from "../../types";
import { vw } from "../../utils";
import { NewsCard } from "../../components";
import { Colors } from "../../constants";
import { useFetch } from "./useFetch";

export const Home = () => {
  const { observerRef, isLoading, newsList } = useFetch();
  const [scrappedNews, setScrappedNews] = useState<News[]>([]);

  const goToDetail = (item: News) => {
    window.location.href = item.webUrl;
  };

  const scrapNews = (item: News, isScrapped: boolean) => {
    if (isScrapped) {
      setScrappedNews((prev) => [...prev, item]);
      alert("스크랩 되었어요!");
    } else {
      setScrappedNews((prev) => prev.filter(({ id }) => id !== item.id));
    }
  };

  return (
    <Container>
      {newsList?.map((news, idx) => {
        const isTarget = idx % 10 === 7;

        return (
          <Fragment key={news.id}>
            <NewsCard
              item={news}
              onClickCard={goToDetail}
              onChangeScrap={scrapNews}
            />
            {isTarget && <div ref={observerRef} />}
          </Fragment>
        );
      })}

      <ClipLoader
        loading={isLoading}
        color={Colors.black100}
        cssOverride={{ position: "absolute", top: "35%" }}
      />
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
