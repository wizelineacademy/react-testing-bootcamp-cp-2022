import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer component', () => {
  it('should have the wizeline msg', () => {
    render(<Footer />);

    const wizelineMsgEl = screen.getByRole('heading', {
      name: /project created during wizeline academy react testing bootcamp/i
    });

    expect(wizelineMsgEl).toBeInTheDocument();
  });
});
