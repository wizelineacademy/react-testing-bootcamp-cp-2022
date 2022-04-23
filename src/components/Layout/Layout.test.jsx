import { render, screen } from '@testing-library/react'
import { Layout } from '.'

const setup = () => render(<Layout />)

describe('Layout', () => {
  it('should contains the header component', () => {
    setup()

    const header = screen.getByRole('banner')

    expect(header).toBeInTheDocument()
  })

  it('should contains a main section', () => {
    setup()

    const main = screen.getByRole('main')

    expect(main).toBeInTheDocument()
  })

  it('should contains the footer component', () => {
    setup()

    const footer = screen.getByRole('contentinfo')

    expect(footer).toBeInTheDocument()
  })
})


