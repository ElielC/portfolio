import { ButtonProps as MaterialButtonProps } from "@material-ui/core"

import { BarretoButton } from "./styles"

interface OwnProps {
  $expanded?: boolean
  buttoncolor?: "primary" | "danger"
  isDisabled?: boolean
}

type ButtonProps = OwnProps & Omit<MaterialButtonProps, "expanded">

const Button: React.FC<ButtonProps> = ({
  children,
  $expanded,
  buttoncolor,
  isDisabled = false,
  ...rest
}) => {
  return (
    <BarretoButton
      disabled={isDisabled}
      $expanded={$expanded}
      buttoncolor={buttoncolor}
      {...(rest as Omit<ButtonProps, "expanded" & "color">)}
    >
      {children}
    </BarretoButton>
  )
}

export default Button
