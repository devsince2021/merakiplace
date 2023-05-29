import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";
import _ from "lodash";

import { NAVIGATION_HEIGHT } from "../../components/navigations/BottomNavigation";
import { News } from "../../types";
import { NewsCard } from "../../components";
import { vw } from "../../utils";
import { Colors, Path, Words } from "../../constants";

import { useScrapData } from "./hooks";
import { ScrapEmptyScreen } from "./ScrapEmptyScreen";

export const Scrap = () => {
  const navigate = useNavigate();
  const { observerRef, isLoading, newsList, isEmpty, changeScrapNews } =
    useScrapData();

  const goToDetail = (item: News) => {
    window.location.href = item.webUrl;
  };

  const scrapNews = (item: News, isScrapped: boolean) => {
    changeScrapNews(item, isScrapped);

    if (!isScrapped) {
      setTimeout(() => alert(Words.scrap_off), 200);
    }
  };

  const goToHome = () => {
    navigate(Path.home);
  };

  if (isEmpty) {
    return <ScrapEmptyScreen onClickButton={goToHome} />;
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
