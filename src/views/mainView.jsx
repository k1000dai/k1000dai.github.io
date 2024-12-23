import "/src/style.css";
import { Typography,List,ListItem,ListItemText } from "@mui/material";
import Divider from '@mui/material/Divider';

const MainView = function mainview() {
  return (
    <div className="main">
      <Typography variant="h4" component="h1" gutterBottom>
        ABOUT ME
        <Divider />
      </Typography>
      <p>Undergraduate student, B3, University of Tokyo. Systems Innovation, Faculty of Engineering</p>
      <p>Exchage student at KTH,EECS in Sweden</p>
      <Typography variant="h4" component="h1" gutterBottom>
        SKILLS
        <Divider />
      </Typography>
      <div className="langueges">
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
      </div>
      
      

      <Typography variant="h4" component="h1" gutterBottom>
        EXPERIENCE
        <Divider />
      </Typography>
      <div className="experience">
      <p><a href="https://nu.edu.kz/news/meta-silk-road-aua-youth-forum-kicked-off-at-nu">AUA Youth Forum 2022 2022.10 </a> : noteの記事は<a href="https://note.com/duckduck1836/n/n399441713f33">こちら</a></p>
      <p><a href="https://www.u-tokyo.ac.jp/content/400237694.pdf">UGIP ～Global Business Experience by DAIKIN～ 2023.6 ~ 2023.10</a></p>
      <p>AI Engineer at morpho AI solutions 2022.10 ~ 2024.7 <a href="https://www.morphoai.com/">Home Page</a></p>
      <p>SNNC : Student Nobel Night Cap Volunteer, 2024, Food and Beverage, Room and Process Manager <a href="https://snnc.se/">Home Page</a></p>
      <p>RoboTech : circuit design team <a href="https://www.youtube.com/watch?v=p26yrFr8vX8">RC 2024</a></p>
      <p>Internship at Matsuo lab from 2024.10 ~ </p>
      <p>Exchage student at KTH in Sweden from 2024.8 ~ 2025.6</p>

      </div>
      
      <Typography variant="h4" component="h1" gutterBottom>
        TRAVEL
        <Divider />
      </Typography>
      I have been to:
      <div className="countries">
        <div className="country-flag">
          🇯🇵
          <span className="tooltip-text">Japan</span>
        </div>
        <div className="country-flag">
          🇰🇷  
          <span className="tooltip-text">Korea</span>
        </div>
        <div className="country-flag">
          🇭🇰
          <span className="tooltip-text">Hong Kong</span>
        </div>
        <div className="country-flag">
          🇨🇳
          <span className="tooltip-text">China</span>
        </div>
        <div className="country-flag">
          🇲🇴
          <span className="tooltip-text">Macau</span>
        </div>
        <div className="country-flag">
          🇹🇼
          <span className="tooltip-text">Taiwan</span>
        </div>
        <div className="country-flag">
          🇵🇭
          <span className="tooltip-text">Philippines</span>
        </div>
        <div className="country-flag">
          🇰🇿
          <span className="tooltip-text">Kazakhstan</span>
        </div>
        <div className="country-flag">
          🇮🇳
          <span className="tooltip-text">India</span>
        </div>
        <div className="country-flag">
          🇸🇪
          <span className="tooltip-text">Sweden</span>
        </div>
        <div className="country-flag">
          🇫🇮
          <span className="tooltip-text">Finland</span>
        </div>
        <div className="country-flag">
          🇩🇰
          <span className="tooltip-text">Denmark</span>
        </div>
        <div className="country-flag">
          🇩🇪
          <span className="tooltip-text">Germany</span>
        </div>
        <div className="country-flag">
          🇳🇱
          <span className="tooltip-text">Netherlands</span>
        </div>
        <div className="country-flag">
          🇧🇪
          <span className="tooltip-text">Belgium</span>
        </div>
        <div className="country-flag">
          🇬🇧
          <span className="tooltip-text">UK</span>
        </div>
        <div className="country-flag">
          🇮🇪
          <span className="tooltip-text">Ireland</span>
        </div>
        <div className="country-flag">
          🇨🇭
          <span className="tooltip-text">Switzerland</span>
        </div>
        <div className="country-flag">
          🇪🇸
          <span className="tooltip-text">Spain</span>
        </div>
        <div className="country-flag">
          🇵🇹
          <span className="tooltip-text">Portugal</span>
        </div>
        <div className="country-flag">
          🇫🇷
          <span className="tooltip-text">France</span>
        </div>
        <div className="country-flag">
          🇮🇹
          <span className="tooltip-text">Italy</span>
        </div>
        <div className="country-flag">
          🇵🇱
          <span className="tooltip-text">Poland</span>
        </div>
        <div className="country-flag">
          🇨🇿
          <span className="tooltip-text">Czech</span>
        </div>
        <div className="country-flag">
          🇦🇹
          <span className="tooltip-text">Austria</span>
        </div>
        <div className="country-flag">
          🇸🇰
          <span className="tooltip-text">Slovakia</span>
        </div>
        <div className="country-flag">
          🇭🇺
          <span className="tooltip-text">Hungary</span>
        </div>
        <div className="country-flag">
          🇬🇷
          <span className="tooltip-text">Greece</span>
        </div>
        <div className="country-flag">
          🇺🇸
          <span className="tooltip-text">USA</span>
        </div>
        <div className="country-flag">
          🇨🇦
          <span className="tooltip-text">Canada</span>
        </div>
        <div className="country-flag">
          🇸🇬
          <span className="tooltip-text">Singapore</span>
        </div>
        <div className="country-flag">
          🇲🇾
          <span className="tooltip-text">Malaysia</span>
        </div>

      
      </div>
      
    </div>
  );
}

export { MainView };