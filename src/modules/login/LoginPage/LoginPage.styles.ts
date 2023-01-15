import { styled } from '@root/stitches.config'

export const MainContainer = styled('div', {
  maxWidth: '400px',
  margin: '0 auto',
})

export const FormContainer = styled('div', {
  background: '$slate2',
  padding: '$5',
  borderRadius: '$4',
  borderColor: '$slate4',
  borderWidth: '$2',
  borderStyle: 'solid',
})

export const FormHeader = styled('div', {
  marginY: '$4',
})

export const FormTitle = styled('h1', {
  textAlign: 'center',
})