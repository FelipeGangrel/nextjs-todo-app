type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

type FetchErrorProps = {
  data: {
    message: string
  }
  message: string
  response: Response
}

export class FetchError extends Error {
  response: FetchErrorProps['response']
  data: FetchErrorProps['data']
  constructor({ data, message, response }: FetchErrorProps) {
    super(message)

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, FetchError)
    }

    this.name = 'FetchError'
    this.response = response
    this.data = data ?? { message }
  }
}

export default async function jsonFetcher<T = any>(
  url: string,
  method: Method = 'GET',
  body?: { [key: string]: any }
) {
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
    method,
    ...(body && {
      body: JSON.stringify(body),
    }),
  })

  const data = await response.json()

  if (response.ok) {
    return data as T
  }

  throw new FetchError({
    data,
    message: response.statusText,
    response,
  })
}
