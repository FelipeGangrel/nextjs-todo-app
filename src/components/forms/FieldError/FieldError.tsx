import * as S from './FieldError.styles'

type FieldErrorProps = React.HTMLAttributes<HTMLSpanElement>

const FieldError: React.FC<FieldErrorProps> = ({ children, ...props }) => {
  return <S.FieldError {...props}>{children}</S.FieldError>
}

export default FieldError
