import { render, screen } from '@testing-library/react';
import App from './App';

test('App must render LandingPage component', () => {
  
  render(<App />);  
  const landingPageEl = screen.getByTestId(/LandingPage/i);

  expect(landingPageEl).toBeInTheDocument();
});
