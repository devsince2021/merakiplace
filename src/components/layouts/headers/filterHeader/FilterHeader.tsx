import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";

import { vw } from "../../../../utils";
import { Country, UserModalInput } from "../../../../types";
import { Images, Words } from "../../../../constants";
import { useSelectorFilter } from "../../../../hooks";
import { FilterModal } from "../../../modals";
import { FilterButton } from "./FilterButton";

Modal.setAppElement("#root");

const getDisplayText = (countries: Country[] = []) => {
  switch (countries.length) {
    case 0:
      return;
    case 1:
      return countries[0].name;
    default:
      return `${countries[0].name} 외 ${countries.length - 1}개`;
  }
};

export const FilterHeader = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [selectedFilter, setSelectedFilter] = useSelectorFilter();

  const openModal = () => {
    setIsModalOpened(true);
  };

  const closeModal = () => {
    setIsModalOpened(false);
  };

  const selectFilter = (filter: UserModalInput) => {
    setIsModalOpened(false);
    setSelectedFilter({ ...filter, page: 0 });
  };

  return (
    <>
      <Container>
        <FilterButton
          onClick={openModal}
          placeholder={Words.header_headline_placeholder}
          iconPaths={[Images.search_gray, Images.search_blue]}
          value={selectedFilter.headline}
        />
        <div style={{ width: vw(7) }} />
        <FilterButton
          onClick={openModal}
          placeholder={Words.header_date_placeholder}
          iconPaths={[Images.calendar_gray, Images.calendar_blue]}
          value={selectedFilter.date}
        />
        <div style={{ width: vw(7) }} />
        <FilterButton
          onClick={openModal}
          value={getDisplayText(selectedFilter.countries)}
          placeholder={Words.header_country_placeholder}
        />
      </Container>
      <FilterModal
        initialValue={selectedFilter}
        isOpen={isModalOpened}
        onRequestClose={closeModal}
        onApply={selectFilter}
      />
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: ${vw(375)};
  max-height: 68px;
  padding: ${vw(13)} 0px ${vw(13)} ${vw(20)};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;
