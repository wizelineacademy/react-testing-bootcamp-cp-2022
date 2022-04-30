import { useEffect, useState } from 'react'
import { getApodBy } from '../../services/nasa'
import { ApodError, ApodInfo } from '.'

export const Apod = ({ date }) => {
  const [apod, setApod] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    getApodBy({ date })
      .then(([apod, error]) => {
        setApod(apod)
        setError(error)
      })
  }, [date])

  if (error) return <ApodError {...error} />

  if (!apod) return <p>Loading ...</p>
  
  return <ApodInfo {...apod} />
}
