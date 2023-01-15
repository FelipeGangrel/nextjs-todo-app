import { FormHandles, SubmitHandler } from '@unform/core'
import { Form } from '@unform/web'
import { useRef, useState } from 'react'
import * as Yup from 'yup'
import { Button } from '@/components'
import { FieldError, Input, Label } from '@/components/forms'
import yupErrorHandler from '@/lib/yupErrorHandler'
import * as S from './LoginForm.styles'

type FormData = {
  email: string
  password: string
}

const LoginForm: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const [errorCollection, setErrorCollection] = useState<Record<string, any>>(
    {}
  )

  const clearError = (name: string) => {
    setErrorCollection((prev) => {
      const newErrorCollection = { ...prev }
      delete newErrorCollection[name]

      formRef.current?.setErrors(newErrorCollection)

      return newErrorCollection
    })
  }

  const handleSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      formRef.current?.setErrors({})

      const schema = Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().required(),
      })

      const validData = await schema.validate(data, {
        abortEarly: false,
      })

      console.log('valid data', validData)
    } catch (error) {
      setErrorCollection(yupErrorHandler(error, formRef))
    }
  }

  return (
    <S.FormContainer>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <fieldset>
          <Label htmlFor='email'>Email</Label>
          <Input name='email' id='email' onFocus={() => clearError('email')} />
          {errorCollection.email && (
            <FieldError>{errorCollection.email}</FieldError>
          )}
        </fieldset>
        <fieldset>
          <Label htmlFor='password'>Password</Label>
          <Input
            type='password'
            name='password'
            id='password'
            onFocus={() => clearError('password')}
          />
          {errorCollection.password && (
            <FieldError>{errorCollection.password}</FieldError>
          )}
        </fieldset>
        <Button type='submit' color='primary' fullWidth>
          Submit
        </Button>
      </Form>
    </S.FormContainer>
  )
}

export default LoginForm
