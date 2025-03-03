import { useCallback, useState } from 'react'

interface Error {
  message?: string
}

// eslint-disable-next-line @typescript-eslint/ban-types
export const useFetch = (applyDataFn: Function, loadingByDefault?: boolean) => {
  const [isLoading, setIsLoading] = useState(loadingByDefault ? true : false)
  const [error, setError] = useState<string | null>(null)

  const sendRequest = useCallback(
    async (...args: unknown[]) => {
      setIsLoading(true)
      setError(null)
      try {
        await applyDataFn(...args)
      } catch (error) {
        setError((error as Error).message || 'Something went wrong!')
      } finally {
        setIsLoading(false)
      }
    },
    [applyDataFn]
  )

  return [isLoading, error, sendRequest] as const
}
