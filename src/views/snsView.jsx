import "/src/style.css";
import { Box, Card, CardContent, Typography, Button, Paper, Stack } from '@mui/material';
import Divider from '@mui/material/Divider';
import { GitHub, Instagram, Twitter, LinkedIn, Home as HomeIcon } from "@mui/icons-material";
import CreateIcon from '@mui/icons-material/Create';

const SocialCard = ({ icon, platform, username, link }) => (
  <Card 
    variant="outlined"
    sx={{
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'translateY(-8px)',
        boxShadow: 3,
        cursor: 'pointer',
      }
    }}
    onClick={() => window.open(link, '_blank')}
  >
    <CardContent>
      <Stack spacing={2} alignItems="center" sx={{ p: 1 }}>
        <Box sx={{ 
          backgroundColor: 'primary.light',
          borderRadius: '50%',
          p: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {icon}
        </Box>
        <Typography variant="h6" component="div">
          {platform}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {username}
        </Typography>
      </Stack>
    </CardContent>
  </Card>
);

const SnsView = function snsview() {
  const socialLinks = [
    {
      platform: "GitHub",
      username: "k1000dai",
      link: "https://github.com/k1000dai",
      icon: <GitHub sx={{ fontSize: 40, color: '#fff' }} />
    },
    {
      platform: "Instagram",
      username: "k.1000dai",
      link: "https://www.instagram.com/k.1000dai/",
      icon: <Instagram sx={{ fontSize: 40, color: '#fff' }} />
    },
    {
      platform: "Twitter",
      username: "Kohei Sendai",
      link: "https://x.com/PgChiyo",
      icon: <Twitter sx={{ fontSize: 40, color: '#fff' }} />
    },
    {
      platform: "LinkedIn",
      username: "Kohei Sendai",
      link: "https://www.linkedin.com/in/kohei-sendai-890505312/",
      icon: <LinkedIn sx={{ fontSize: 40, color: '#fff' }} />
    },
    {
      platform: "Note",
      username: "duckduck1836",
      link: "https://note.com/duckduck1836",
      icon: <CreateIcon sx={{ fontSize: 40, color: '#fff' }} />
    }
  ];

  return (
    <Box className="sns" sx={{ maxWidth: 1200, margin: '0 auto', p: 3, mt: 8 }}>
      <Paper elevation={2} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom align="center">
          Social Media & Links
        </Typography>
        <Divider sx={{ mb: 4 }} />

        <Stack 
          direction="row" 
          flexWrap="wrap" 
          spacing={3} 
          useFlexGap 
          sx={{ 
            mb: 4,
            '& > *': {
              flexBasis: {
                xs: '100%',
                sm: 'calc(50% - 24px)',
                md: 'calc(33.333% - 24px)'
              }
            }
          }}
        >
          {socialLinks.map((social) => (
            <SocialCard key={social.platform} {...social} />
          ))}
        </Stack>

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

export { SnsView };
