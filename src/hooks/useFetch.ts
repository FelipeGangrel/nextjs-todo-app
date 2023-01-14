import useSWR from 'swr'
import jsonFetcher, { FetchError } from '@/lib/jsonFetcher'

export default function useFetch<Data = any>(url: string) {
  return useSWR<Data, FetchError>(url, async (url) => {
    return jsonFetcher<Data>(url)
  })
}
