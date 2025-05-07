import { Container, Box, useTheme, useMediaQuery } from '@mui/material';
import IntroCard from '../components/Home/IntroCard';
import PodcastCard from '../components/Home/PodcastCard';
import NewsletterCard from '../components/Home/NewsletterCard';

const Home = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Box
      sx={{
        minHeight: '120vh',
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
        <IntroCard isDesktop={isDesktop} />
        <Box sx={{ mt: 4, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
          <PodcastCard />
          <NewsletterCard/>
        </Box>
      </Container>
    </Box>
  );
};

export default Home; 