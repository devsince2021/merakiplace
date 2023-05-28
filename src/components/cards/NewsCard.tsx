import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";

import { News } from "../../types";
import { vw } from "../../utils";
import { Images } from "../../constants";

interface Props {
  item: News;
  onClickCard: (item: News) => void;
  onChangeScrap: (item: News, currentState: boolean) => void;
}

export const NewsCard: FC<Props> = ({ item, onClickCard, onChangeScrap }) => {
  const [isScrapped, setIsScrapped] = useState(item.isScrapped);

  useEffect(() => {
    onChangeScrap(item, isScrapped);
  }, [isScrapped]);

  const handleClickCard = () => {
    onClickCard(item);
  };

  const handleClickScrap = () => {
    setIsScrapped((prev) => !prev);
  };

  return (
    <Container onClick={handleClickCard}>
      <TitleContainer>
        <TitleText>{item.title}</TitleText>
        <Icon
          src={isScrapped ? Images.star_filled : Images.star_empty}
          onClick={handleClickScrap}
        />
      </TitleContainer>
      <div style={{ height: vw(8) }} />
      <MetaContainer>
        <ReportContainer>
          <ReporterText>{item.organization}</ReporterText>
          <div style={{ width: vw(5) }} />
          <ReporterText>{item.reporter}</ReporterText>
        </ReportContainer>
        <DateText>{item.publishDate}</DateText>
      </MetaContainer>
    </Container>
  );
};

const Container = styled.div`
  width: ${vw(335)};
  min-height: 104px;

  margin-bottom: 10px;
  padding: ${vw(10)} ${vw(20)};
  background-color: ${({ theme }) => theme.colors.white90};
  border-radius: 8px;

  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 52px;
  height: ${vw(56)};
  max-height: 60px;
`;

const TitleText = styled.div`
  width: ${vw(260)};

  font-size: 1.8rem;
  line-height: 2.8rem;
  letter-spacing: -0.05em;
  font-weight: 600;

  color: ${({ theme }) => theme.colors.black100};
`;

const Icon = styled.img`
  margin-top: 4.5px;
  width: ${vw(16)};
  height: ${vw(15)};
`;

const MetaContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ReportContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const ReporterText = styled.div`
  max-width: 100px;
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  font-size: 1.3rem;
  line-height: 2rem;
  letter-spacing: -0.05em;
  font-weight: 400;
`;

const DateText = styled.div`
  font-size: 1.3rem;
  line-height: 2rem;
  letter-spacing: -0.05em;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.black80};
`;
