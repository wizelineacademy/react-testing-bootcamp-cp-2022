import { render, screen } from '@testing-library/react'
import { Header } from '.'

const setup = () => render(<Header />)

describe('Header', () => {
  it('should be in the document', () => {
    setup()

    const header = screen.getByRole('banner')

    expect(header).toBeInTheDocument()
  })

  it('should display the project title', () => {
    setup()

    const header = screen.getByRole('banner')

    expect(header).toHaveTextContent(/astronomy picture of the day/i)
  })
})


