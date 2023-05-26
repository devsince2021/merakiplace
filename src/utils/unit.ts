import _ from "lodash";

const DefaultScreenWidth = 375;
export const vw = (px: number, screenWidthPx = DefaultScreenWidth) => {
  const figure = ((px / screenWidthPx) * 100).toFixed(2);
  return `${figure}vw`;
};

const DefaultScreenHeight = 812;
export const vh = (px: number, screenHeighPx = DefaultScreenHeight) => {
  const figure = ((px / screenHeighPx) * 100).toFixed(2);
  return `${figure}vh`;
};
