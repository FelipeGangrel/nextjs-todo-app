import { MainLayout, PageHeader } from '@/components'
import type { NextPageWithLayout } from '@/contracts/common'
import { LoginForm } from '../LoginForm'
import * as S from './LoginPage.styles'

const LoginPage: NextPageWithLayout = () => {
  return (
    <S.MainContainer>
      <PageHeader title='Login' />
      <S.FormContainer>
        <LoginForm />
      </S.FormContainer>
    </S.MainContainer>
  )
}

LoginPage.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>
}

export default LoginPage
