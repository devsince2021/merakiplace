const baseUrl =
  process.env.NODE_ENV === "Production"
    ? `${process.env.IMAGE_BASE_URL}/assets`
    : "/assets";

const attachBaseUrl = (path: string) => `${baseUrl}/${path}`;

export const images = {
  scrap: attachBaseUrl("scrap@2x.png"),
  home: attachBaseUrl("home@2x.png"),
};
