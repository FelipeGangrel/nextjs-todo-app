import { Header } from '@/components'

type MainLayoutProps = {
  children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default MainLayout
