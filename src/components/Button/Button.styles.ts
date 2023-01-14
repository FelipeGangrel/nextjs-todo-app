import { VariantProps } from '@stitches/react'
import { css, styled } from '@root/stitches.config'

export const buttonStyles = css({
  '&:active': {
    background: '$slate3',
  },
  '&:hover': {
    background: '$slate2',
  },
  background: 'transparent',
  border: 'none',
  borderRadius: '$2',
  color: '$slate11',
  fontWeight: '$2',
  padding: '$2 $3',

  variants: {
    color: {
      danger: {
        '&:active': {
          background: '$crimson5',
        },
        '&:hover': {
          background: '$crimson4',
        },
        background: '$crimson3',
        color: '$crimson12',
      },
      primary: {
        '&:active': {
          background: '$indigo5',
        },
        '&:hover': {
          background: '$indigo4',
        },
        background: '$indigo3',
        color: '$indigo12',
      },
    },
  },
})

export const Button = styled('button', {
  ...buttonStyles,
})

export type StyledButtonVariants = VariantProps<typeof Button>
