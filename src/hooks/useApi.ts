import { nextBackendApi } from "@/api/axios"

type SendData<D, R> = (data: D) => Promise<R>

export default function usePostApi<D, R = void>(route: string): SendData<D, R> {
  const api = nextBackendApi()

  const sendData: SendData<D, R> = async data => {
    try {
      const response = await api.post(route, data)
      return response.data
    } catch (error) {
      return null
    }
  }

  return sendData
}
