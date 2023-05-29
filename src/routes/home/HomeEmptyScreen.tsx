import React from "react";
import styled from "styled-components";
import { Images, Words } from "../../constants";

export const HomeEmptyScreen = () => {
  return (
    <Container>
      <Icon src={Images.docs} />
      <div>
        <Text>{Words.home_empty_list1}</Text>
        <Text>{Words.home_empty_list2}</Text>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  align-items: center;

  margin-top: 250px;

  height: 80px;
  text-align: center;
`;

const Icon = styled.img`
  width: 27px;
  height: 36px;
`;

const Text = styled.div`
  font-size: 1.4rem;
`;
