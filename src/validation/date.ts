import * as Yup from "yup"

export const dateValidation = Yup.date()
  .typeError("É preciso informar alguma data")
  .required("É preciso informar alguma data")
