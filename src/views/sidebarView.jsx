import "/src/style.css";
import React from "react";
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import HubTwoToneIcon from '@mui/icons-material/HubTwoTone';
import { HowToReg } from "@mui/icons-material";

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  });
  
const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme }) => ({
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: '#AAE1EF',
    color: 'black',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    variants: [
      {
        props: ({ open }) => open,
        style: {
          marginLeft: drawerWidth,
          width: `calc(100% - ${drawerWidth}px)`,
          transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
          }),
        },
      },
    ],
  }));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme }) => ({
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      variants: [
        {
          props: ({ open }) => open,
          style: {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
          },
        },
        {
          props: ({ open }) => !open,
          style: {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
          },
        },
      ],
    }),
  );

const SidebarView = function sidebarview() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <div className="sidebar">
            <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} >
                <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={[
                    {
                        marginRight: 5,
                    },
                    open && { display: 'none' },
                    ]}
                >
                <MenuIcon />
                </IconButton>
                <Typography onClick={() => {window.location.hash="#/"}} className="topname" variant="h4" noWrap component="div" style={{padding: '10px'}}>
                Kohei Sendai / 千代 航平
                </Typography>
                update 2024.12.22
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                {open && (<div>
                    <IconButton onClick={handleDrawerClose}>
                     <ChevronLeftIcon /> 
                    </IconButton>
                </div>)}
                </DrawerHeader>
            {open && (<div>
            <Divider />
            <img className="face-image" onClick={() => {window.location.hash="#/"}} src="face.jpeg" alt="face" width="200" height="200"　style={{ borderRadius: '50%', display: 'block',margin: '0 auto', padding: '10px' }}/>
            <Divider />
            </div>
            )
            }
            
            <List>
                <ListItem key="About" disablePadding onClick={() => {window.location.hash="#/"}}>
                <ListItemButton>
                    <ListItemIcon>
                    <HomeIcon/>
                    </ListItemIcon>
                    <ListItemText primary="About" />
                </ListItemButton> 
                </ListItem>
                <ListItem key="Contact" disablePadding onClick={() => {window.location.hash="#/contact"}}>
                <ListItemButton>
                    <ListItemIcon>
                    <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary="Contact" />
                </ListItemButton>
                </ListItem>
                <ListItem key="SNS" disablePadding onClick={() => {window.location.hash="#/sns"}}>
                <ListItemButton>
                    <ListItemIcon>
                    <HubTwoToneIcon />
                    </ListItemIcon>
                    <ListItemText primary="SNS" />
                </ListItemButton>
                </ListItem>
            </List>
        </Drawer>
        </Box>
        </div>
    );
}

export { SidebarView };