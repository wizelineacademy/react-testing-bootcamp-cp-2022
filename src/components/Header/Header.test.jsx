import { render, screen } from '@testing-library/react'
import { Header } from '.'

const setup = () => render(<Header />)

beforeEach(() => setup())

describe('Header', () => {
  it('should be in the document', () => {
    const header = screen.getByRole('banner')

    expect(header).toBeInTheDocument()
    expect(header).toHaveTextContent(/astronomy picture of the day/i)
  })
})


