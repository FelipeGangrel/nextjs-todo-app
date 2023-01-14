import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import { FiCheckSquare } from 'react-icons/fi'
import { DarkModeToggler } from '@/components/DarkModeToggler'
import { LinkButton } from '@/components/LinkButton'
import * as S from './Header.styles'

const Header: React.FC = () => {
  return (
    <S.Header>
      <div>
        <LinkButton href='/'>
          <FiCheckSquare />
          <VisuallyHidden.Root>Home</VisuallyHidden.Root>
        </LinkButton>
      </div>
      <div>menu</div>
      <div>
        <DarkModeToggler />
      </div>
    </S.Header>
  )
}

export default Header
