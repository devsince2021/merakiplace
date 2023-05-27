import React, { FC } from "react";
import styled from "styled-components";
import _ from "lodash";

import { vw } from "../../../../utils";

interface Props {
  iconPath?: string;
  onClick: () => void;
  value?: string;
  placeholder: string;
}

export const FilterButton: FC<Props> = ({
  iconPath,
  onClick,
  value,
  placeholder,
}) => {
  return (
    <Container onClick={onClick}>
      {!_.isNil(iconPath) && (
        <>
          <Icon src={iconPath} />
          <div style={{ width: vw(4) }} />
        </>
      )}
      <Text>{value ?? placeholder}</Text>
    </Container>
  );
};

const Container = styled.div<{ isActive?: boolean }>`
  border: 1px solid ${({ theme }) => theme.colors.black80};
  display: flex;
  align-items: center;
  padding: ${vw(4)} ${vw(11)};

  max-height: 38px;

  border-radius: 30px;
`;

const Icon = styled.img`
  min-width: 14px;
  width: ${vw(16)};
  max-width: 18px;
`;

const Text = styled.div`
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 2.4rem;
  letter-spacing: -0.04em;

  color: ${({ theme }) => theme.colors.black80};
`;
