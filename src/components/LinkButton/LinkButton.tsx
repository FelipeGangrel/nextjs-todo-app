import { LinkProps } from 'next/link'
import React from 'react'
import * as S from './LinkButton.styles'

type LinkButtonProps = LinkProps &
  S.StyledLinkButtonVariants & {
    children: React.ReactNode
  }

const LinkButton: React.FC<LinkButtonProps> = ({
  children,
  ...linkButtonProps
}) => {
  return <S.LinkButton {...linkButtonProps}>{children}</S.LinkButton>
}

export default LinkButton
