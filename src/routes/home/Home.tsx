import React, { Fragment } from "react";
import styled from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";
import _ from "lodash";
import { useHomeData } from "./hooks";

import { NAVIGATION_HEIGHT } from "../../components/layouts/navigations/BottomNavigation";
import { News } from "../../types";
import { vw } from "../../utils";
import { NewsCard } from "../../components";
import { Colors, Words } from "../../constants";
import { HomeEmptyScreen } from "./HomeEmptyScreen";

export const Home = () => {
  const { observerRef, isLoading, newsList, isEmpty, changeScrapNews } =
    useHomeData();

  const goToDetail = (item: News) => {
    window.location.href = item.webUrl;
  };

  const scrapNews = (item: News, isScrapped: boolean) => {
    changeScrapNews(item, isScrapped);

    if (isScrapped) {
      setTimeout(() => alert(Words.scrap_on), 200);
    }
  };

  if (isEmpty) {
    return (
      <Container>
        <HomeEmptyScreen />
      </Container>
    );
  }

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
              visible
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
