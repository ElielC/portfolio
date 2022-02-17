import { useEffect, useRef } from "react"

import { SwitchProps as MaterialSwitchProps } from "@material-ui/core"
import { useField } from "@unform/core"

import { MaterialSwitch, Container, Label } from "./styles"

interface OwnProps {
  name: string
  label?: string
}

type SwitchProps = OwnProps & MaterialSwitchProps

const Switch: React.FC<SwitchProps> = ({ name, label, ...rest }) => {
  const SwitchRef = useRef(null)

  const { fieldName, defaultValue, registerField } = useField(name)

  useEffect(() => {
    if (SwitchRef.current) {
      registerField({
        name: fieldName,
        ref: SwitchRef.current,
        path: "value"
      })
    }
  }, [fieldName, registerField])

  return (
    <Container>
      <MaterialSwitch
        name={fieldName}
        ref={SwitchRef}
        defaultValue={defaultValue}
        onKeyPress={e => e.key === "Enter" && e.preventDefault()}
        {...(rest as Omit<SwitchProps, "name" | "label">)}
      />
      <Label>{label}</Label>
    </Container>
  )
}

export default Switch
