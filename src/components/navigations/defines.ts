import { Path, Images, Words } from "../../constants";

interface Destination {
  to: string;
  icon: [string, string];
  title: string;
}

export const navigationButtons: Destination[] = [
  {
    to: Path.home,
    icon: [Images.home_gray, Images.home_white],
    title: Words.nav_home,
  },
  {
    to: Path.scrap,
    icon: [Images.scrap_gray, Images.scrap_white],
    title: Words.nav_scrap,
  },
];
