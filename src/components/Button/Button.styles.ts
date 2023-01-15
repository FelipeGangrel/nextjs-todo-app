import { VariantProps } from '@stitches/react'
import { css, styled } from '@root/stitches.config'

export const buttonStyles = css({
  padding: '$2 $3',

  borderColor: 'transparent',
  borderStyle: 'solid',
  borderWidth: '$2',
  borderRadius: '$2',

  background: 'transparent',
  color: '$slate11',
  fontWeight: '$2',

  '&:hover': {
    background: '$slate2',
  },
  '&:active': {
    background: '$slate3',
  },

  variants: {
    color: {
      danger: {
        background: '$crimson3',
        color: '$crimson11',
        '&:hover': {
          background: '$crimson4',
          borderColor: '$crimson7',
        },
        '&:active': {
          background: '$crimson5',
          borderColor: '$crimson7',
        },
      },
      primary: {
        background: '$indigo3',
        color: '$indigo11',
        '&:hover': {
          background: '$indigo4',
          borderColor: '$indigo7',
        },
        '&:active': {
          background: '$indigo5',
          borderColor: '$indigo7',
        },
      },
    },
  },
})

export const Button = styled('button', {
  ...buttonStyles,
})

export type StyledButtonVariants = VariantProps<typeof Button>
