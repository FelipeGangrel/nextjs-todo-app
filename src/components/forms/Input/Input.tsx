import { useField } from '@unform/core'
import { useEffect, useRef } from 'react'
import * as S from './Input.styles'

type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  S.StyledInputProps & {
    name: string
  }

const Input: React.FC<InputProps> = ({ name, ...props }) => {
  const { defaultValue, error, fieldName, registerField } = useField(name)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    })
  }, [fieldName, registerField])

  return (
    <S.Input
      name={fieldName}
      defaultValue={defaultValue}
      ref={inputRef}
      hasError={!!error}
      {...props}
    />
  )
}

export default Input
