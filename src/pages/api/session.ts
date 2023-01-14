import { IronSessionData } from 'iron-session'
import { withSessionRoute } from '@/lib/withSession'

type RequestBody = {
  session: Partial<IronSessionData>
}

export default withSessionRoute(async (req, res) => {
  const { method = 'GET', session } = req

  if (['POST', 'PUT', 'PATCH'].includes(method)) {
    const { session: newSession } = req.body as RequestBody

    Object.assign(session, newSession)

    await req.session.save()
  }

  res.json(session)
})
