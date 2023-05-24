const baseUrl =
  process.env.NODE_ENV === "Production"
    ? `${process.env.IMAGE_BASE_URL}/assets`
    : "/assets";

const attachBaseUrl = (path: string) => `${baseUrl}/${path}`;

export const images = {
  scrap_on: attachBaseUrl("scrap_on@2x.png"),
  scrap_off: attachBaseUrl("scrap_off@2x.png"),
  home_on: attachBaseUrl("home_on@2x.png"),
  home_off: attachBaseUrl("home_off@2x.png"),
};
