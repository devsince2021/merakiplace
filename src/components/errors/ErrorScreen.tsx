import React, { FC } from "react";
import styled from "styled-components";

interface Props {
  onClick: () => void;
}

export const ErrorScreen: FC<Props> = ({ onClick }) => {
  return (
    <Container>
      <Text>죄송합니다 예상치 못한 문제가 발생하였습니다.</Text>
      <Text>아래 버튼을 이용하여 다시 시작해주세요.</Text>
      <div style={{ height: "20px" }} />
      <RestartButton onClick={onClick}>다시 시작</RestartButton>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  font-size: 1.8rem;
  line-height: 3.6rem;
  font-weight: 800;
`;

const RestartButton = styled.button`
  max-width: 300px;
  width: 80%;
  height: 60px;

  border: none;
  outline: none;
  background-color: ${({ theme }) => theme.colors.blueMain};
  color: ${({ theme }) => theme.colors.white100};

  border-radius: 10px;

  font-size: 1.8rem;
  line-height: 3.6rem;
  font-weight: 500;
`;
