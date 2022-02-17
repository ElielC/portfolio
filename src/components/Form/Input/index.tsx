import { KeyboardEventHandler, useCallback, useEffect, useRef } from "react"

import { IconButton, TextFieldProps } from "@material-ui/core"
import { useField } from "@unform/core"

import { InputField } from "./styles"

interface OwnProps {
  name: string
  handleIcon?(): void
  disabledIcon?: boolean
  icon?: unknown
}

type InputProps = OwnProps & TextFieldProps

const Input: React.FC<InputProps> = ({
  name,
  type = "text",
  icon,
  disabledIcon,
  handleIcon,
  ...rest
}) => {
  const inputRef = useRef(null)

  const { fieldName, defaultValue, registerField, error } = useField(name)

  useEffect(() => {
    if (inputRef.current) {
      registerField({
        name: fieldName,
        ref: inputRef.current,
        path: "value"
      })
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
      InputProps={
        icon
          ? {
              endAdornment: (
                <IconButton
                  disabled={disabledIcon}
                  style={{ padding: 0 }}
                  onClick={() => handleIcon()}
                >
                  {icon}
                </IconButton>
              )
            }
          : {}
      }
      {...(rest as Omit<InputProps, "name">)}
    />
  )
}

export default Input
