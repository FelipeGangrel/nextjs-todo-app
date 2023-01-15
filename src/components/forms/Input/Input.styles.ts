import { VariantProps } from '@stitches/react'
import { styled } from '@root/stitches.config'

export const Input = styled('input', {
  padding: '$2',
  background: '$slate3',

  borderColor: '$slate4',
  borderWidth: '$2',
  borderStyle: 'solid',
  borderRadius: '$2',

  '&:hover': {
    background: '$slate4',
    borderColor: '$slate5',
  },

  '&:focus': {
    background: '$slate5',
    borderColor: '$slate6',
  },

  variants: {
    hasError: {
      true: {
        background: '$crimson5',
        borderColor: '$crimson6 !important',
      },
    },
  },
})

export type StyledInputProps = VariantProps<typeof Input>
