import React from 'react';
import { Container, Typography, Box, Stack } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4, mb: 4 }}>
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
            In 2024 they began selling fruit producing plants such as raspberries, paw paw, and blackberries. They hope to expand their offerings in the future - to include apple trees, pears, peaches, and more.
          </Typography>
        </Stack>
      </Box>
    </Container>
  );
};

export default About; 