import React, { FC } from "react";
import styled from "styled-components";
import _ from "lodash";

import { vw } from "../../../utils";
import { Colors } from "../../../constants";

const getCurrentStyle = (isActive: boolean, icons?: [string, string]) => {
  const defines = [
    {
      container: { border: `1px solid ${Colors.black80}` },
      icon: icons?.[0],
      textStyle: { color: Colors.black80 },
    },
    {
      container: { border: `1px solid ${Colors.blueMain}` },
      icon: icons?.[1],
      textStyle: { color: Colors.blueMain },
    },
  ];

  return defines[Number(isActive)];
};

interface Props {
  iconPaths?: [string, string];
  onClick: () => void;
  value?: string;
  placeholder: string;
}

export const FilterButton: FC<Props> = ({
  iconPaths,
  onClick,
  value,
  placeholder,
}) => {
  const isActive = !_.isEmpty(value);

  const { container, icon, textStyle } = getCurrentStyle(isActive, iconPaths);
  const text = isActive ? value : placeholder;

  return (
    <Container onClick={onClick} style={container}>
      {!_.isNil(iconPaths) && !_.isEmpty(iconPaths) && (
        <>
          <Icon src={icon} />
          <div style={{ width: vw(4) }} />
        </>
      )}
      <Text style={textStyle}>{text}</Text>
    </Container>
  );
};

const Container = styled.div`
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

  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 80px;
`;
