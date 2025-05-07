import { Container, Typography, Box, Button, useTheme, useMediaQuery } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Home = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));
  
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
          backgroundImage: 'url(/figs.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.25,
        },
      }}
    >
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            bgcolor: 'white',
            borderRadius: 4,
            boxShadow: 2,
            p: { xs: 2, md: 4 },
          }}
        >
          {/* Logo */}
          <Box sx={{ flex: { md: '0 0 300px', xs: 'none' }, textAlign: 'center' }}>
            <img
              src="/logo.png"
              alt="Biscuit City Farm Logo"
              style={{
                maxWidth: 360,
                width: '100%'
              }}
            />
          </Box>
          {/* Text */}
          <Box sx={{ flex: 1, textAlign:'left', margin: 2}}>
            { isDesktop && (
              <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
                Biscuit City Farm
              </Typography>
            )}
            <Typography variant="h6" sx={{ color: theme.palette.primary.main, mb: 2 }}>
              An organic plant nursery in Southern Rhode Island
            </Typography>
            <Typography sx={{ mb: 3 }}>
              We specialize in low-maintenance plants that produce food. We grow raspberries, paw paw, blackberries, and more.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ textTransform: 'none', fontWeight: 'bold', mb: 4 }}
              component={RouterLink}
              to="/contact"
            >
              Contact Us
            </Button>
          </Box>
        </Box>
        {/* Extra Cards Section */}
        <Box sx={{ mt: 4, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
          {/* Podcast Card */}
          <Box
            sx={{
              flex: 1,
              bgcolor: 'white',
              borderRadius: 4,
              boxShadow: 2,
              p: 3,
              minHeight: 200,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 700, my: 1, textAlign: 'left', width: '100%' }}>
              The Rookie Homesteader Podcast
            </Typography>
            <Typography sx={{ mb: 2, textAlign: 'left', width: '100%' }}>
              Follow the development of this farm from the very beginning!
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: { xs: 'center', sm: 'flex-start' }, width: '100%', gap: 3 }}>
              <Box sx={{ width: 140, height: 140, borderRadius: 3, overflow: 'hidden', boxShadow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: { xs: 2, sm: 0 } }}>
                <img src="/podcast-cover-art.png" alt="The Rookie Homesteader Podcast Cover" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 12 }} />
              </Box>
              <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 1, width: '100%' }}>
                <Button variant="outlined" color="primary" size="large" href="https://podcasts.apple.com/us/podcast/the-rookie-homesteader/id1612464097" target="_blank" fullWidth>
                  APPLE PODCASTS
                </Button>
                <Button variant="outlined" color="primary" size="large" href="https://open.spotify.com/show/5kOs7siRZxriQizS1ZpuuT?si=ZVBEEdqqTP6dV8rhFllkhg" target="_blank" fullWidth>
                  SPOTIFY
                </Button>
                <Button variant="outlined" color="primary" size="large" href="https://www.buzzsprout.com/1941530" target="_blank" fullWidth>
                  RSS FEED
                </Button>
              </Box>
            </Box>
          </Box>
          {/* Mailing List Card */}
          <Box
            sx={{
              flex: 1,
              bgcolor: 'white',
              borderRadius: 4,
              boxShadow: 2,
              p: 3,
              minHeight: 200,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 700, my: 1, textAlign: 'left', width: '100%' }}>
              Join Our Mailing List
            </Typography>
            <Typography sx={{ mb: 2, textAlign: 'left', width: '100%' }}>
              Get notified when plant sales or other events are happening at the farm!
            </Typography>
            <Box component="form" sx={{ display: 'flex', gap: 1, width: '100%', maxWidth: 340, mt: 1 }}>
              <input
                type="email"
                placeholder="Your email address"
                style={{ flex: 1, padding: '8px 12px', borderRadius: 4, border: '1px solid #ccc', fontSize: 16 }}
                required
                disabled
              />
              <Button variant="contained" color="primary" type="submit" disabled sx={{ fontWeight: 'bold', textTransform: 'none' }}>
                Join
              </Button>
            </Box>
            <Typography variant="caption" sx={{ color: 'text.secondary', mt: 1 }}>
              (Coming soon)
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home; 