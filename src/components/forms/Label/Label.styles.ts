import * as RadixLabel from '@radix-ui/react-label'
import { VariantProps } from '@stitches/react'
import { styled } from '@root/stitches.config'

export const Label = styled(RadixLabel.Root, {
  fontSize: '$1',
  color: '$slate11',
})

export type StyledLabelProps = VariantProps<typeof Label>
