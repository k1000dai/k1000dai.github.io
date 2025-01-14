import "/src/style.css";
import { Typography, Card, CardContent, Box, Paper, Chip, Stack } from "@mui/material";
import Divider from '@mui/material/Divider';

const MainView = function mainview() {
  const skills = [
    "Python", "C++", "Java", "JavaScript", "HTML/CSS", "React", "OCaml", "OpenMP/CUDA",
    "実用英語技能検定1級", "TOEFL 90 (2022.10)"
  ];

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
            Undergraduate student, B3, University of Tokyo. Systems Innovation, Faculty of Engineering
          </Typography>
          <Typography variant="body1">
            Exchange student at KTH, EECS in Sweden
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
                <Typography variant="h6" color="primary" sx={{ fontSize: '1.3rem' }}>2024.10 ~ now</Typography>
                <Typography sx={{ fontSize: '1.1rem', mt: 1 }}>Internship at Matsuo lab</Typography>
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
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6" color="primary">2022.10 ~ 2024.07</Typography>
                <Typography>
                  AI Engineer at morpho AI solutions : <a href="https://www.morphoai.com/">Home Page</a>
                </Typography>
              </CardContent>
            </Card>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6" color="primary">2022.04 ~ now</Typography>
                <Typography>
                  RoboTech : circuit design team <a href="https://www.youtube.com/watch?v=p26yrFr8vX8">RC 2024</a>
                </Typography>
              </CardContent>
            </Card>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6" color="primary">2023.06 ~ 2023.10</Typography>
                <Typography>
                  <a href="https://www.u-tokyo.ac.jp/content/400237694.pdf">UGIP ～Global Business Experience by DAIKIN～</a>
                </Typography>
              </CardContent>
            </Card>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6" color="primary">2022.10</Typography>
                <Typography>
                  <a href="https://nu.edu.kz/news/meta-silk-road-aua-youth-forum-kicked-off-at-nu">AUA Youth Forum 2022</a>
                  {' '}:noteの記事は<a href="https://note.com/duckduck1836/n/n399441713f33">こちら</a>, 
                  留学体験記は<a href="https://www.u-tokyo.ac.jp/content/400210529.pdf">こちら(page.17)</a>
                </Typography>
              </CardContent>
            </Card>
            <Card variant="outlined">
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

        {/* Travel Section */}
        <Paper elevation={2} sx={{ p: 3 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            TRAVEL
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Typography variant="h6" gutterBottom>I have been to:</Typography>
          <Stack direction="row" spacing={2} sx={{ mt: 1 }} flexWrap="wrap" useFlexGap>
            {[
              ["🇯🇵", "Japan"], ["🇰🇷", "Korea"], ["🇭🇰", "Hong Kong"], ["🇨🇳", "China"],
              ["🇲🇴", "Macau"], ["🇹🇼", "Taiwan"], ["🇵🇭", "Philippines"], ["🇰🇿", "Kazakhstan"],
              ["🇮🇳", "India"], ["🇸🇪", "Sweden"], ["🇫🇮", "Finland"], ["🇩🇰", "Denmark"],
              ["🇩🇪", "Germany"], ["🇳🇱", "Netherlands"], ["🇧🇪", "Belgium"], ["🇬🇧", "UK"],
              ["🇮🇪", "Ireland"], ["🇨🇭", "Switzerland"], ["🇪🇸", "Spain"], ["🇵🇹", "Portugal"],
              ["🇫🇷", "France"], ["🇮🇹", "Italy"], ["🇻🇦", "Vatican"], ["🇵🇱", "Poland"],
              ["🇨🇿", "Czech"], ["🇦🇹", "Austria"], ["🇸🇰", "Slovakia"], ["🇭🇺", "Hungary"],
              ["🇬🇷", "Greece"], ["🇺🇸", "USA"], ["🇨🇦", "Canada"], ["🇸🇬", "Singapore"],
              ["🇲🇾", "Malaysia"], ["🇹🇭", "Thailand"], ["🇮🇸", "Iceland"]
            ].map(([flag, country]) => (
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
                  <Typography variant="h4" component="div">
                    {flag}
                  </Typography>
                  <Typography variant="caption">
                    {country}
                  </Typography>
                </Paper>
              </Box>
            ))}
          </Stack>
        </Paper>
      </Stack>
    </Box>
  );
}

export { MainView };
