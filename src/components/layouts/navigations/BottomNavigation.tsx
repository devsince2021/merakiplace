import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

import { Path, Images, Words } from "../../../constants";
import { vw, vh } from "../../../utils";

interface Destination {
  to: string;
  icon: [string, string];
  title: string;
}

const buttons: Destination[] = [
  {
    to: Path.home,
    icon: [Images.home_off, Images.home_on],
    title: Words.home,
  },
  {
    to: Path.scrap,
    icon: [Images.scrap_off, Images.scrap_on],
    title: Words.scrap,
  },
];

export const BottomNavigation = () => {
  const { pathname } = useLocation();

  return (
    <Container>
      {buttons.map(({ to, icon, title }) => {
        const isActive = pathname === to;

        return (
          <StyledLink to={to} key={to}>
            <StyledImg src={icon[Number(isActive)]} alt={title} />
            <div style={{ height: vh(10) }} />
            <StyledText isActive={isActive}>{title}</StyledText>
          </StyledLink>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: ${vw(375)};
  padding: ${vh(20)} ${vw(80)};

  position: fixed;
  bottom: 0;
  left: 0;

  background-color: ${({ theme }) => theme.colors.black100};
  border-radius: 30px;
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;

const StyledText = styled.div<{ isActive: boolean }>`
  font-weight: 600;
  font-size: ${vw(10)};
  line-height: ${vw(12)};

  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.white100 : theme.colors.black80};
`;

const StyledImg = styled.img`
  width: ${vw(20)};
`;
