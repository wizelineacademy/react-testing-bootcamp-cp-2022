import { render, screen,  } from "@testing-library/react";
import Pictures from './Pictures';

const setup = () => render(<Pictures />);

describe('Pictures Component', () => {
    it('should render correctly the header', ()=>{
        setup();
        const headingEl = screen.getByRole('heading', { name: /picture of the day/i });

        expect(headingEl).toBeInTheDocument();
    });
    
    it('should render correctly the footer', () => {
        setup();
        const footerEl = screen.getByRole('contentinfo', { text : /project created during wizeline academy react testing bootcamp/i });

        expect(footerEl).toBeInTheDocument();
    });
    
    it('should render correctly the main content', () => {
        setup();
        const mainEl = screen.getByRole('main');

        expect(mainEl).toBeInTheDocument();
    });
    
    it('should show the picture of the day', () => {
        setup();
        const imageEl = screen.getByRole('img', { name: /picture of the day/i });

        expect(imageEl).toBeInTheDocument();
    });
    
    it.todo('should show the picture of the day for the given date');
    
    it.todo('should show the message: "There was an error, please try again." when there is an unexpected error while fetching the API');
    
    it.todo('should show a message from the API response (e.g., a day after the current date.), when the user selects an invalid date value and clicks on the show button');
});