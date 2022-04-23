import { useEffect, useState } from 'react';

import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { fetchImage } from '../../services';

import { isValidDate, formatDate } from '../../utils';

import './styles.css';

export const MainSection = () => {
  const today = new Date();
  const [imageData, setImageData] = useState({});
  const [date, setDate] = useState(today);
  const [hasError, setHasError] = useState(false);


  const handleTryAgainClick = () => {
    setHasError(false);
    setDate(today);
  }

  useEffect(() => {
    const fetchImageOfTheDay = async() => {
      try {
        const formattedDate = formatDate(date);
        const response = await fetchImage({ date: formattedDate });
        const { data, status } = response;

        if (status === 200) {
          setImageData({
            url: data.url,
            title: data.title,
            explanation: data.explanation
          });

          setHasError(false);
        }
      } catch(e) {
        setHasError(true);
      }
    }

    if (isValidDate(date)) {
      fetchImageOfTheDay();
    }

  }, [date])

  return (
    <div className="container">
      <div className="picker-container">
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Select a date"
            value={date}
            onChange={(newValue) => {
              setDate(newValue);
            }}
            renderInput={(params) => <TextField disabled={true} {...params} />}
            inputFormat="yyyy-MM-dd"
            mask="____-__-__"
          />
        </LocalizationProvider>
      </div>
      {hasError ? <span onClick={handleTryAgainClick} className='error'>There was an error, please try again.</span> : null}
      <div className="main-container">
        <div className="image-container">
          <h1>{imageData.title}</h1>
          <img loading="lazy" alt={imageData.title} src={imageData.url} />
        </div>

        <div className="text-container">
          <p>{imageData.explanation}</p>
        </div>
      </div>
    </div>
  );
};