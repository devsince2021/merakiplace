import React, { FC, PropsWithChildren } from "react";
import styled from "styled-components";
import { BottomNavigation } from "./navigations";

export const MobileLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container>
      {children}
      <BottomNavigation />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  position: relative;
`;
