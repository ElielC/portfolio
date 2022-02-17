import { HTMLAttributes } from "react"

import useColor from "@/hooks/useColor"
import useFontSize from "@/hooks/useFontSize"
import { ColorsType, FontSizeType } from "@/styles/theme"

export interface TextProps<As extends React.ElementType = React.ElementType>
  extends HTMLAttributes<As> {
  as?: As
  size?: FontSizeType
  colorKey?: ColorsType
  href?: string
  target?: string
  rel?: string
  fontWeight?:
    | "initial"
    | "bold"
    | "normal"
    | (number & Record<string, unknown>)
}

const Text: React.FC<TextProps> = ({
  as: Component = "p",
  size = "text.md",
  colorKey = "grey.100",
  fontWeight = "normal",
  children,
  style,
  ...props
}) => {
  const color = useColor(colorKey)
  const fontSize = useFontSize(size)
  return (
    <Component style={{ ...style, fontWeight, color, fontSize }} {...props}>
      {children}
    </Component>
  )
}

export default Text
