import { rest } from 'msw'
import { server } from '../../mocks/server.js'
import { render, screen } from '@testing-library/react'
import { Apod } from '.'

const validDate = Intl.DateTimeFormat('en-CA', { timeZone: 'UTC' }).format(new Date('2022-04-21'))

const setup = () => render(<Apod date={validDate} />)

beforeEach(() => setup())

describe('Valid Apod', () => {
  it('should display an apod correctly', async () => {
    const apodTitle = await screen.findByRole('heading')
    const apodImage = await screen.findByRole('img')
    const apodDate = await screen.findByText(validDate)
    const apodExplanation = await screen.findByText(/fifty years ago, april 20, 1972/i)

    expect(apodTitle).toBeInTheDocument()
    expect(apodImage).toBeInTheDocument()
    expect(apodDate).toBeInTheDocument()
    expect(apodExplanation).toBeInTheDocument()

    expect(apodTitle).toHaveTextContent(/apollo 16 moon panorama/i)
    expect(apodImage).toHaveAttribute('alt')
    expect(apodDate).toHaveAttribute('datetime')
  })
})

describe('Invalid Apod', () => {
  it('should render an error message', async () => {
    server.use(
      rest.get(process.env.NASA_APOD_URL, (_, res, ctx) => {
        return res(
          ctx.status(400),
          ctx.json({
            "code": 400,
            "msg": "Date must be between Jun 16, 1995 and Apr 25, 2022.",
            "service_version": "v1"}
          ),
        )
      }),
    )

    const invalidDate = Intl.DateTimeFormat('en-CA', { timeZone: 'UTC' }).format(new Date('1990-08-25'))

    const { rerender } = setup()

    rerender(<Apod date={invalidDate} />)

    const error = await screen.findByText(/there was an error, please try again./i)

    expect(error).toBeInTheDocument()
  })
})
