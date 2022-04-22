import { render, screen } from '@testing-library/react';
import React from 'react';
import LandingPage from './LandingPage';

describe("LandingPage tests",()=>{
    it("should have a Header with the title of the project",()=>{
        render(<LandingPage/>);

        const headerEl = screen.getByRole("heading", {name: /Capstone Project/i});
        expect(headerEl).toBeInTheDocument();
    })
})    