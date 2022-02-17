import * as Yup from "yup"

export const textAreaValidation = Yup.string()
  .min(5, "Precisa ter no mínimo 5 letras")
  .max(300, "Precisa ter no máximo 300 letras")
  .required("É preciso inserir algum texto")
