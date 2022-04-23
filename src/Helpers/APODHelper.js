import axios from "axios";

export async function LoadAPOD(date) {
  const apiKey = "gyQ7bJmy4XU7IXOlM9ucf9Py0yaBvA5AIOVj6f4F"; //TODO: Get value from env
  const requestUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`;

  const response = await axios.get(requestUrl);

  return response;
}
