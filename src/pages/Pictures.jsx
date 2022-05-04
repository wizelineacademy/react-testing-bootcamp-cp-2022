import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from 'react-date-picker'

import { NASA_API_KEY, NASA_BASE_URL } from "../constants";

function Pictures() {
    const [date, setDate] = useState(new Date());
    const [pictureData, setPictureData] = useState();
    const [error, setError] = useState(null); // There was an error, please try again.

    const getData = async () => {
        try {
            const dateString = date.toISOString().split('T')[0];
            const { data } = await axios.get(`${NASA_BASE_URL}`, { params: { api_key: NASA_API_KEY, date: dateString } });
            setPictureData(data);
        } catch(e) {
            setError(`Error: ${e.response.data.msg}`);
        }
    };

    useEffect(() => {
        setError(null);
        setPictureData(null);
        getData();
    }, [date]);

    return (
        <section>
            <h1>Picture of the day</h1>
            <main style={{ minHeight: '88vh' }}>
                <div>
                    <label htmlFor="date-picker">Choose a date:</label>
                    <DatePicker id="date-picker" onChange={setDate} value={date} />
                </div>

                {error && <p style={{ color: 'red' }}>{error}</p>}
                {pictureData && (
                    <section style={{ paddingBottom: '20px' }}>
                        <div>
                            <h2 data-testid="picture-title">{pictureData?.title}</h2>
                            <p data-testid="picture-date">{pictureData?.date}</p>
                            <img aria-label="picture of the day" src={pictureData?.url} />
                        </div>
                        <div>
                            <h3>Explanation</h3>
                            <p data-testid="picture-explanation">{`${pictureData?.explanation}`}</p>
                            {pictureData?.copyright && (
                                <p>{`Copyright \u00a9 ${pictureData?.copyright}`}</p>
                            )}
                        </div>
                    </section>
                )}
            </main>
            <footer>Project created during Wizeline Academy React Testing Bootcamp</footer>
        </section>
    );
}

export default Pictures;