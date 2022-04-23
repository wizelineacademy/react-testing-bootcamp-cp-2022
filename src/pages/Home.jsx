import { useEffect, useState } from 'react'
import { Apod } from '../components/Apod'
import { ApodError } from '../components/Apod'
import { getApod } from '../services/nasa'

export const Home = () => {
  const [apod, setApod] = useState(null)
  const [error, setError] = useState(null)
  const [date, setDate] = useState(Intl.DateTimeFormat("en-CA").format(Date.now()))

  useEffect(() => {
    getApod({ date })
      .then(([apod, error]) => {
        setApod(apod)
        setError(error)
      })
  }, [date])

  const handleDateChange = (e) => setDate(e.currentTarget.value)

  return (
    <section>
      <form>
        <label htmlFor="date">Pick a date: </label>
        <input
          id="date"
          type="date"
          value={date}
          onChange={handleDateChange} />
      </form>
      {error && <ApodError {...error} />}
      {apod && <Apod {...apod} />}
    </section>
  )
}
