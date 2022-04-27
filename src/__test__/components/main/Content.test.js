/**
 * @jest-environment jsdom
*/
import React from 'react'

import { render } from '@testing-library/react'
import Content from '../../../components/main/Content'; 
import nasaMock from "../../../__mocks__/nasaMock";
import fetch from 'node-fetch'

beforeAll(() => nasaMock.listen())
afterAll(() => nasaMock.close())

const responseApi = async () => { 
    const nasaResponse = await fetch('https://api.nasa.gov/planetary/apod')
    return  await nasaResponse.json()
}

describe("Content Component", () => {

    test("must have a image", async () => {
        
        
        const utils = render(<Content data={await responseApi()}/>);

        const image = utils.getByTitle(/A Flag Shaped Aurora over Sweden/i);

        expect(image.src).toContain('https://apod.nasa.gov/apod/image/2103/AuroraFlag_Stalnacke_960.jpg');
        
    });

    test("must have explanation", async () => {

        const utils = render(<Content data={await responseApi()}/>);

        const input = utils.getByTestId('description').firstChild
        
        expect(input).toBeTruthy()

    });

    test("must have title", async () => {

        const utils = render(<Content data={await responseApi()}/>);

        expect(utils.getByText(/A Flag Shaped Aurora over Sweden/i)).toBeInTheDocument()

    });

});
