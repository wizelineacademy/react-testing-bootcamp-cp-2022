/**
 * @jest-environment jsdom
*/
import React from 'react'

import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import Content from '../../../components/main/Content'; 
import NasaMock from "../../../__mocks__/nasaMock";
import { rest } from 'msw'

beforeAll(() => NasaMock.listen())
afterEach(() => NasaMock.resetHandlers())
afterAll(() => NasaMock.close())

const setup = () => {
    const utils = render(<Content />);
    const image = utils.getByTitle('image-nasa');
    return {
        image,
        ...utils,
    }
}
describe("Content Component", () => {

    test("must have a image", () => {

        const { image } = setup();

        expect(image.src).toContain('https://api.nasa.gov/assets/img/general/apod.jpg');
        
    });

    test("must get a image of API", () => {

    });

});
