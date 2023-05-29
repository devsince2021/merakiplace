import React, { Fragment, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";
import _ from "lodash";

import { NAVIGATION_HEIGHT } from "../../components/layouts/navigations/BottomNavigation";
import { useSelectorFilter } from "../../hooks";
import { Filter, News, createNews } from "../../types";
import { getArticle } from "./helpers";
import { vw } from "../../utils";
import { NewsCard } from "../../components";
import { useInView } from "react-intersection-observer";
import { Colors } from "../../constants";

const canLoad = (filter: Filter, newsList?: News[]) => {
  return (filter.page + 1) * 10 === newsList?.length;
};

export const Home = () => {
  const [filter, setFilter] = useSelectorFilter();
  const [newsList, setNewsList] = useState<News[]>();
  const [isLoading, setIsLoading] = useState(false);

  const { ref, inView } = useInView();

  useEffect(() => {
    return () => {
      setFilter({ ...filter, page: 0 });
    };
  }, []);

  useEffect(() => {
    if (inView) {
      increasePage();
    }
  }, [inView]);

  useEffect(() => {
    if (!isLoading) {
      setIsLoading(true);
      getArticle(filter)
        ?.then((res) => {
          const newList = res.map(createNews);
          setNewsList((prev = []) => [...prev, ...newList]);
          setIsLoading(false);
        })
        .catch(() => {
          setFilter({ ...filter, page: filter.page ? filter.page - 1 : 0 });
          setIsLoading(false);
        });
    }
  }, [filter]);

  const goToDetail = (item: News) => {
    window.location.href = item.webUrl;
  };

  const scrapNews = (item: News, isScrapped: boolean) => {
    // do scrap
  };

  const increasePage = () => {
    if (canLoad(filter, newsList) && !isLoading) {
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
            {isTarget && <div ref={ref} />}
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
