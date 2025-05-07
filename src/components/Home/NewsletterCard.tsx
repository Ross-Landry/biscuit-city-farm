import { Box, Typography, Button } from '@mui/material';
import { useForm, ValidationError } from '@formspree/react';

const FORMSPREE_FORM_ID = "movdwdvd";

const NewsletterCard = () => {
  const [state, handleSubmit] = useForm(FORMSPREE_FORM_ID);

  return (
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
      {state.succeeded ? (
        <Typography variant="body1" color="success.main" sx={{ mt: 2 }}>
          Subscribed successfully!
        </Typography>
      ) : (
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: 'flex', gap: 1, width: '100%', maxWidth: 340, mt: 1 }}
        >
          <input
            id="email"
            type="email"
            name="email"
            required
            placeholder="Your email address"
            style={{ flex: 1, padding: '8px 12px', borderRadius: 4, border: '1px solid #ccc', fontSize: 16 }}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={state.submitting}
            sx={{ fontWeight: 'bold', textTransform: 'none' }}
          >
            Join
          </Button>
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </Box>
      )}
    </Box>
  );
};

export default NewsletterCard; 