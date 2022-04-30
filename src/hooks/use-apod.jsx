import { useEffect, useState } from 'react'
import { getApodBy } from '../services/nasa'

export function useApod({ date }) {
  const [apod, setApod] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    getApodBy({ date })
      .then(([apod, error]) => {
        setApod(apod)
        setError(error)
      })
  }, [date])

  return [apod, error]
}
