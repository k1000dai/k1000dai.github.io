import "/src/style.css";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Image } from "@mui/icons-material";

const drawerWidth = 240;

const SidebarView = function sidebarview() {
    return (
        <div className="sidebar">
            <Drawer
            sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
            },
            }}
            variant="permanent"
            anchor="left"
             >
            <img src="face.jpeg" alt="face" width="200" height="200"　style={{ borderRadius: '50%', display: 'block',margin: '0 auto', padding: '10px' }}/>
            <Divider />
            <List>
            {['SNS', 'Contact', 'Background'].map((text, index) => (
                <ListItem key={text} disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                    {<InboxIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                </ListItemButton>
                </ListItem>
            ))}
            </List>
        </Drawer>
        </div>
    );
}

export { SidebarView };