import { render, screen } from '@testing-library/react';
import Header from '.';

describe('Header component', () => {
  it('should have the project title', () => {
    render(<Header />);

    const titleEl = screen.getByRole('heading', {
      name: /wizeline testing proyect/i
    });

    expect(titleEl).toBeInTheDocument();
  });
});
