import { fireEvent, render, screen } from '@testing-library/react';
import { server } from '../../mocks/server';
import { MainSection } from '.';

const setup = () => render(<MainSection />);

describe('<MainSection />', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  beforeEach(() => {
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

  afterEach(() => {
    delete window.matchMedia;
  });

  it('Should render MainSection successfully', () => {
    setup();
  });

  it('Should render a calendar picker', () => {
    setup();

    const pickerEl = screen.getByLabelText(/select a date/i);

    expect(pickerEl).toBeInTheDocument();
  });

  it('Should render an error when invalid date is selected', async () => {
    setup();

    const pickerEl = screen.getByLabelText(/select a date/i);
    const invalidDate = '2100-01-01';

    fireEvent.click(pickerEl);
    fireEvent.change(pickerEl, { target: { value: invalidDate } });

    const errorEl = await screen.findByText(/there was an error, please try again./i);

    expect(errorEl).toBeInTheDocument();
    expect(pickerEl.value).toBe(invalidDate);
  });


  describe('Image section', () => {
    it('Should contain an image title', () => {
      setup();
      expect(screen.getByRole('heading')).toBeInTheDocument();
    });

    it('Should display an img element', () => {
      setup();

      expect(screen.getByRole('img')).toBeInTheDocument();
    });

    it('Should show the Picture of the Day', async () => {
      setup();

      const imageEl = await screen.findByRole('img', { name: /N11: Star Clouds of the LMC/i });
      expect(imageEl).toBeInTheDocument();
    });
  });

  describe('Text description section', () => {
    it('Should contain text', async () => {
      setup();

      const containerEl = await screen.findByText(/Some description/i);

      expect(containerEl).toBeInTheDocument();
    });
  });
});