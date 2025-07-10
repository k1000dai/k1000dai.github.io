import "/src/style.css";
import { Typography, Card, CardContent, Box, Paper, Chip, Stack } from "@mui/material";
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SvgIcon from '@mui/material/SvgIcon';

const MainView = function mainview() {
  const skills = [
    "Python", "C++", "Java", "JavaScript", "HTML/CSS", "React", "OCaml", "OpenMP/CUDA",
    "実用英語技能検定1級", "TOEFL 103 (2025.06)","Swedish A2"
  ];

  const countries = {
    asia: [
      ["🇨🇳", "China"], ["🇭🇰", "Hong Kong"], ["🇮🇳", "India"],
      ["🇯🇵", "Japan"], ["🇰🇿", "Kazakhstan"], ["🇰🇷", "Korea"],
      ["🇲🇴", "Macau"], ["🇲🇾", "Malaysia"], ["🇵🇭", "Philippines"],
      ["🇸🇬", "Singapore"], ["🇹🇼", "Taiwan"], ["🇹🇭", "Thailand"],["🇹🇷","Turkey"]
    ],
    europe: [
      ["🇦🇹", "Austria"], ["🇧🇪", "Belgium"], ["🇨🇿", "Czech"],
      ["🇩🇰", "Denmark"], ["🇫🇮", "Finland"], ["🇫🇷", "France"],
      ["🇩🇪", "Germany"], ["🇬🇷", "Greece"], ["🇭🇺", "Hungary"],
      ["🇮🇸", "Iceland"], ["🇮🇪", "Ireland"], ["🇮🇹", "Italy"],
      ["🇳🇱", "Netherlands"], ["🇳🇴", "Norway"], ["🇵🇱", "Poland"],
      ["🇵🇹", "Portugal"], ["🇸🇰", "Slovakia"], ["🇪🇸", "Spain"],
      ["🇸🇪", "Sweden"], ["🇨🇭", "Switzerland"], ["🇬🇧", "UK"],
      ["🇻🇦", "Vatican"], ["/transnistria-flag.png", "Transnistria"],
      ["🇲🇩", "Moldova"], ["🇷🇴", "Romania"], ["🇪🇪", "Estonia"], ["🇷🇸", "Serbia"],
      ["🇱🇹","Lithuania"],["🇱🇻","Latvia"],["🇧🇬","Burugaria"],["🇨🇾","Cyprus"]
    ],
    northAmerica: [
      ["🇨🇦", "Canada"], ["🇺🇸", "USA"]
    ],
    africa: [
      ["🇲🇦", "Morocco"]
    ]
  };

  const CountryFlag = ({ flag, country }) => (
    <Box key={country}>
      <Paper 
        elevation={1}
        sx={{
          p: 1,
          textAlign: 'center',
          '&:hover': {
            transform: 'scale(1.1)',
            transition: 'transform 0.2s'
          }
        }}
      >
        {flag.startsWith('/') ? (
          <Box 
            component="img"
            src={flag}
            alt={`${country} flag`}
            sx={{
              height: '2.2em',
              minHeight: '2.5em',
              width: 'auto',
              display: 'block',
              margin: '0 auto',
              objectFit: 'contain'
            }}
          />
        ) : (
          <Typography variant="h4" component="div">
            {flag}
          </Typography>
        )}
        <Typography variant="caption">
          {country}
        </Typography>
      </Paper>
    </Box>
  );

  const RegionSection = ({ title, countries }) => (
    <Box>
      <Typography variant="h6" color="primary" gutterBottom>
        {title} ({countries.length})
      </Typography>
      <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
        {countries.map(([flag, country]) => (
          <CountryFlag key={country} flag={flag} country={country} />
        ))}
      </Stack>
    </Box>
  );

  const totalCountries = Object.values(countries).reduce(
    (total, region) => total + region.length, 0
  );

  return (
    <Box className="main" sx={{ maxWidth: 1200, margin: '0 auto', mt: 8 }}>
      <Stack spacing={4}>
        {/* About Section */}
        <Paper elevation={2} sx={{ p: 3 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            ABOUT ME
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Typography variant="body1" >
            Undergraduate student, B4, University of Tokyo. Systems Innovation, Faculty of Engineering
          </Typography>
          <Typography variant="body1">
            Matsuo Iwasawa Labratory, Research on Robotics, Physical AI
          </Typography>
        </Paper>

        {/* Experience Section */}
        <Paper elevation={2} sx={{ p: 3 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            EXPERIENCE
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Stack spacing={2}>
            <Card variant="outlined" sx={{
              '&:hover': {
                boxShadow: 3,
                transform: 'scale(1.01)',
                transition: 'all 0.2s ease-in-out'
              }
            }}>
              <CardContent>
                <Typography variant="h6" color="primary" sx={{ fontSize: '1.3rem' }}>2025.05 ~ now </Typography>
                <Typography sx={{ fontSize: '1.1rem', mt: 1 }}>Google Summer of Code : Debian Project "Package LLM Inference Libraries"</Typography>
              </CardContent>
            </Card>
            <Card variant="outlined" sx={{ 
              '&:hover': {
                boxShadow: 3,
                transform: 'scale(1.01)',
                transition: 'all 0.2s ease-in-out'
              }
            }}>
              <CardContent>
                <Typography variant="h6" color="primary" sx={{ fontSize: '1.3rem' }}>2024.10 ~ 2025.05</Typography>
                <Typography sx={{ fontSize: '1.1rem', mt: 1 }}>Internship at Matsuo Iwasawa lab</Typography>
              </CardContent>
            </Card>
            <Card variant="outlined" sx={{ 
              '&:hover': {
                boxShadow: 3,
                transform: 'scale(1.01)',
                transition: 'all 0.2s ease-in-out'
              }
            }}>
              <CardContent>
                <Typography variant="h6" color="primary" sx={{ fontSize: '1.3rem' }}>2024.08 ~ 2025.06</Typography>
                <Typography sx={{ fontSize: '1.1rem', mt: 1 }}>Exchange student at KTH in Sweden</Typography>
              </CardContent>
            </Card>
            <Card variant="outlined" sx={{ 
              '&:hover': {
                boxShadow: 3,
                transform: 'scale(1.01)',
                transition: 'all 0.2s ease-in-out'
              }
            }}>
              <CardContent>
                <Typography variant="h6" color="primary" sx={{ fontSize: '1.3rem' }}>2024.10 ~ 2024.12</Typography>
                <Typography sx={{ fontSize: '1.1rem', mt: 1 }}>
                  SNNC : Student Nobel Night Cap Volunteer, 2024, Food and Beverage, Room and Process Manager{' '}
                  <a href="https://snnc.se/">Home Page</a>
                </Typography>
              </CardContent>
            </Card>
            <Card variant="outlined" sx={{
              '&:hover': {
                boxShadow: 3,
                transform: 'scale(1.01)',
                transition: 'all 0.2s ease-in-out'
              }
            }}>
              <CardContent>
                <Typography variant="h6" color="primary">2022.10 ~ 2024.07</Typography>
                <Typography>
                  AI Engineer at morpho AI solutions : <a href="https://www.morphoai.com/">Home Page</a>
                </Typography>
              </CardContent>
            </Card>
            <Card variant="outlined" sx={{
              '&:hover': {
                boxShadow: 3,
                transform: 'scale(1.01)',
                transition: 'all 0.2s ease-in-out'
              }
            }}>
              <CardContent>
                <Typography variant="h6" color="primary">2022.04 ~ now</Typography>
                <Typography>
                  RoboTech : circuit design team <a href="https://www.youtube.com/watch?v=p26yrFr8vX8">RC 2024</a>
                </Typography>
              </CardContent>
            </Card>
            <Card variant="outlined" sx={{
              '&:hover': {
                boxShadow: 3,
                transform: 'scale(1.01)',
                transition: 'all 0.2s ease-in-out'
              }
            }}>
              <CardContent>
                <Typography variant="h6" color="primary">2023.06 ~ 2023.10</Typography>
                <Typography>
                  <a href="https://www.u-tokyo.ac.jp/content/400237694.pdf">UGIP ～Global Business Experience by DAIKIN～</a>
                </Typography>
              </CardContent>
            </Card>
            <Card variant="outlined" sx={{
              '&:hover': {
                boxShadow: 3,
                transform: 'scale(1.01)',
                transition: 'all 0.2s ease-in-out'
              }
            }}>
              <CardContent>
                <Typography variant="h6" color="primary">2022.10</Typography>
                <Typography>
                  <a href="https://nu.edu.kz/news/meta-silk-road-aua-youth-forum-kicked-off-at-nu">AUA Youth Forum 2022</a>
                  {' '}:noteの記事は<a href="https://note.com/duckduck1836/n/n399441713f33">こちら</a>, 
                  留学体験記は<a href="https://www.u-tokyo.ac.jp/content/400210529.pdf">こちら(page.17)</a>
                </Typography>
              </CardContent>
            </Card>
            <Card variant="outlined" sx={{
              '&:hover': {
                boxShadow: 3,
                transform: 'scale(1.01)',
                transition: 'all 0.2s ease-in-out'
              }
            }}>
              <CardContent>
                <Typography variant="h6" color="primary">2020.09</Typography>
                <Typography>
                  <a href="https://camp-fire.jp/projects/325017/view">Cloud Funding at Compfire</a>
                </Typography>
              </CardContent>
            </Card>
          </Stack>
        </Paper>

        {/* Skills Section */}
        <Paper elevation={2} sx={{ p: 3 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            SKILLS
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            {skills.map((skill) => (
              <Box key={skill}>
                <Chip
                  label={skill}
                  color="primary"
                  variant="outlined"
                  sx={{ 
                    fontSize: '1rem',
                    p: 1,
                    height: 'auto'
                  }}
                />
              </Box>
            ))}
          </Stack>
        </Paper>
        {/* Debian Maintainer Section */}
        <Paper elevation={2} sx={{ p: 3 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            DEBIAN MAINTAINER
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Typography variant="body1">
            I am a Debian Maintainer, and I maintain the following packages:
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Currently maintained packages:
          </Typography>
          <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}>
            <li style={{ marginBottom: '0.5em' }}>
              <a href="https://tracker.debian.org/pkg/huggingface-hub" style={{ fontWeight: 500, color: '#1976d2', textDecoration: 'none', marginRight: 8 }}>python3-huggingface-hub</a>
              <a href="https://tracker.debian.org/pkg/huggingface-hub" style={{ color: '#1976d2', textDecoration: 'underline' }}>tracker</a>
            </li>
            <li style={{ marginBottom: '0.5em' }}>
              <a href="https://tracker.debian.org/pkg/interegular" style={{ fontWeight: 500, color: '#1976d2', textDecoration: 'none', marginRight: 8 }}>python3-interegular</a>
              <a href="https://tracker.debian.org/pkg/interegular" style={{ color: '#1976d2', textDecoration: 'underline' }}>tracker</a>
            </li>
            <li style={{ marginBottom: '0.5em' }}>
              <a href="https://tracker.debian.org/pkg/partial-json-parser" style={{ fontWeight: 500, color: '#1976d2', textDecoration: 'none', marginRight: 8 }}>python3-partial-json-parser</a>
              <a href="https://tracker.debian.org/pkg/partial-json-parser" style={{ color: '#1976d2', textDecoration: 'underline' }}>tracker</a>
            </li>
            <li style={{ marginBottom: '0.5em' }}>
              <a href="https://tracker.debian.org/pkg/blake3-py" style={{ fontWeight: 500, color: '#1976d2', textDecoration: 'none', marginRight: 8 }}>python3-partial-json-parser</a>
              <a href="https://tracker.debian.org/pkg/blake3-py" style={{ color: '#1976d2', textDecoration: 'underline' }}>tracker</a>
            </li>
            <li style={{ marginBottom: '0.5em' }}>
              <a href="https://tracker.debian.org/pkg/prometheus-fastapi-instrumentator" style={{ fontWeight: 500, color: '#1976d2', textDecoration: 'none', marginRight: 8 }}>python3-prometheus-fastapi-instrumentator</a>
              <a href="https://tracker.debian.org/pkg/prometheus-fastapi-instrumentator" style={{ color: '#1976d2', textDecoration: 'underline' }}>tracker</a>
            </li>
          </ul>
          <Typography variant="body1" sx={{ mt: 2 }}>
            You can find all my packages and contributions on my <a href="https://qa.debian.org/developer.php?login=kouhei.sendai%40gmail.com">Debian Developer page</a>.
          </Typography>
        </Paper>

        {/* Travel Section */}
        <Paper elevation={2} sx={{ p: 3 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            TRAVEL
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Typography variant="h6" gutterBottom>
            I have been to {totalCountries} countries/regions:
          </Typography>
          <Stack spacing={3}>
            <RegionSection title="Asia" countries={countries.asia} />
            <RegionSection title="Europe" countries={countries.europe} />
            <RegionSection title="North America" countries={countries.northAmerica} />
            <RegionSection title="Africa" countries={countries.africa} />
          </Stack>
        </Paper>
      </Stack>
    </Box>
  );
}

export { MainView };
