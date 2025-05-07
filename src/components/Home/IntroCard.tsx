import { Box, Typography, Button, useTheme } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const IntroCard = ({ isDesktop }: { isDesktop: boolean }) => {
  const theme = useTheme();
  return (
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
      <Box sx={{ flex: 1, textAlign: 'left', margin: 2 }}>
        {isDesktop && (
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
  );
};

export default IntroCard; 