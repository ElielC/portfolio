import { theme } from "./theme"

const { colors, fontSize, logoSize } = theme

export type ColorsType = keyof typeof colors
export type FontSizeType = keyof typeof fontSize
export type LogoSizeType = keyof typeof logoSize

export * from "./theme"
