import { Button } from '@/components/Button/Button.styles'
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
  padding: '$4',
  borderRadius: '$2',
  backgroundColor: '$slate2',
  boxShadow: '$1',

  '&:hover': {
    backgroundColor: '$slate3',
    boxShadow: '$2',
  },
})

export const ToggleButton = styled(Button, {
  padding: '$1 $1',
  color: '$slate7',

  '&:hover': {
    color: '$slate11',
    background: 'transparent',
  },

  variants: {
    checked: {
      true: {
        color: '$indigo11',
      },
    },
  },
})

const Column = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
})

export const StatusColumn = styled(Column)

export const MainColumn = styled(Column)
