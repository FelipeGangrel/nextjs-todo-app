import { FiCheckCircle } from 'react-icons/fi'
import type { Todo } from '@/contracts/todo'
import * as S from './TodoList.styles'

type TodoListProps = {
  todos: Todo[]
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <S.TodoList>
      {todos.map((todo) => (
        <S.TodoItem key={todo.id}>
          <S.StatusColumn>
            <S.ToggleButton>
              <FiCheckCircle size={20} />
            </S.ToggleButton>
          </S.StatusColumn>
          <S.MainColumn>
            <h4>{todo.title}</h4>
          </S.MainColumn>
        </S.TodoItem>
      ))}
    </S.TodoList>
  )
}

export default TodoList
