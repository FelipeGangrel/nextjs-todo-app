import { LabelProps as RadixLabelProps } from '@radix-ui/react-label'
import * as S from './Label.styles'

type LabelProps = RadixLabelProps & S.StyledLabelProps

const Label: React.FC<LabelProps> = ({ children, ...props }) => {
  return <S.Label {...props}>{children}</S.Label>
}

export default Label
