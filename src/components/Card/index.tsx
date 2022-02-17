import { CardProps as MaterialCardProps } from "@material-ui/core"

import Logo from "../Logo"
import { BarretoCard, Content, Label, Description, CardSpacer } from "./styles"

interface OwnProps {
  label?: string
  description?: string
}

type CardProps = OwnProps & MaterialCardProps

const Card: React.FC<CardProps> = ({
  children,
  label,
  description,
  ...rest
}) => {
  return (
    <BarretoCard elevation={1} {...rest}>
      <Content>
        {label && <Label>{label}</Label>}
        <Logo />
        {description ? (
          <Description>{description}</Description>
        ) : (
          <CardSpacer />
        )}
        {children}
      </Content>
    </BarretoCard>
  )
}

export default Card
