import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { color } from "../../constants/color";

const Navigation = () => {
  return (
    <Container>
      <StyledLink to="/feed">feed</StyledLink>
      <StyledLink to="/scrap">scrap</StyledLink>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${color.black};
  width: 100%;
  height: 85px; // #todo: responsive
  position: fixed;
  bottom: 0;
  left: 0;

  display: flex;
  flex-direction: row;
`;

const StyledLink = styled(Link)`
  display: block;
  width: 300px;
  height: 50px;
  color: white;
  background-color: gray;
  font-size: 30px;
  border: 1px solid white;
`;

export default Navigation;
