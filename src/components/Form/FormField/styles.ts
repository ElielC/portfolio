import styled from "styled-components"

import { TextField, InputLabel } from "@material-ui/core"

export const Container = styled.div`
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
`

export const Label = styled(InputLabel)`
  font: 400 1.2rem "Open Sans", sans-serif;
  color: ${({ theme }) => theme.colors["gray.300"]};
`

export const InputField = styled(TextField)`
  width: 100%;
  & label.Mui-focused {
    color: ${({ theme }) => theme.colors["brown.100"]};
  }
  &:hover label {
    color: ${({ theme }) => theme.colors["brown.100"]};
  }
  & .MuiOutlinedInput-root {
    &:hover fieldset {
      border-color: ${({ theme }) => theme.colors["brown.100"]};
      border-width: 2px;
    }
    &.Mui-focused fieldset {
      border-color: ${({ theme }) => theme.colors["brown.100"]};
    }
    &.Mui-disabled fieldset {
      border-color: ${({ theme }) => theme.colors["gray.200"]};
      background-color: ${({ theme }) => theme.colors["gray.100"]}33;
    }
  }
  input {
    color: ${({ theme }) => theme.colors["gray.300"]};
    padding: 1rem;
    font: 400 1rem "Open Sans", sans-serif;
  }
  textarea {
    color: ${({ theme }) => theme.colors["gray.300"]};
    font: 400 1rem "Open Sans", sans-serif;
  }
  input:disabled,
  textarea:disabled {
    color: ${({ theme }) => theme.colors["gray.300"]};
  }
`
