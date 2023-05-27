const baseUrl =
  process.env.NODE_ENV === "Production"
    ? `${process.env.IMAGE_BASE_URL}/assets`
    : "/assets";

const attachBaseUrl = (path: string) => `${baseUrl}/${path}`;

export const Images = {
  scrap_on: attachBaseUrl("scrap_on@2x.png"),
  scrap_off: attachBaseUrl("scrap_off@2x.png"),
  home_on: attachBaseUrl("home_on@2x.png"),
  home_off: attachBaseUrl("home_off@2x.png"),
  search: attachBaseUrl("search@2x.png"),
  search_blue: attachBaseUrl("search_blue@2x.png"),
  calendar: attachBaseUrl("calendar_check@2x.png"),
  calendar_blue: attachBaseUrl("calendar_check_blue@2x.png"),
};
