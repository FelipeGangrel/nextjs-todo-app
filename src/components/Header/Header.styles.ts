import { styled } from '@root/stitches.config'

export const Header = styled('header', {
  '@bp2': {
    padding: '$4',
  },
  alignItems: 'center',
  backgroundColor: '$slate2',
  boxShadow: '0 0 0 1px $slate6, 0 1px 2px $slate8',
  color: '$slate11',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '$3',
})
