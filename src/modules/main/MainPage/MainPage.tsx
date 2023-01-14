import { MainLayout } from '@/components'
import type { NextPageWithLayout } from '@/contracts/common'

const MainPage: NextPageWithLayout = () => {
  return (
    <div>
      <h1>Main page</h1>
    </div>
  )
}

MainPage.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>
}

export default MainPage
