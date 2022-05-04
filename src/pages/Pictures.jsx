import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from 'react-date-picker'

import { NASA_API_KEY, NASA_BASE_URL } from "../constants";

const pad2 = (str) => str.length < 2 ? `0${str}` : str;
const dateToString = (d) => {
    const year = d.getFullYear().toString();
    const month = pad2(d.getMonth().toString());
    const day = pad2(d.getDate().toString());
    return `${year}-${month}-${day}`;
};

function Pictures() {
    const [date, setDate] = useState(new Date());
    const [pictureData, setPictureData] = useState();
    const [showError, setShowError] = useState(false);

    const getData = async () => {
        try {
            const dateString = dateToString(date);
            const { data } = await axios.get(`${NASA_BASE_URL}`, { params: { api_key: NASA_API_KEY, date: dateString } });
            setPictureData(data);
        } catch(e) {
            setShowError(true);
        }
    };

    useEffect(() => {
        try {
            setPictureData(null);
            getData();
        } catch (e) {
            setShowError(true);
        }
    }, [date]);

    return (
        <section>
            <h1>Picture of the day</h1>
            <main>
                <div>
                    <label htmlFor="date-picker">Choose a date:</label>
                    <DatePicker id="date-picker" onChange={setDate} value={date} />
                </div>

                {showError && <p style={{ color: 'red' }} >There was an error, please try again.</p>}
                {pictureData && (
                    <div>
                        <h2 data-testid="picture-title">{pictureData?.title}</h2>
                        <p data-testid="picture-date">{pictureData?.date}</p>
                        <img aria-label="picture of the day" src={pictureData?.url} />
                    </div>
                )}

                <div>
                    <h3>Explanation</h3>
                    <p data-testid="picture-explanation">{`${pictureData?.explanation}`}</p>
                    {pictureData?.copyright && (
                        <p>{`Copyright \u00a9 ${pictureData?.copyright}`}</p>
                    )}
                </div>
            </main>
            <footer>Project created during Wizeline Academy React Testing Bootcamp</footer>
        </section>
    );
}

export default Pictures;