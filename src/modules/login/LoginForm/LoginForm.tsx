import { FormHandles, SubmitHandler } from '@unform/core'
import { Form } from '@unform/web'
import { useRef } from 'react'
import * as Yup from 'yup'
import { Button } from '@/components'
import { Input, Label } from '@/components/forms'
import yupErrorHandler from '@/lib/yupErrorHandler'
import * as S from './LoginForm.styles'

type FormData = {
  email: string
  password: string
}

const LoginForm: React.FC = () => {
  const formRef = useRef<FormHandles>(null)

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
      yupErrorHandler(error, formRef)
    }
  }

  return (
    <S.FormContainer>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <fieldset>
          <Label htmlFor='email'>Email</Label>
          <Input type='email' name='email' id='email' />
          {formRef.current?.getFieldError('email') && (
            <span>{formRef.current?.getFieldError('email')}</span>
          )}
        </fieldset>
        <fieldset>
          <Label htmlFor='password'>Password</Label>
          <Input type='password' name='password' id='password' />
          {formRef.current?.getFieldError('password') && (
            <span>{formRef.current?.getFieldError('password')}</span>
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
