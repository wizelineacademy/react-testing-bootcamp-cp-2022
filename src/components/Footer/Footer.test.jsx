import { render, screen } from '@testing-library/react'
import { Footer } from '.'

const setup = () => render(<Footer />)

describe('Footer', () => {
  it('should be in the document', () => {
    setup()

    const footer = screen.getByRole('contentinfo')

    expect(footer).toBeInTheDocument()
  })

  it('should display "Project created during Wizeline Academy React Testing Bootcamp"', () => {
    setup()

    const footer = screen.getByRole('contentinfo')

    expect(footer).toHaveTextContent(/project created during wizeline academy react testing bootcamp/i)
  })
})


