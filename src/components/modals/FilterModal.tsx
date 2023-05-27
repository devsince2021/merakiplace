import React, { ChangeEvent, FC, useRef, useState } from "react";
import Modal, { Props as ModalProps } from "react-modal";
import styled, { css } from "styled-components";
import _ from "lodash";

import { vw } from "../../utils";
import { Images } from "../../constants";

const Countries = [
  "대한민국",
  "중국",
  "일본",
  "미국",
  "북한",
  "러시아",
  "프랑스",
  "영국",
];

interface Props extends ModalProps {
  onApply: () => void;
}

export const FilterModal: FC<Props> = ({ isOpen, onRequestClose, onApply }) => {
  const [headline, setHeadline] = useState("");
  const [date, setDate] = useState("");
  const [countries, setCountries] = useState([]);

  const dateInputRef = useRef<HTMLInputElement>(null);

  const changeHeadline = (event: ChangeEvent<HTMLInputElement>) => {
    setHeadline(event.target.value);
  };

  const openDatePicker = () => {
    dateInputRef.current?.showPicker();
  };

  const changeDate = (event: ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  const selectCountry = () => {
    //
  };

  const applyFilter = () => {
    onApply();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Example label"
    >
      <Field>
        <Label>헤드라인</Label>
        <InputContainer>
          <TextInput
            onChange={changeHeadline}
            value={headline}
            placeholder="검색하실 헤드라인을 입력해주세요."
          />
        </InputContainer>
      </Field>

      <Blank />

      <Field>
        <Label>날짜</Label>
        <InputContainer>
          <DateSelector onClick={openDatePicker}>
            <DateText isActive={!_.isEmpty(date)}></DateText>
            <Icon src={Images.calendar} />
            <TextInput
              ref={dateInputRef}
              onChange={changeDate}
              type="date"
              noShow
            />
          </DateSelector>
        </InputContainer>
      </Field>

      <Blank />

      <div>
        <Label>국가</Label>
        <CountryContainer>
          {Countries.map((c) => {
            return (
              <CountrySelector onClick={selectCountry}>{c}</CountrySelector>
            );
          })}
        </CountryContainer>
      </div>

      <ApplyButton onClick={applyFilter}>필터 적용하기</ApplyButton>
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

  padding: 0px ${vw(20)};

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

  border: 1px solid black;
  border-radius: 30px;

  padding: ${vw(5)} ${vw(12)};
  margin-bottom: ${vw(6)};
  margin-right: ${vw(4)};
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
