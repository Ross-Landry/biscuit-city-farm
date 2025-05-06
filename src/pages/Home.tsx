import { Container, Typography, Box } from '@mui/material';

const Home = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4, mb: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src="/logo.png" alt="Biscuit City Farm Logo" style={{ maxWidth: 420, width: '100%', marginBottom: 32 }} />
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to Biscuit City Farm
        </Typography>
        <Typography variant="h6" gutterBottom>
          An organic plant nursery in Southern Rhode Island
        </Typography>
        <Typography>
          We specialize in low-maintenance plants that produce food. We grow raspberries, paw paw, blackberries, and more.
        </Typography>
      </Box>
    </Container>
  );
};

export default Home; 