import { FormHandles } from '@unform/core'
import { ValidationError } from 'yup'

export default function yupErrorHandler(
  error: any,
  formRef?: React.RefObject<FormHandles>
) {
  if (!(error instanceof ValidationError)) {
    return {}
  }

  const errorMessages: Record<string, string> = {}

  error.inner.forEach((err) => {
    if (err.path) {
      errorMessages[err.path] = err.message
    }
  })

  if (formRef) {
    formRef.current?.setErrors(errorMessages)
  }
}
