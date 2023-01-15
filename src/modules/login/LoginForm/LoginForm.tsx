import { Form } from '@unform/web'
import { Button } from '@/components'
import { Input, Label } from '@/components/forms'
import * as S from './LoginForm.styles'

const LoginForm: React.FC = () => {
  return (
    <S.FormContainer>
      <Form onSubmit={() => {}}>
        <fieldset>
          <Label htmlFor='email'>Email</Label>
          <Input type='email' name='email' id='email' />
        </fieldset>
        <fieldset>
          <Label htmlFor='password'>Password</Label>
          <Input type='password' name='password' id='password' />
        </fieldset>
        <Button color='primary' style={{ flex: 1, width: '100%' }}>
          Submit
        </Button>
      </Form>
    </S.FormContainer>
  )
}

export default LoginForm
