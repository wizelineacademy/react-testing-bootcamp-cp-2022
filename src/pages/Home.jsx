import { useState } from 'react'
import { Apod } from '../components/Apod'
import { Grid, Input, Spacer } from '@nextui-org/react'

export const Home = () => {
  const [date, setDate] = useState(Intl.DateTimeFormat("en-CA").format(Date.now()))

  const handleDateChange = (e) => {
    if (!e.currentTarget.validity.valid) return
    setDate(e.currentTarget.value)
  }

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
      <Apod date={date} />
    </section>
  )
}
