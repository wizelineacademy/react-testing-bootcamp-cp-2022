import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchImage = options => axios.get(`${BASE_URL}planetary/apod?date=${options.date}&api_key=${API_KEY}`);