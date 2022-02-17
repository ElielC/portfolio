export interface ResponsePageDTO<T> {
  count: number
  next?: string
  previous?: string
  results: T[]
}
