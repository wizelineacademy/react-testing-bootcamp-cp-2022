import { Box, Typography } from '@mui/material';
import React from 'react';

export const Footer = () => {
  return (
    <Box component='footer' sx={{ width: '100%', p: 4 }}>
      <Typography variant='body2' textAlign='center'>
        Project created during Wizeline Academy React Testing Bootcamp
      </Typography>
    </Box>
  );
};
