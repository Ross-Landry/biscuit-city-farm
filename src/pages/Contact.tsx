import { Container, Typography, Box, TextField, Button } from '@mui/material';

const Contact = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4, mb: 4 }}>
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
  );
};

export default Contact; 