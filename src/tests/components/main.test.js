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

describe('Tests on Main wrapper related to dateInput', () => {
  beforeAll(() => {
    // add window.matchMedia
    // this is necessary for the date picker to be rendered in desktop mode.
    // if this is not provided, the mobile mode is rendered, which might lead to unexpected behavior
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: (query) => ({
        media: query,
        // this is the media query that @material-ui/pickers uses to determine if a device is a desktop device
        matches: query === '(pointer: fine)',
        onchange: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
        addListener: () => {},
        removeListener: () => {},
        dispatchEvent: () => false,
      }),
    });
  });

  afterAll(() => {
    delete window.matchMedia;
  });

  test('should have a date input element', () => {
    render(<MainSection />);

    const dateInputEl = screen.getByLabelText(/pick a date/i);
    expect(dateInputEl).toBeInTheDocument();
  });

  test('should change value of datePicker', () => {
    render(<MainSection />);

    const dateInputEl = screen.getByLabelText(/Pick a date/i);
    fireEvent.change(dateInputEl, { target: { value: '01/01/2010' } });

    expect(dateInputEl.value).toBe('01/01/2010');
  });

  test('should disable the submit button when date is out of range', () => {
    render(<MainSection />);

    const dateInputEl = screen.getByLabelText(/Pick a date/i);
    const buttonEl = screen.getByRole('button', { name: /search/i });

    expect(buttonEl).toBeEnabled();
    fireEvent.change(dateInputEl, { target: { value: '01/01/1500' } });
    expect(dateInputEl.value).toBe('01/01/1500');
    expect(buttonEl).toBeDisabled();
  });
});
