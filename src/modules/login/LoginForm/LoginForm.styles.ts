import { styled } from '@root/stitches.config'

export const FormContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  fieldset: {
    display: 'flex',
    flexDirection: 'column',
    border: 'none',
    gap: '$2',
    marginBottom: '$4',
  },
})
