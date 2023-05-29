import React, { Fragment, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import _ from "lodash";

import { NAVIGATION_HEIGHT } from "../../components/layouts/navigations/BottomNavigation";
import { useSelectorFilter } from "../../hooks";
import { News, createNews } from "../../types";
import { getArticle } from "./helpers";
import { vw } from "../../utils";
import { NewsCard } from "../../components";
import { useInView } from "react-intersection-observer";

export const Home = () => {
  const [filter, setFilter] = useSelectorFilter();
  const [newsList, setNewsList] = useState<News[]>();

  const { ref, inView } = useInView();

  useEffect(() => {
    increasePage();
  }, [inView]);

  useEffect(() => {
    getArticle(filter)?.then((res) => {
      const newList = res.map(createNews);
      setNewsList((prev = []) => [...prev, ...newList]);
    });
  }, [filter]);

  const goToDetail = (item: News) => {
    // window.location.href = item.webUrl;
  };

  const scrapNews = (item: News, isScrapped: boolean) => {
    // do scrap
  };

  const increasePage = () => {
    if ((filter.page + 1) * 10 === newsList?.length) {
      setFilter({ ...filter, page: filter.page + 1 });
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
            {isTarget && <div ref={ref} style={{ border: "1px solid red" }} />}
          </Fragment>
        );
      })}
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
