import type { Todo } from '@/contracts/todo'
import * as S from './TodoList.styles'

type TodoListProps = {
  todos: Todo[]
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <S.TodoList>
      {todos.map((todo) => (
        <S.TodoItem key={todo.id}>{todo.title}</S.TodoItem>
      ))}
    </S.TodoList>
  )
}

export default TodoList
