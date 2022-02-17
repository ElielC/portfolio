import { ClientFailure } from "@/error"

export default function parseDate(date: string | number | Date): string {
  try {
    if (date === null) return ""
    return new Date(date).toISOString().slice(0, 10)
  } catch (e) {
    throw new ClientFailure("Data Inválida")
  }
}
