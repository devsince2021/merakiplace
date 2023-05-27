import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";

import { vh, vw } from "../../../../utils";
import { Images } from "../../../../constants";
import { FilterModal } from "../../../modals";
import { FilterButton } from "./FilterButton";

Modal.setAppElement("#root");

export const FilterHeader = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const openModal = () => {
    setIsModalOpened(true);
  };

  const closeModal = () => {
    setIsModalOpened(false);
  };

  return (
    <>
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
      <FilterModal
        isOpen={isModalOpened}
        onRequestClose={closeModal}
        onApply={closeModal}
      />
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: ${vw(375)};
  padding: ${vh(13)} 0px ${vh(13)} ${vw(20)};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;
