import { useEffect, useRef, KeyboardEventHandler, useCallback } from "react"

import { MenuItem, TextFieldProps } from "@material-ui/core"
import { useField } from "@unform/core"

import { Container, Label, StyledSelect } from "./styles"

interface OwnProps {
  name: string
  label?: string
}

type InputProps = OwnProps & TextFieldProps

const Select: React.FC<InputProps> = ({ name, label, ...rest }) => {
  const inputRef = useRef(null)

  const { fieldName, defaultValue, registerField, error } = useField(name)

  useEffect(() => {
    if (inputRef.current) {
      registerField({ name: fieldName, ref: inputRef.current, path: "value" })
    }
  }, [fieldName, registerField])

  const handleOnKeyPress: KeyboardEventHandler<HTMLInputElement> = useCallback(
    e => {
      if (e.key === "Enter") {
        const inputs = Array.from(
          e.currentTarget?.parentElement?.parentElement?.parentElement?.querySelectorAll(
            "input"
          ) ?? []
        ).filter(e => !e.disabled)
        const names = inputs.map(e => e.name)
        const index = names.indexOf(fieldName)
        inputs[index + 1]?.focus()
        e.preventDefault()
      }
    },
    []
  )

  return (
    <Container>
      <Label>{label}</Label>
      <StyledSelect variant="outlined">
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </StyledSelect>
      {/* <InputField
        name={fieldName}
        ref={inputRef}
        defaultValue={defaultValue}
        error={!!error}
        helperText={error}
        type={type}
        variant="outlined"
        size="medium"
        onKeyPress={handleOnKeyPress}
        {...(rest as Omit<InputProps, "name" | "label">)}
      /> */}
    </Container>
  )
}

export default Select
