import React, { FC, PropsWithChildren } from "react";
import styled from "styled-components";
import { BottomNavigation } from "./navigations";
import { FilterHeader } from "../headers";

export const MobileLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container>
      <FilterHeader />
      {children}
      <BottomNavigation />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
