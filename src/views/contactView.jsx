import "/src/style.css";
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';


const ContactView = function contactview() {
    return (
        <div className="contact">
        <Typography variant="h4" gutterBottom component="div">
            Contact
        </Typography>
        <Divider />
        <div>
            <p>For any inquiries, please contact me at:</p>
            <Divider />
            <p className="email">Personal: kouhei.sendai [at] gmail.com</p>
            <p className="email">University: sendai-kohei [at] g.ecc.u-tokyo.ac.jp</p>
            <Divider />
        </div>
        <Button onClick={() => {window.location.hash="#/"}} variant="contained" color="primary">
            Back to Home
        </Button>
        </div>
    );
}

export { ContactView };