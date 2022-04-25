import { useEffect, useState } from 'react'
import { Apod } from '../components/Apod'
import { ApodError } from '../components/Apod'
import { getApod } from '../services/nasa'
import { Grid, Input, Spacer } from '@nextui-org/react'

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
        <Grid>
          <Input
            width="186px"
            label="Pick a date:"
            type="date"
            value={date}
            onChange={handleDateChange}
          />
        </Grid>
      </form>
      <Spacer y={1} />
      {error && <ApodError {...error} />}
      {apod && <Apod {...apod} />}
    </section>
  )
}
