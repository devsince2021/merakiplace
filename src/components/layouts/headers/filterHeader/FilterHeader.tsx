import React from "react";
import styled from "styled-components";
import { vh, vw } from "../../../../utils";

import { FilterButton } from "./FilterButton";
import { Images } from "../../../../constants";

export const FilterHeader = () => {
  const openModal = () => {
    console.log("open!");
  };

  return (
    <Container>
      <FilterButton
        onClick={openModal}
        placeholder="전체 헤드라인"
        iconPath={Images.search}
      />
      <div style={{ width: vw(7) }} />
      <FilterButton
        onClick={openModal}
        placeholder="전체 날짜"
        iconPath={Images.calendar}
      />
      <div style={{ width: vw(7) }} />
      <FilterButton onClick={openModal} placeholder="전체 국가" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: ${vw(375)};
  padding: ${vh(13)} 0px ${vh(13)} ${vw(20)};

  /* background-color: yellowgreen; */
`;
