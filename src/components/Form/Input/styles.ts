import styled from "styled-components"

import { TextField } from "@material-ui/core"

export const InputField = styled(TextField)`
  width: 100%;
  & label {
    font-size: 1rem;
    top: -0.3rem;
    padding: 0.2rem;
    background-color: ${({ theme }) => theme.colors["white.100"]};
    border-radius: 5px;
  }
  @media (max-width: 720px) {
    & label {
      top: -1rem;
    }
  }

  & label.Mui-InputBase-input.Mui-disabled {
    background-color: green;
  }

  & label.Mui-focused {
    color: ${({ theme }) => theme.colors["brown.100"]};
    top: 0;
  }

  & label.MuiInputLabel-shrink {
    top: 0;
  }

  &:hover label {
    color: ${({ theme }) => theme.colors["brown.100"]};
  }

  & .MuiOutlinedInput-root {
    background-color: ${({ theme }) => theme.colors["white.100"]};

    &:hover fieldset {
      border-color: ${({ theme }) => theme.colors["brown.100"]};
      border-width: 0.125rem;
    }
    &.Mui-focused fieldset {
      border-color: ${({ theme }) => theme.colors["brown.100"]};
    }
  }
  input {
    color: ${({ theme }) => theme.colors["gray.300"]};
    padding: 1rem;
    font: 400 "Open Sans", sans-serif;
  }
`
