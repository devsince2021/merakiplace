const baseUrl =
  process.env.NODE_ENV === "production"
    ? `${process.env.IMAGE_BASE_URL}/assets`
    : "/assets";

const attachBaseUrl = (path: string) => `${baseUrl}/${path}`;

export const Images = {
  scrap_white: attachBaseUrl("scrap_white@2x.png"),
  scrap_gray: attachBaseUrl("scrap_gray@2x.png"),
  home_white: attachBaseUrl("home_white@2x.png"),
  home_gray: attachBaseUrl("home_gray@2x.png"),
  search_gray: attachBaseUrl("search_gray@2x.png"),
  search_blue: attachBaseUrl("search_blue@2x.png"),
  calendar_gray: attachBaseUrl("calendar_check_gray@2x.png"),
  calendar_blue: attachBaseUrl("calendar_check_blue@2x.png"),
  star_empty: attachBaseUrl("star_empty@2x.png"),
  star_filled: attachBaseUrl("star_filled@2x.png"),
  docs: attachBaseUrl("docs@2x.png"),
};
