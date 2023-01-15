import * as S from './Button.styles'

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> &
  S.StyledButtonVariants

const Button: React.FC<ButtonProps> = ({ children, ...buttonProps }) => {
  return <S.Button {...buttonProps}>{children}</S.Button>
}

export default Button
