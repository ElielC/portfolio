import { useEffect, useRef, KeyboardEventHandler, useCallback } from "react"

import { TextFieldProps } from "@material-ui/core"
import { useField } from "@unform/core"

import { InputField, Container, Label } from "./styles"

interface OwnProps {
  name: string
  label?: string
}

type InputProps = OwnProps & TextFieldProps

const FormField: React.FC<InputProps> = ({
  name,
  label,
  type = "text",
  ...rest
}) => {
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
      <InputField
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
      />
    </Container>
  )
}

export default FormField
