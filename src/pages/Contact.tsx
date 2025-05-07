import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Button } from '@mui/material';

const Contact = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const endpoint = 'https://formspree.io/f/xldbndyv';
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        message: form.message,
      }),
    });
    if (response.ok) {
      setSubmitted(true);
      setForm({ firstName: '', lastName: '', email: '', message: '' });
    } else {
      alert('There was an error sending your message.');
    }
  };

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
          {submitted ? (
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
                  value={form.firstName}
                  onChange={handleChange}
                  variant="outlined"
                />
                <TextField
                  required
                  fullWidth
                  label="Last Name"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
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
                  value={form.email}
                  onChange={handleChange}
                  variant="outlined"
                />
              </Box>
              <Box sx={{ mb: 2 }}>
                <TextField
                  required
                  fullWidth
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
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
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;