import { render, screen } from '@testing-library/react';
import { MainSection } from '../../components/MainSection';

describe('Test for Main section', () => {
  test('should have a date input element', () => {
    render(<MainSection />);

    const dateInputEl = screen.getByLabelText(/pick a date/i);
    expect(dateInputEl).toBeInTheDocument();
  });

  test('should have a submit button', () => {
    render(<MainSection />);

    const submitButton = screen.getByRole('button', { name: /search/i });
    expect(submitButton).toBeInTheDocument();
  });

  test('should have an image title', () => {
    render(<MainSection />);
  });

  test('should have a loading state if the date changes', () => {});

  test('should have an image element', () => {});

  test('should have text for an image description', () => {});
});
