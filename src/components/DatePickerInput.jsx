import React from 'react';

import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export const DatePickerInput = ({
  value,
  setValue,
  validDate,
  setValidDate,
  maxDate = new Date(),
  minDate = new Date(0),
}) => {
  const handleDateChange = (selectedDate) => {
    let dateNumber = selectedDate && Date.parse(selectedDate);
    const max = Date.parse(maxDate);
    const min = Date.parse(minDate);

    setValidDate(!isNaN(dateNumber) && dateNumber < max && dateNumber > min);
    setValue(selectedDate);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        maxDate={maxDate}
        minDate={minDate}
        label='Pick a date'
        value={value}
        onChange={handleDateChange}
        renderInput={(params) => (
          <TextField
            {...params}
            size='small'
            helperText={
              !validDate
                ? 'Please enter a date before today, and after 1970'
                : ''
            }
          />
        )}
      />
    </LocalizationProvider>
  );
};
