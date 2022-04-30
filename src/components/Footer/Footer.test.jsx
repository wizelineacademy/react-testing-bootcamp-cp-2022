import { render, screen } from '@testing-library/react'
import { Footer } from '.'

const setup = () => render(<Footer />)

beforeEach(() => setup())

describe('Footer', () => {
  it('should be in the document', () => {
    const footer = screen.getByRole('contentinfo')

    expect(footer).toBeInTheDocument()
    expect(footer).toHaveTextContent(/project created during wizeline academy react testing bootcamp/i)
  })
})


