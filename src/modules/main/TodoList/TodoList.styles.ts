import { styled } from '@root/stitches.config'

export const TodoList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
})

export const TodoItem = styled('div', {
  display: 'flex',
  gap: '$2',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '$2',
  borderRadius: '$2',
  backgroundColor: '$slate2',
  '&:hover': {
    backgroundColor: '$slate3',
  },
})
