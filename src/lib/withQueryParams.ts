export default function withQueryParams(
  url: string,
  params: Record<string, any>
): string {
  const validObject: Record<string, any> = {}

  Object.keys(params).forEach((key) => {
    const value = params[key]

    if (value !== undefined && value !== null) {
      validObject[key] = value
    }
  })

  const searchParams = new URLSearchParams(validObject).toString()

  return `${url}?${searchParams}`
}
