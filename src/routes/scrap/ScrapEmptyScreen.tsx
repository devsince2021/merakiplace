import React, { FC } from "react";
import styled from "styled-components";

import { Images, Words } from "../../constants";
import { vw } from "../../utils";

interface Props {
  onClickButton: () => void;
}

export const ScrapEmptyScreen: FC<Props> = ({ onClickButton }) => {
  return (
    <Container>
      <Icon src={Images.docs} />
      <div style={{ height: "8px" }} />
      <Text>{Words.scrap_empty_list1}</Text>
      <div style={{ height: "20px" }} />
      <Button onClick={onClickButton}>{Words.scrap_empty_button}</Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  margin-top: 250px;
  text-align: center;
`;

const Icon = styled.img`
  width: 27px;
  height: 36px;
`;

const Text = styled.div`
  font-size: 1.8rem;
  line-height: 2.8rem;
  font-weight: 600;
  letter-spacing: -0.05em;

  color: ${({ theme }) => theme.colors.black80};
`;

const Button = styled.div`
  width: ${vw(295)};
  height: 60px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.colors.white100};
  background-color: ${({ theme }) => theme.colors.blueMain};

  border-radius: 16px;

  font-size: 1.6rem;
  line-height: 2.4rem;
  font-weight: 600;
  letter-spacing: -0.05em;
`;
