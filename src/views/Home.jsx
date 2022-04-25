import { Footer } from '../components/Footer';
import { MainSection } from '../components/MainSection';
import { Stack, Typography } from '@mui/material';

export const Home = () => {
  return (
    <Stack
      sx={{ width: '100%', minHeight: '100vh' }}
      justifyContent='space-between'>
      <Typography variant='h3' textAlign='center' component='h1' sx={{ py: 4 }}>
        Astronomy Picture of the Day
      </Typography>
      <MainSection />
      <Footer />
    </Stack>
  );
};
