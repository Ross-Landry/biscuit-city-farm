import { Container, Typography, Box, TextField, Button } from '@mui/material';

const Contact = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        py: 6,
        position: 'relative',
        overflow: 'hidden',
        '::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          backgroundImage: 'url(/lavender.jpg)',
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
            mt: 4,
            mb: 4,
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            Contact Us
          </Typography>
          <Typography>
            Have questions about our plants or services? We'd love to hear from you!
            Fill out the form below and we'll get back to you as soon as possible.
          </Typography>
          <Box component="form" sx={{ mt: 3 }}>
            <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
              <TextField
                required
                fullWidth
                label="First Name"
                variant="outlined"
              />
              <TextField
                required
                fullWidth
                label="Last Name"
                variant="outlined"
              />
            </Box>
            <Box sx={{ mb: 2 }}>
              <TextField
                required
                fullWidth
                label="Email"
                type="email"
                variant="outlined"
              />
            </Box>
            <Box sx={{ mb: 2 }}>
              <TextField
                required
                fullWidth
                label="Message"
                multiline
                rows={4}
                variant="outlined"
              />
            </Box>
            <Box>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
              >
                Send Message
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact; 