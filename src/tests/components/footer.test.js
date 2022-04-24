import { render, screen } from '@testing-library/react';
import { Footer } from '../../components/Footer';

describe('Tests on Footer component', () => {
  test('should create a footer of contentinfo role', () => {
    render(<Footer />);
    const footerEl = screen.getByRole('contentinfo');

    expect(footerEl).toBeInTheDocument();
    expect(footerEl).toHaveTextContent(
      /Project created during Wizeline Academy React Testing Bootcamp/
    );
  });
});
