import React, { ChangeEvent, FC, useEffect, useRef, useState } from "react";
import Modal, { Props as ModalProps } from "react-modal";
import styled, { css } from "styled-components";
import _ from "lodash";

import { vw } from "../../utils";
import { Images, Regex, Words } from "../../constants";
import { Country, Filter } from "../../types";

const Countries = [
  {
    id: "SOUTH KOREA",
    name: "대한민국",
    order: 0,
  },
  {
    id: "CHINA",
    name: "중국",
    order: 1,
  },
  {
    id: "JAPAN",
    name: "일본",
    order: 2,
  },
  {
    id: "NORTH KOREA",
    name: "북한",
    order: 3,
  },
  {
    id: "RUSSIA",
    name: "러시아",
    order: 4,
  },
  {
    id: "FRANCE",
    name: "프랑스",
    order: 5,
  },
  {
    id: "ENGLAND",
    name: "영국",
    order: 6,
  },
];

const Default_Value: Filter = {
  headline: "",
  date: "",
  countries: [],
};

interface Props extends ModalProps {
  initialValue: Filter;
  onApply: (filter: Filter) => void;
}

export const FilterModal: FC<Props> = ({
  initialValue,
  isOpen,
  onRequestClose,
  onApply,
}) => {
  const [filter, setFilter] = useState<Filter>(Default_Value);
  const dateInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && !_.isEqual(initialValue, Default_Value)) {
      setFilter(initialValue);
    }
  }, [isOpen]);

  const openDatePicker = () => {
    dateInputRef.current?.showPicker();
  };

  const changeHeadline = (event: ChangeEvent<HTMLInputElement>) => {
    const headline = event.target.value;

    if (!Regex.korean_and_english.test(headline)) {
      alert(Words.modal_headline_alert);
      return;
    }

    setFilter((prev) => ({ ...prev, headline }));
  };

  const changeDate = (event: ChangeEvent<HTMLInputElement>) => {
    setFilter((prev) => ({
      ...prev,
      date: event.target.value,
    }));
  };

  const selectCountry = (country: Country) => () => {
    const hasSelected = filter.countries.find(({ id }) => id === country.id);

    if (hasSelected) {
      setFilter((prev) => ({
        ...prev,
        countries: prev.countries.filter(({ id }) => id !== country.id),
      }));
    } else {
      setFilter((prev) => ({
        ...prev,
        countries: [...prev.countries, country].sort(
          (a, b) => a.order - b.order
        ),
      }));
    }
  };

  const applyFilter = () => {
    onApply(filter);
  };

  const dateText = !_.isEmpty(filter.date)
    ? filter.date
    : Words.modal_input_date_placeholder;

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
      <Field>
        <Label>{Words.modal_input_headline_title}</Label>
        <InputContainer>
          <TextInput
            type="text"
            onChange={changeHeadline}
            value={filter.headline}
            placeholder={Words.modal_input_headline_placeholder}
          />
        </InputContainer>
      </Field>

      <Blank />

      <Field>
        <Label>{Words.modal_input_date_title}</Label>
        <InputContainer>
          <DateSelector onClick={openDatePicker}>
            <DateText isActive={!_.isEmpty(filter.date)}>{dateText}</DateText>
            <Icon src={Images.calendar_gray} />
            <TextInput
              ref={dateInputRef}
              onChange={changeDate}
              value={filter.date}
              type="date"
              noShow
            />
          </DateSelector>
        </InputContainer>
      </Field>

      <Blank />

      <div>
        <Label>{Words.modal_input_country_title}</Label>
        <CountryContainer>
          {Countries.map((country) => {
            const isSelected = filter.countries.find(
              ({ id }) => id === country.id
            );

            return (
              <CountrySelector
                isActive={Boolean(isSelected)}
                key={country.id}
                onClick={selectCountry(country)}
              >
                {country.name}
              </CountrySelector>
            );
          })}
        </CountryContainer>
      </div>

      <ApplyButton onClick={applyFilter}>
        {Words.modal_apply_filter}
      </ApplyButton>
    </Modal>
  );
};

const customStyles = {
  content: {
    top: "45%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: vw(335),
    borderRadius: "16px",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
  },
};

const Field = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 78px;
  height: ${vw(82)};
  max-height: 86px;

  position: relative;
`;

const Label = styled.div`
  font-size: 1.6rem;
  line-height: 2.4rem;
  font-weight: 600;
  letter-spacing: -0.05em;
  color: ${({ theme }) => theme.colors.black100};

  margin-bottom: 10px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0px 20px;

  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 8px;

  min-height: 44px;
  height: ${vw(48)};
  max-height: 52px;
`;

const TextInput = styled.input<{ noShow?: boolean }>`
  width: 100%;

  font-size: 1.4rem;
  line-height: 2.4rem;
  font-weight: 400;
  letter-spacing: -0.04em;

  border: 0px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }

  ${({ noShow }) =>
    noShow &&
    css`
      position: absolute;
      width: 0;
    `}
`;

const Blank = styled.div`
  height: 40px;
`;

const DateSelector = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  display: relative;

  font-size: 1.4rem;
  line-height: 2.4rem;
  font-weight: 400;
  letter-spacing: -0.04em;

  color: ${({ theme }) => theme.colors.gray};
`;

const Icon = styled.img`
  min-width: 14px;
  width: ${vw(16)};
  max-width: 18px;
`;

const DateText = styled.div<{ isActive?: boolean }>`
  font-size: 1.4rem;
  line-height: 2.4rem;
  font-weight: 400;
  letter-spacing: -0.04em;

  color: ${({ theme, isActive }) =>
    !isActive ? theme.colors.gray : theme.colors.black100};
`;

const CountryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

const CountrySelector = styled.div<{ isActive?: boolean }>`
  display: flex;
  align-items: center;

  font-size: 1.4rem;
  line-height: 2.4rem;
  font-weight: 400;
  letter-spacing: -0.04em;

  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 30px;

  padding: ${vw(5)} ${vw(12)};
  margin-bottom: ${vw(6)};
  margin-right: ${vw(4)};

  ${({ isActive, theme }) =>
    isActive &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.blueMain};
      background-color: ${theme.colors.blueMain};
      color: ${theme.colors.white100};
    `}
`;

const ApplyButton = styled.div`
  margin-top: 44px;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: ${vw(60)};
  max-height: 68px;

  background-color: ${({ theme }) => theme.colors.blueMain};
  border-radius: 16px;

  font-size: 1.6rem;
  line-height: 2.4rem;
  font-weight: 600;
  letter-spacing: -0.05em;
  color: ${({ theme }) => theme.colors.white100};
`;
