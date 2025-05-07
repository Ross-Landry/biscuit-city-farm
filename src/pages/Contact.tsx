import { Container, Typography, Box, TextField, Button } from '@mui/material';
import { useForm, ValidationError } from '@formspree/react';

const FORMSPREE_FORM_ID = "xldbndyv";

const Contact = () => {
  const [state, handleSubmit] = useForm(FORMSPREE_FORM_ID);

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
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            Contact Us
          </Typography>
          {state.succeeded ? (
            <Typography variant="h6" sx={{ my: 2 }}>
              Thank you for your message!
            </Typography>
          ) : (
            <Box component="form" sx={{ mt: 3 }} onSubmit={handleSubmit}>
              <Typography>
                Have questions about our plants or services? We'd love to hear from you!
                Fill out the form below and we'll get back to you as soon as possible.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, my: 2 }}>
                <TextField
                  required
                  fullWidth
                  label="First Name"
                  name="firstName"
                  variant="outlined"
                />
                <TextField
                  required
                  fullWidth
                  label="Last Name"
                  name="lastName"
                  variant="outlined"
                />
              </Box>
              <Box sx={{ mb: 2 }}>
                <TextField
                  required
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  variant="outlined"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </Box>
              <Box sx={{ mb: 2 }}>
                <TextField
                  required
                  fullWidth
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                  variant="outlined"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </Box>
              <Box>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  disabled={state.submitting}
                >
                  Send Message
                </Button>
              </Box>
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;