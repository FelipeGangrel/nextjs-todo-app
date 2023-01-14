import { Header } from '@/components'

type MainLayoutProps = {
  children: React.ReactNode
}

import * as S from './MainLayout.styles'

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <S.ChildrenContainer>{children}</S.ChildrenContainer>
    </>
  )
}

export default MainLayout
