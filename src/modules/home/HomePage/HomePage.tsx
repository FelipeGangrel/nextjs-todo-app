import { MainLayout } from '@/components'
import type { NextPageWithLayout } from '@/contracts/common'

const HomePage: NextPageWithLayout = () => {
  return (
    <div>
      <h1>Home page</h1>
    </div>
  )
}

HomePage.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>
}

export default HomePage
