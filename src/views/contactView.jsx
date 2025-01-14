import "/src/style.css";
import { Box, Card, CardContent, Typography, Button, Stack, Paper } from '@mui/material';
import Divider from '@mui/material/Divider';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';

const EmailCard = ({ title, email }) => (
  <Card 
    variant="outlined" 
    sx={{
      mb: 2,
      transition: 'transform 0.2s, box-shadow 0.2s',
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: 3,
      }
    }}
  >
    <CardContent>
      <Stack direction="row" alignItems="center" spacing={2}>
        <EmailIcon color="primary" sx={{ fontSize: 30 }} />
        <Box>
          <Typography variant="subtitle2" color="text.secondary">
            {title}
          </Typography>
          <Typography variant="h6">
            {email.replace(' [at] ', '@')}
          </Typography>
        </Box>
      </Stack>
    </CardContent>
  </Card>
);

const ContactView = function contactview() {
  return (
    <Box className="contact" sx={{ maxWidth: 800, margin: '0 auto', p: 3, mt: 8 }}>
      <Paper elevation={2} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom align="center">
          Contact Information
        </Typography>
        <Divider sx={{ mb: 4 }} />
        
        <Typography 
          variant="body1" 
          paragraph 
          align="center"
          sx={{ mb: 4 }}
        >
          For any inquiries, please feel free to reach out through either of the following email addresses:
        </Typography>

        <Box sx={{ mb: 4 }}>
          <EmailCard 
            title="Personal Email"
            email="kouhei.sendai [at] gmail.com"
          />
          <EmailCard 
            title="University Email"
            email="sendai-kohei [at] g.ecc.u-tokyo.ac.jp"
          />
        </Box>

        <Box sx={{ textAlign: 'center' }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<HomeIcon />}
            onClick={() => {window.location.hash="#/"}}
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: 2,
              textTransform: 'none',
              fontSize: '1.1rem',
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'scale(1.05)'
              }
            }}
          >
            Back to Home
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export { ContactView };
