import * as Yup from "yup"

export const confirmPasswordValidation = Yup.string().oneOf(
  [Yup.ref("password"), null],
  "As senhas devem ser iguais"
)
