import { useApod } from '../../hooks'
import { ApodError, ApodInfo } from '.'

export const Apod = ({ date }) => {
  const [apod, error] = useApod({ date })

  if (error) return <ApodError {...error} />

  if (!apod) return <p>Loading ...</p>
  
  return <ApodInfo {...apod} />
}
