import React, { FC, PropsWithChildren, useMemo } from "react";
import { useMediaQuery as useMedia } from "react-responsive";
import _ from "lodash";
import { Responsive } from "../../constants";
import { TabletLayout } from "./TabletLayout";
import { MobileLayout } from "./MobileLayout";

interface Device {
  type: "tablet" | "mobile";
  isCurrentRange: boolean;
  component: React.FC<PropsWithChildren>;
}

export const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  const isTablet = useMedia({ query: `(min-width : ${Responsive.tablet})` });

  // Note: 화면 크기를 기준으로 내림차순 정렬이 필요합니다.
  const devices = useMemo<Device[]>(
    () => [
      {
        type: "tablet",
        isCurrentRange: isTablet,
        component: TabletLayout,
      },
      {
        type: "mobile",
        isCurrentRange: true,
        component: MobileLayout,
      },
    ],
    [isTablet]
  );

  const currentDevice = _.find(devices, ({ isCurrentRange }) => isCurrentRange);
  const Layout = currentDevice?.component ?? MobileLayout;

  return <Layout>{children}</Layout>;
};
