import styled from "styled-components"

import { InputLabel, Switch } from "@material-ui/core"

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
`

export const Label = styled(InputLabel)`
  font: 400 1.2rem "Open Sans", sans-serif;
  color: ${({ theme }) => theme.colors["gray.300"]};
`

export const MaterialSwitch = styled(Switch)`
  & .MuiIconButton-root {
    padding: 9px;
  }
  & .MuiSwitch-switchBase {
    top: 0;
    left: 0;
    z-index: 1;
    position: absolute;
    transition: left 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
    color: ${({ theme }) => theme.colors["gray.100"]};
    &:hover {
      background-color: ${({ theme }) => theme.colors["gray.100"]}50;
    }
    &.Mui-checked {
      color: ${({ theme }) => theme.colors["brown.100"]};
      &:hover {
        background-color: ${({ theme }) => theme.colors["brown.200"]}50;
      }
    }
    & + .MuiSwitch-track {
      background-color: ${({ theme }) => theme.colors["brown.200"]};
    }
  }
`
