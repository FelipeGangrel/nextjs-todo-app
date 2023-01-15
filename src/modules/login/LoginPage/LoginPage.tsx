import { MainLayout } from '@/components'
import type { NextPageWithLayout } from '@/contracts/common'
import { LoginForm } from '../LoginForm'
import * as S from './LoginPage.styles'

const LoginPage: NextPageWithLayout = () => {
  return (
    <S.MainContainer>
      <S.FormHeader>
        <S.FormTitle>Login</S.FormTitle>
      </S.FormHeader>
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
