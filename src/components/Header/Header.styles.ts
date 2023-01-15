import { styled } from '@root/stitches.config'

export const Header = styled('header', {
  alignItems: 'center',
  backgroundColor: '$slate2',
  color: '$slate11',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '$3',
  boxShadow: '$1',
  position: 'sticky',
  top: 0,

  '@bp2': {
    padding: '$4',
  },
})
