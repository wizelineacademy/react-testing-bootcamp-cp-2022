import { render, screen } from '@testing-library/react';

describe('Test for Main section', () => {
  test('should have a date input element', () => {
    render(<MainSection />);

    const dateInputEl = screen.getByLabelText(/date/i);
    expect(dateInputEl).toBeInTheDocument();
  });

  test('should have an image title', () => {});

  test('should have a loading state if the date changes', () => {});

  test('should have an image element', () => {});

  test('should have text for an image description', () => {});
});
