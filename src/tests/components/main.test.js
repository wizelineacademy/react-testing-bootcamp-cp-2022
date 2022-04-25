import {
  fireEvent,
  getByTestId,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MainSection } from '../../components/MainSection';
import testResponse from '../mocks/testResponse.json';

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

  test('should have an image on the main section', async () => {
    render(<MainSection />);

    const imageEl = await screen.findByRole('img');
    expect(imageEl).toBeInTheDocument();
  });

  test('should have the image title on the main section', async () => {
    render(<MainSection />);

    const titleEl = await screen.findByRole('heading', {
      name: testResponse.title,
    });
    expect(titleEl).toBeInTheDocument();
  });

  test('should have text for an image description', async () => {
    render(<MainSection />);

    const descriptionEl = await screen.findByText((content, element) =>
      content.startsWith(testResponse.explanation.substring(0, 10))
    );
    expect(descriptionEl).toBeInTheDocument();
  });

  test('should match with snapshot for skeleton purposes', () => {
    const { container } = render(<MainSection />);
    expect(container).toMatchSnapshot();
  });
});
