import { FormHandles, SubmitHandler } from '@unform/core'
import { Form } from '@unform/web'
import Router from 'next/router'
import { useRef, useState } from 'react'
import * as Yup from 'yup'
import { Button } from '@/components'
import { FieldError, Input, Label } from '@/components/forms'
import jsonFetcher from '@/lib/jsonFetcher'
import yupErrorHandler from '@/lib/yupErrorHandler'
import * as S from './LoginForm.styles'

type FormData = {
  email: string
  password: string
}

const LoginForm: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const [loading, setLoading] = useState(false)
  const [errorCollection, setErrorCollection] = useState<Record<string, any>>(
    {}
  )

  const handleLogin = async (data: FormData) => {
    try {
      setLoading(true)
      await jsonFetcher('/api/login', 'POST', data)
      Router.push('/app')
    } catch (error) {
      console.log('error', error)
    } finally {
      setLoading(false)
    }
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

      handleLogin(validData)
    } catch (error) {
      setErrorCollection(yupErrorHandler(error, formRef))
    }
  }

  const clearError = (name: string) => {
    setErrorCollection((prev) => {
      const newErrorCollection = { ...prev }
      delete newErrorCollection[name]

      formRef.current?.setErrors(newErrorCollection)

      return newErrorCollection
    })
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
          {loading ? 'Loading...' : 'Login'}
        </Button>
      </Form>
    </S.FormContainer>
  )
}

export default LoginForm
