import "styled-components";
import { Colors } from "../src/constants";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: typeof Colors;
  }

  export interface DarkTheme {
    colors: typeof Colors;
  }
}
