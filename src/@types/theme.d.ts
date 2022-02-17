import { theme } from "@/styles/theme"
import "styled-components"

declare module "styled-components" {
  export type ThemeType = typeof theme

  export interface DefaultTheme extends ThemeType {}
}
