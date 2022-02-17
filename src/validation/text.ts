import * as Yup from "yup"

export const textValidation = Yup.string()
  .nullable()
  .min(3, "Precisa ter no mínimo 3 letras")
  .max(60, "Precisa ter no máximo 60 letras")
  .required("É preciso inserir algum texto")
