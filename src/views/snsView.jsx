import "/src/style.css";
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { GitHub } from "@mui/icons-material";
import { Instagram } from "@mui/icons-material";
import { Twitter } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";
import ArtTrackIcon from '@mui/icons-material/ArtTrack';

const SnsView = function snsview() {
    return (
        <div className="sns">
        <Typography variant="h4" gutterBottom component="div">
            SNS・GitHub
        </Typography>
        <Divider />
        <div className="sns-item">
            <GitHub style={{ verticalAlign: 'middle', marginRight: '8px' }} />
            <p className="sns-name"> GitHub <a href="https://github.com/k1000dai" >k1000dai</a></p>
        </div>
        <Divider />
        <div className="sns-item">
            <Instagram style={{ verticalAlign: 'middle', marginRight: '8px' }} />
            <p className="sns-name"> Instagram  <a href="https://www.instagram.com/k.1000dai/">k.1000dai</a></p>
        </div>
        <Divider />
        <div className="sns-item">
            <Twitter style={{ verticalAlign: 'middle', marginRight: '8px' }} />
            <p className="sns-name"> Twitter <a href="https://x.com/PgChiyo">Kohei Sendai</a> </p>
        </div>
        <Divider />
        <div className="sns-item">
            <LinkedIn style={{ verticalAlign: 'middle', marginRight: '8px' }} />
            <p className="sns-name"> Linked In <a href="https://www.linkedin.com/in/kohei-sendai-890505312/">Kohei Sendai</a></p>
        </div>
        <Divider />
        <div className="sns-item">
            <img src="icon.png" alt="icon" style={{ verticalAlign: 'middle', marginRight: '8px',height: '30px' }} />
            <p className="sns-name"> Note <a href="https://note.com/duckduck1836">duckduck1836</a></p>
        </div>
        <Divider />
        <div>
        <Button onClick={() => {window.location.hash="#/"}} variant="contained" color="primary">
            Back to Home
        </Button>
        </div>
        
        </div>
    );
}

export { SnsView };