import { render, screen } from '@testing-library/react'
import { Layout } from '.'

const setup = () => render(<Layout />)

beforeEach(() => setup())

describe('Layout', () => {
  it('should render layout elements correctly', () => {
    const header = screen.getByRole('banner')
    const main = screen.getByRole('main')
    const footer = screen.getByRole('contentinfo')

    expect(header).toBeInTheDocument()
    expect(main).toBeInTheDocument()
    expect(footer).toBeInTheDocument()
  })
})


