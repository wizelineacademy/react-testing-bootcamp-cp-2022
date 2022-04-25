import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, Skeleton, Typography } from '@mui/material';

const LinesOfSkeletons = () =>
  [...Array(6).keys()].map((index) => <Skeleton variant='text' key={index} />);

export const ImageWrapper = ({
  isLoading,
  title,
  currentDate,
  imageSRC,
  description,
}) => {
  return (
    <Grid
      container
      alignItems='center'
      spacing={4}
      justifyContent='space-between'
      direction={{ xs: 'column', md: 'row' }}>
      <Grid item xs={12} md={6} sx={{ width: '100%' }}>
        <Typography variant='h4' component='h2'>
          {isLoading ? <Skeleton /> : title}
        </Typography>
        <Typography variant='body2'>
          {isLoading ? <Skeleton /> : currentDate}
        </Typography>
        <Box sx={{ '& img': { width: '100%' } }}>
          {isLoading ? (
            <Skeleton variant='rectangular' height='25em' />
          ) : (
            <img src={imageSRC} alt={title} />
          )}
        </Box>
      </Grid>
      <Grid item xs={12} md={6} sx={{ width: '100%' }}>
        <Typography variant='body1'>
          {isLoading ? <LinesOfSkeletons /> : description}
        </Typography>
      </Grid>
    </Grid>
  );
};

ImageWrapper.propTypes = {
  title: PropTypes.string,
  currentDate: PropTypes.string,
  imageSRC: PropTypes.string,
  description: PropTypes.string,
};
