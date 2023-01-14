import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'
import * as S from './DarkModeToggler.styles'

const DarkModeToggler: React.FC = () => {
  const { setTheme, systemTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const isDark =
    theme === 'dark' || (theme === 'system' && systemTheme === 'dark')

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark')
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <S.ToggleButton onClick={toggleTheme}>
      {isDark ? <FiSun /> : <FiMoon />}
      <VisuallyHidden.Root>Toggle Dark and Light mode</VisuallyHidden.Root>
    </S.ToggleButton>
  )
}

export default DarkModeToggler
