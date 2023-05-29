import React from "react";
import styled from "styled-components";
import { vw } from "../../utils";

export const SideNavigation = () => {
  return <Container>side nav</Container>;
};

const Container = styled.div`
  width: ${vw(100)};
  max-width: 300px;
  height: 100vh;

  background-color: ${({ theme }) => theme.colors.black100};
  color: ${({ theme }) => theme.colors.white100};
`;
