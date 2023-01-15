import { MainLayout } from '@/components'
import type { NextPageWithLayout } from '@/contracts/common'
import { LoginForm } from '../LoginForm'

const LoginPage: NextPageWithLayout = () => {
  return (
    <div>
      <h1>Login</h1>
      <LoginForm />
    </div>
  )
}

LoginPage.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>
}

export default LoginPage
