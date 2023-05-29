import React, { FC, PropsWithChildren } from "react";
import styled from "styled-components";
import { SideNavigation } from "../navigations";

export const TabletLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container>
      <SideNavigation />
      {children}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
`;
