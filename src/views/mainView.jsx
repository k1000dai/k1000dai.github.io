import "/src/style.css";
import { Typography } from "@mui/material";
import Divider from '@mui/material/Divider';

const MainView = function mainview() {
  return (
    <div className="main">
      <Typography variant="h3" noWrap component="div">
              Kohei Sendai/千代 航平
      </Typography>
      <Divider style={{margin: '10px'}} />
      <Typography variant="h4" component="h1" gutterBottom>
        ABOUT ME
      </Typography>
      <p>Hi! I'm Kohei Sendai. I'm a university student at Univserity of Tokyo.</p>
      <Typography variant="h4" component="h1" gutterBottom>
        SKILLS
      </Typography>
      <p>Python, C++, React, HTML, CSS, JavaScript</p>

      <Typography variant="h4" component="h1" gutterBottom>
        EXPERIENCE
      </Typography>
      <p>AUA Youth Forum 2020 </p>
      <p>UGIP : Undergraduate Internship Program</p>
      <p>AI Engineer at morpho AI solutions 2022.10 ~ 2024.7</p>
      <p>SNNC : Student Nobel Night Cap Volunteer as RPM</p>
      <p>Robotech circuit design team</p>
      <p>Internship at Matsuo lab from 2024.10 ~ </p>
      <p>Exchage student at KTH in Sweden from 2024.8 ~ 2025.6</p>

      <Typography variant="h4" component="h1" gutterBottom>
        TRAVEL
      </Typography>
    </div>
  );
}

export { MainView };