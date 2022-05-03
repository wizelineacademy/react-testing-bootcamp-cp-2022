import axios from "axios";

export const getDatePicture = ({ date }) => {
  if (date === "") {
    return axios.get("https://api.nasa.gov/planetary/apod", {
      params: { api_key: "Azvu5Woll2RoX9AP5pDjkNWdaM1VV7DJtNCv0OcW" },
    });
  } else {
    return axios.get("https://api.nasa.gov/planetary/apod", {
      params: {
        api_key: "Azvu5Woll2RoX9AP5pDjkNWdaM1VV7DJtNCv0OcW",
        date: date,
      },
    });
  }
};
