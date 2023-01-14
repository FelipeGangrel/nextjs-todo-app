import { MainLayout } from '@/components'
import type { NextPageWithLayout } from '@/contracts/common'

const LoginPage: NextPageWithLayout = () => {
  return (
    <div>
      <h1>Login</h1>
    </div>
  )
}

LoginPage.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>
}

export default LoginPage
