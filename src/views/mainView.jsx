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
        EXPERIENCE
        <Divider />
      </Typography>
      <div className="experience">
      <p><div className="date">2020.09</div> <a href="https://camp-fire.jp/projects/325017/view">Cloud Funding at Compfire</a></p>
      <p><div className="date">2022.10</div><a href="https://nu.edu.kz/news/meta-silk-road-aua-youth-forum-kicked-off-at-nu">AUA Youth Forum 2022 </a> : noteの記事は<a href="https://note.com/duckduck1836/n/n399441713f33">こちら</a></p>
      <p><div className="date">2023.06 ~ 2023.10</div><a href="https://www.u-tokyo.ac.jp/content/400237694.pdf">UGIP ～Global Business Experience by DAIKIN～ </a></p>
      <p><div className="date">2022.10 ~ 2024.07</div>AI Engineer at morpho AI solutions : <a href="https://www.morphoai.com/">Home Page</a></p>
      <p><div className="date">2024.10 ~ 2024.12</div>SNNC : Student Nobel Night Cap Volunteer, 2024, Food and Beverage, Room and Process Manager <a href="https://snnc.se/">Home Page</a></p>
      <p><div className="date">2022.04 ~ now</div>RoboTech : circuit design team <a href="https://www.youtube.com/watch?v=p26yrFr8vX8">RC 2024</a></p>
      <p><div className="date">2024.10 ~ now</div>Internship at Matsuo lab</p>
      <p><div className="date">2024.08 ~ 2025.06</div>Exchage student at KTH in Sweden</p>
      </div>
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
      <div>
        <p className="lang-name">実用英語技能検定1級</p>
      </div>
      <div>
        <p className="lang-name">TOEFL 90 (2022.10)</p>
      </div>
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