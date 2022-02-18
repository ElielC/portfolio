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
  color: ${props =>
    props.buttoncolor
      ? props.buttoncolor === "danger"
        ? ({ theme }) => theme.colors["white.100"]
        : ({ theme }) => theme.colors["grey.950"]
      : ({ theme }) => theme.colors["grey.950"]};
  transition: filter 0.2s;
  font: 400 1rem "Open Sans", sans-serif;
  background-color: ${props =>
    props.buttoncolor
      ? props.buttoncolor === "danger"
        ? ({ theme }) => theme.colors["danger-base"]
        : ({ theme }) => theme.colors["portfolio-dark"]
      : ({ theme }) => theme.colors["white.100"]};
  &:hover {
    background-color: ${props =>
      props.buttoncolor
        ? props.buttoncolor === "danger"
          ? ({ theme }) => theme.colors["danger-base"]
          : ({ theme }) => theme.colors["portfolio-dark"]
        : ({ theme }) => theme.colors["white.100"]};
    filter: brightness(0.9);
  }
  &:disabled {
    background-color: ${props =>
      props.buttoncolor
        ? ({ theme }) => theme.colors["portfolio-mid"]
        : ({ theme }) => theme.colors["gray.100"]};
  }
`
