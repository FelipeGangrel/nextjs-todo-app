import { IronSession } from 'iron-session'
import useFetch from './useFetch'

export default function useSession() {
  const { data: session } = useFetch<IronSession>('/api/session')

  return { session }
}
