import "/src/style.css";
import { Typography,List,ListItem,ListItemText } from "@mui/material";
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';


const MainView = function mainview() {
  return (
    <div className="main">
      <Typography variant="h4" component="h1" gutterBottom>
        ABOUT ME
        <Divider />
      </Typography>
      <p>Undergraduate student, B3, University of Tokyo. </p>
      <Typography variant="h4" component="h1" gutterBottom>
        SKILLS
        <Divider />
      </Typography>
      
      <div>
        <p className="lang-name">Python</p>
      </div>
      <div>
        <p className="lang-name">C++</p>
      </div>
      <div>
        <p className="lang-name">Java</p>
      </div>
      <div>
        <p className="lang-name">JavaScript</p>
      </div>
      <div>
        <p className="lang-name">HTML/CSS</p>
      </div>
      <div>
        <p className="lang-name">React</p>
      </div>
      <div>
        <p className="lang-name">OCaml</p>
      </div>
      <div>
        <p className="lang-name">OpemMP/CUDA</p>
      </div>
      
      

      <Typography variant="h4" component="h1" gutterBottom>
        EXPERIENCE
        <Divider />
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
        <Divider />
      </Typography>
      I have been to:
      <ul>
        <li>Sweden</li>
        <li>Finland</li>
        <li>Denmark</li>
        <li>Germany</li>
        <li>France</li>
        <li>Italy</li>
        <li>Switzerland</li>
        <li>Spain</li>
        <li>Portugal</li>
        <li>UK</li>
        <li>USA</li>
        <li>Canada</li>
        <li>China</li>
        <li>South Korea</li>
        <li>Thailand</li>
      </ul>
      
    </div>
  );
}

export { MainView };