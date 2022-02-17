import "date-fns"
import { ptBR } from "date-fns/locale"
import { KeyboardEventHandler, useCallback, useEffect, useRef } from "react"

import DateFnsUtils from "@date-io/date-fns"
import {
  KeyboardDatePickerProps,
  MuiPickersUtilsProvider
} from "@material-ui/pickers"
import { useField } from "@unform/core"

import { Container, Label, DateField } from "./styles"

interface OwnProps {
  name: string
  label?: string
}

type DatePickerProps = OwnProps & KeyboardDatePickerProps

const DatePicker: React.FC<DatePickerProps> = ({ name, label, ...rest }) => {
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
      <MuiPickersUtilsProvider locale={ptBR} utils={DateFnsUtils}>
        <DateField
          name={fieldName}
          ref={inputRef}
          format="dd/MM/yyyy"
          invalidDateMessage="Data em formato inválido"
          cancelLabel="Cancelar"
          inputVariant="outlined"
          defaultValue={defaultValue}
          error={!!error}
          helperText={error}
          margin="dense"
          onKeyPress={handleOnKeyPress}
          {...(rest as Omit<DatePickerProps, "name" | "label">)}
        />
      </MuiPickersUtilsProvider>
    </Container>
  )
}

export default DatePicker
