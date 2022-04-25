import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import {rest} from 'msw'
import { server } from '../mocks/server.js'
import { Home } from './Home'

const setup = () => render(<Home />)

describe('Home', () => {
  it('should pick today\'s date as default and get and apod', async () => {
    setup()

    const today = Intl.DateTimeFormat("en-CA").format(Date.now())

    const datePicker = screen.getByLabelText(/pick a date:/i)

    expect(datePicker).toHaveValue(today)

    await waitFor(() => screen.getByRole('heading'))

    const apodTitle = screen.getByRole('heading')

    expect(apodTitle).toBeInTheDocument()
  })

  it('should pick "2022-04-21" as date and get an apod', async () => {
    setup()

    const pastDate = '2022-04-21'

    const datePicker = screen.getByLabelText(/pick a date:/i)

    fireEvent.change(datePicker, { target: { value: pastDate } })

    expect(datePicker).toHaveValue(pastDate)

    await waitFor(() => screen.getByText(pastDate))

    const apodDate = screen.getByText(pastDate)

    expect(apodDate).toBeInTheDocument()
    expect(apodDate).toHaveTextContent(pastDate)
  })

  it('should pick a date out of the range and display an error', async () => {
    server.use(
      rest.get(process.env.NASA_APOD_URL, (req, res, ctx) => {
        return res(
          ctx.status(400),
          ctx.json({
            "code":400,
            "msg":"Date must be between Jun 16, 1995 and Apr 25, 2022.",
            "service_version":"v1"}
          ),
        )
      }),
    )

    setup()

    const outOfRangeDate = '1990-08-25'

    const datePicker = screen.getByLabelText(/pick a date:/i)

    fireEvent.change(datePicker, { target: { value: outOfRangeDate } })

    expect(datePicker).toHaveValue(outOfRangeDate)

    await waitFor(() => screen.getByText(/there was an error, please try again./i))

    const error = screen.getByText(/there was an error, please try again./i)

    expect(error).toBeInTheDocument()
  })
})


