/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
export default function parseErrorMessage(
  err: any,
  msg = "Ocorreu um erro inesperado"
): string {
  let msgFormatted = ""
  try {
    if (typeof err === "object") {
      if (Array.isArray(err.errors)) {
        Object.entries(err.errors).forEach(([key, value]) => {
          Object.entries(value).forEach(([key, value]) => {
            if (key === "code") {
              msgFormatted = msgFormatted + "código: " + value + "\n"
            } else {
              msgFormatted = msgFormatted + value + "! "
            }
          })
        })
      }
    }

    if (msgFormatted.length <= 0) {
      throw msg
    }

    return msgFormatted
  } catch (error) {
    return msg
  }
}
