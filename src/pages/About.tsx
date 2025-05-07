import React from 'react';
import { Container, Typography, Box, Stack } from '@mui/material';

const About = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        py: 4,
        position: 'relative',
        overflow: 'hidden',
        '::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          backgroundImage: 'url(/sunflower.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.25,
        },
      }}
    >
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            bgcolor: 'white',
            borderRadius: 4,
            boxShadow: 2,
            p: { xs: 2, md: 4 },
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            About Us
          </Typography>
          <Stack spacing={3}>
            <Typography>
              Ross & Rachael are first generation farmers with day jobs in tech and education. Together they are rehabilitating a 7 acre property in Charlestown, RI.
            </Typography>
            <Typography>
              The property had been abandoned for years and was in a state of disrepair. Little by little the brambles and dead wood are being cleaned up. Fruit trees are being planted. Walking paths are being woodchipped. And the old farmhouse is being renovated.
            </Typography>
            <Typography>
              In 2024 they began selling plants such as raspberries, paw paw, and blackberries. They hope to expand their offerings in the future - to include apple trees, pears, peaches, and more.
            </Typography>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default About; 