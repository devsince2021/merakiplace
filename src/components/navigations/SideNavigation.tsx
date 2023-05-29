import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

import { vw } from "../../utils";
import { navigationButtons } from "./defines";

export const SideNavigation = () => {
  const { pathname } = useLocation();

  return (
    <Container>
      {navigationButtons.map(({ to, icon, title }) => {
        const isActive = pathname === to;

        return (
          <StyledLink to={to} key={to}>
            <StyledImg src={icon[Number(isActive)]} alt={title} />
            <Blank />
            <StyledText isActive={isActive}>{title}</StyledText>
          </StyledLink>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  width: ${vw(100)};
  max-width: 300px;
  height: 100vh;

  background-color: ${({ theme }) => theme.colors.black100};
  color: ${({ theme }) => theme.colors.white100};
  padding-top: 100px;
`;

const StyledLink = styled(Link)`
  width: 100%;

  display: flex;
  align-items: center;

  padding: 10px 0px;
  padding-left: ${vw(15)};
  margin-bottom: 10px;
  text-decoration: none;
`;

const StyledText = styled.div<{ isActive: boolean }>`
  font-weight: 600;
  font-size: 1.8rem;

  padding-top: 3px;

  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.white100 : theme.colors.black80};
`;

const StyledImg = styled.img`
  min-width: 14px;
  width: ${vw(20)};
  max-width: 24px;
`;

const Blank = styled.div`
  width: 20px;
`;
