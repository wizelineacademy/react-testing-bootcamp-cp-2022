import React, { useEffect, useState } from 'react';

import { DatePickerInput } from './DatePickerInput';
import { ImageWrapper } from './ImageWrapper';
import { fetchPictureOfTheDay } from '../api/apod';

import { Button, Stack, Typography, Box } from '@mui/material';

export const MainSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [apodData, setApodData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [apodDate, setapodDate] = useState(null);
  const [validDate, setValidDate] = useState(new Date());

  useEffect(() => {
    const fetchImage = async () => {
      if (isLoading) {
        try {
          const response = await fetchPictureOfTheDay(apodDate);
          setApodData(response);
          setIsLoading(false);
          setErrorMessage(null);
        } catch (error) {
          setErrorMessage(error.msg || 'There was an error, please try again');
          setIsLoading(false);
        }
      }
    };
    fetchImage();
  }, [isLoading]);

  const onSearchNewDate = (e) => {
    e.preventDefault();
    if (validDate) {
      setIsLoading(true);
    }
  };

  return (
    <Box sx={{ px: 4, flexGrow: 1 }}>
      <Stack
        component='form'
        onSubmit={onSearchNewDate}
        direction='row'
        spacing={4}
        justifyContent='flex-end'
        sx={{ mb: 4 }}>
        <DatePickerInput
          value={apodDate}
          setValue={setapodDate}
          validDate={validDate}
          setValidDate={setValidDate}
        />
        <Button
          variant='contained'
          type='submit'
          disabled={!validDate}
          size='small'>
          Search
        </Button>
      </Stack>
      {errorMessage ? (
        <Box>
          <Typography variant='h3' component='h2'>
            Oh no!
          </Typography>
          <Typography>{errorMessage}</Typography>
        </Box>
      ) : (
        <ImageWrapper
          isLoading={isLoading}
          title={apodData?.title}
          description={apodData?.explanation}
          imageSRC={apodData?.url}
          currentDate={apodData?.date}
        />
      )}
    </Box>
  );
};
