import styled from "styled-components"

import { Alert as MaterialAlert } from "@material-ui/lab"

export const Alert = styled(MaterialAlert)`
  color: white;
  margin-right: 1.5rem;
  background-color: ${props =>
    props.severity === "error"
      ? ({ theme }) => theme.colors["red.100"]
      : props.severity === "warning"
      ? ({ theme }) => theme.colors["yellow.100"]
      : props.severity === "info"
      ? ({ theme }) => theme.colors["blue.100"]
      : ({ theme }) => theme.colors["brown.100"]};
`
