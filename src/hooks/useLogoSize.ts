import { DefaultTheme } from "styled-components"

import useThemeProp from "./useThemeProp"

export default function useLogoSize(
  logoSize: keyof DefaultTheme["logoSize"]
): string {
  return useThemeProp("logoSize", logoSize)
}
