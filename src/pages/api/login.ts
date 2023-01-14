import jsonFetcher from '@/lib/jsonFetcher'
import withQueryParams from '@/lib/withQueryParams'
import { withSessionRoute } from '@/lib/withSession'

type RequestBody = {
  email: string
  password: string
}

export default withSessionRoute(async (req, res) => {
  try {
    const { method, session } = req

    if (method !== 'POST') {
      throw new Error('Method not allowed')
    }

    const { email, password }: RequestBody = req.body

    if (!email || !password) {
      throw new Error('Missing email or password')
    }

    const baseUrl = process.env.JSON_SERVER_URL
    const url = withQueryParams(`${baseUrl}/users`, { email, password })

    const matchingUsers = await jsonFetcher(url)

    if (!matchingUsers.length) {
      throw new Error('Invalid email or password')
    }

    const user = matchingUsers[0]

    console.log('User logged in', user)
  } catch (error) {
    res.status(405).json({ error: (error as Error)?.message })
  }
})
