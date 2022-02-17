import styled from "styled-components"

import { Select, InputLabel } from "@material-ui/core"

export const Container = styled.div`
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
`

export const StyledSelect = styled(Select)`
  width: 100%;
  & .MuiOutlinedInput-input {
    color: ${({ theme }) => theme.colors["gray.300"]};
    padding: 1rem;
    font: 400 1rem "Open Sans", sans-serif;
  }
  & .MuiOutlinedInput-input:disabled {
    color: ${({ theme }) => theme.colors["gray.300"]};
  }

  & .MuiSelect-root .MuiSelect-select:focus {
    background-color: ${({ theme }) => theme.colors["blue.100"]};
  }

  & .MuiInputBase-input {
    &:hover {
      outline: ${({ theme }) => theme.colors["brown.100"]};
      border-width: 2px;
    }
    &.Mui-focused fieldset {
      outline-color: ${({ theme }) => theme.colors["brown.100"]};
    }
    &.Mui-disabled fieldset {
      border-color: ${({ theme }) => theme.colors["gray.200"]};
      background-color: ${({ theme }) => theme.colors["gray.100"]}33;
    }
  }
`

export const Label = styled(InputLabel)`
  font: 400 1.2rem "Open Sans", sans-serif;
  color: ${({ theme }) => theme.colors["gray.300"]};
`
