import { Box, Typography, Button } from '@mui/material';

const PodcastCard = () => (
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
);

export default PodcastCard; 