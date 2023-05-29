import { DefaultTheme } from "styled-components";
import { Responsive } from "./responsive";

export enum Colors {
  black100 = "#000",
  black80 = "#6D6D6D",
  white100 = "#fff",
  white90 = "#FEFEFE",
  gray = "#C4C4C4",
  blueMain = "#3478F6",
  bgGray = "#F0F1F4",
}

export const Devices = {
  tablet: `screen and (min-width: ${Responsive.tablet})`,
};

export const theme: DefaultTheme = {
  colors: Colors,
  devices: Devices,
};
