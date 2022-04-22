import { render, screen } from '@testing-library/react';
import React from 'react';
import LandingPage from './LandingPage';

describe("LandingPage tests",()=>{

    const sut = ()=>render(<LandingPage/>);

    it("should have a Header with the title of the project",()=>{
        sut();
        const headerEl = screen.getByRole("heading", {name: /Capstone Project/i});

        expect(headerEl).toBeInTheDocument();
    })

    it("should have a Main section",()=>{
        sut();

        const mainSectionEl = screen.getByRole("main");

        expect(mainSectionEl).toBeInTheDocument();

    })
})    