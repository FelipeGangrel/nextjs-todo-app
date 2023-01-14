import { VariantProps } from '@stitches/react'
import Link from 'next/link'
import { buttonStyles } from '@/components/Button/Button.styles'
import { styled } from '@root/stitches.config'

export const LinkButton = styled(Link, {
  ...buttonStyles,
})

export type StyledLinkButtonVariants = VariantProps<typeof LinkButton>
