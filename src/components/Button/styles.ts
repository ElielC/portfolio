import styled from "styled-components"

import { Button } from "@material-ui/core"

interface BarretoButtonProps {
  $expanded?: boolean
  buttoncolor?: "primary" | "danger"
}
export const BarretoButton = styled(Button)<BarretoButtonProps>`
  width: ${props => props.$expanded && "100%"};
  padding: 0.9rem 1.3rem 0.9rem 1.3rem;
  text-transform: unset;
  color: ${({ theme }) => theme.colors["white.100"]};
  transition: filter 0.2s;
  font: 400 1rem "Open Sans", sans-serif;
  background-color: ${props =>
    props.buttoncolor
      ? props.buttoncolor === "danger"
        ? ({ theme }) => theme.colors["red.100"]
        : ({ theme }) => theme.colors["brown.100"]
      : ({ theme }) => theme.colors["gray.300"]};
  &:hover {
    background-color: ${props =>
      props.buttoncolor
        ? props.buttoncolor === "danger"
          ? ({ theme }) => theme.colors["red.100"]
          : ({ theme }) => theme.colors["brown.100"]
        : ({ theme }) => theme.colors["gray.300"]};
    filter: brightness(0.9);
  }
  &:disabled {
    background-color: ${props =>
      props.buttoncolor
        ? ({ theme }) => theme.colors["brown.200"]
        : ({ theme }) => theme.colors["gray.200"]};
  }
`
