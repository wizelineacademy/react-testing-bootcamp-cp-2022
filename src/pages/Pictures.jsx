import axios from "axios";
import { useEffect, useState } from "react";
import { NASA_API_KEY, NASA_BASE_URL } from "../constants";

const pad2 = (str) => str.length < 2 ? `0${str}` : str;

function Pictures() {
    const [date, setDate] = useState(() => {
        const d = new Date();
        const year = d.getFullYear();
        const month = pad2(d.getMonth());
        const day = pad2(d.getDate());
        return `${year}-${month}-${day}T00:00`;
    });
    const [pictureData, setPictureData] = useState();

    const getData = async () => {
        const { data } = await axios.get(`${NASA_BASE_URL}`, { params: { api_key: NASA_API_KEY, date } });
        setPictureData(data);
        console.log(pictureData);
    };

    useEffect(() => {
        getData();
    }, [date]);

    const handleDateChange = (e) => {
        const newDate = e.target.value.split('T')[0];
        setDate(newDate);
    };

    return (
        <section>
            <h1>Picture of the day</h1>
            <main>
                <label htmlFor="meeting-time">Choose a date:</label>
                <input type="datetime-local" id="datetime-local" value={date} onChange={handleDateChange} />

                <h2>{pictureData?.title}</h2>
                <p>{pictureData?.date}</p>
                <img aria-label="picture of the day" src={pictureData?.url} />
                <h3>Explanation</h3>
                <p>{`${pictureData?.explanation}`}</p>
                <p>{`Copyright \u00a9 ${pictureData?.copyright}`}</p>
            </main>
            <footer>Project created during Wizeline Academy React Testing Bootcamp</footer>
        </section>
    );
}

export default Pictures;