import { MainLayout, PageHeader } from '@/components'
import type { NextPageWithLayout } from '@/contracts/common'
import { Todo } from '@/contracts/todo'
import { useFetch } from '@/hooks'
import { TodoList } from '../TodoList'
import * as S from './MainPage.styles'

const url = `${process.env.NEXT_PUBLIC_JSON_SERVER_URL}/todos`

const MainPage: NextPageWithLayout = () => {
  const { data: todos } = useFetch<Todo[]>(url)

  return (
    <S.MainContainer>
      <PageHeader title='Todo List' />
      <TodoList todos={todos || []} />
    </S.MainContainer>
  )
}

MainPage.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>
}

export default MainPage
