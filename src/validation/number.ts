import * as Yup from "yup"

export const numberValidation = Yup.number()
  .nullable()
  .typeError("É preciso informar algum valor")
  .required("É preciso informar algum valor")
