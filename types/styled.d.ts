import "styled-components";
import { Colors } from "../src/constants";
import { Devices } from "../src/constants/styles";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: typeof Colors;
    devices: typeof Devices;
  }

  export interface DarkTheme {
    colors: typeof Colors;
  }
}
