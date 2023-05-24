import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

import { Path, colors, images, words } from "../../constants";

interface Destination {
  to: string;
  icon: [string, string];
  title: string;
}

const buttons: Destination[] = [
  {
    to: Path.home,
    icon: [images.home_off, images.home_on],
    title: words.home,
  },
  {
    to: Path.scrap,
    icon: [images.scrap_off, images.scrap_on],
    title: words.scrap,
  },
];

const BottomNavigation = () => {
  const { pathname } = useLocation();

  return (
    <Container>
      {buttons.map(({ to, icon, title }) => {
        const isActive = pathname === to;

        return (
          <StyledLink to={to} key={to}>
            <StyledImg src={icon[Number(isActive)]} alt={title} />
            <div style={{ height: "10px" }} />
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

  width: 375px;
  height: 85px; // #todo: responsive

  position: fixed;
  bottom: 0;
  left: 0;

  background-color: ${colors.black100};
  border-radius: 30px;
  padding: 20px 80px;
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
  font-size: 10px;
  line-height: 12px;

  color: ${({ isActive }) => (isActive ? colors.white100 : colors.black80)};
`;

const StyledImg = styled.img`
  width: 20px;
  height: 22px;
`;

export default BottomNavigation;
