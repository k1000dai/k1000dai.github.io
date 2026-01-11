import "/src/style.css";
import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import HomeIcon from "@mui/icons-material/Home";
import MailIcon from "@mui/icons-material/Mail";
import HubTwoToneIcon from "@mui/icons-material/HubTwoTone";
import CasinoIcon from "@mui/icons-material/Casino";
import { NavLink } from "react-router-dom";

const drawerWidth = 280;

const navItems = [
    { label: "About", to: "/", icon: <HomeIcon /> },
    { label: "Contact", to: "/contact", icon: <MailIcon /> },
    { label: "SNS", to: "/sns", icon: <HubTwoToneIcon /> },
    { label: "Magic 8 Ball", to: "/magic8ball", icon: <CasinoIcon /> },
];

const SidebarView = function sidebarview({ children }) {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prev) => !prev);
    };

    const drawerContent = (
        <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
            <Toolbar sx={{ justifyContent: "space-between", px: 2 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    Navigation
                </Typography>
                {!isDesktop && (
                    <IconButton onClick={handleDrawerToggle} aria-label="close navigation">
                        <ChevronLeftIcon />
                    </IconButton>
                )}
            </Toolbar>
            <Divider />
            <Box sx={{ px: 3, py: 3, textAlign: "center" }}>
                <Box
                    component="img"
                    src="face.jpeg"
                    alt="Kohei Sendai"
                    loading="lazy"
                    sx={{
                        width: 160,
                        height: 160,
                        borderRadius: "50%",
                        objectFit: "cover",
                        margin: "0 auto 16px",
                        boxShadow: "var(--shadow-soft)",
                    }}
                />
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    Kohei Sendai
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Systems Innovation · Robotics
                </Typography>
            </Box>
            <Divider />
            <List sx={{ px: 1, py: 1 }}>
                {navItems.map((item) => (
                    <ListItem key={item.label} disablePadding sx={{ mb: 0.5 }}>
                        <ListItemButton
                            component={NavLink}
                            to={item.to}
                            end={item.to === "/"}
                            sx={{
                                borderRadius: 2,
                                "&.active": {
                                    backgroundColor: "rgba(44, 110, 107, 0.14)",
                                    color: "primary.main",
                                    "& .MuiListItemIcon-root": {
                                        color: "primary.main",
                                    },
                                },
                            }}
                            onClick={() => {
                                if (!isDesktop) {
                                    setMobileOpen(false);
                                }
                            }}
                        >
                            <ListItemIcon sx={{ minWidth: 40 }}>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Box sx={{ mt: "auto", px: 3, pb: 3 }}>
                <Typography variant="caption" color="text.secondary">
                    Updated 2025.12.15
                </Typography>
            </Box>
        </Box>
    );

    return (
        <Box sx={{ display: "flex", minHeight: "100vh" }}>
            <AppBar
                position="fixed"
                color="transparent"
                elevation={0}
                sx={{
                    width: { md: `calc(100% - ${drawerWidth}px)` },
                    ml: { md: `${drawerWidth}px` },
                    borderBottom: "1px solid rgba(31, 28, 26, 0.08)",
                    backgroundColor: "rgba(255, 253, 249, 0.9)",
                    backdropFilter: "blur(14px)",
                }}
            >
                <Toolbar
                    sx={{
                        minHeight: { xs: 64, md: 72 },
                        gap: 2,
                        px: { xs: 2, md: 3 },
                    }}
                >
                    <IconButton
                        color="inherit"
                        edge="start"
                        aria-label="open navigation"
                        onClick={handleDrawerToggle}
                        sx={{ display: { md: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: { xs: "column", sm: "row" },
                            gap: { xs: 0.5, sm: 2 },
                            alignItems: { xs: "flex-start", sm: "center" },
                        }}
                    >
                        <Typography
                            variant="h5"
                            className="topname"
                            sx={{ fontWeight: 700 }}
                        >
                            Kohei Sendai / 千代 航平
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                            Portfolio
                        </Typography>
                    </Box>
                </Toolbar>
            </AppBar>

            <Drawer
                variant={isDesktop ? "permanent" : "temporary"}
                open={isDesktop || mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: drawerWidth,
                        borderRight: "1px solid rgba(31, 28, 26, 0.08)",
                        backgroundColor: "rgba(255, 253, 249, 0.95)",
                        backdropFilter: "blur(12px)",
                    },
                }}
            >
                {drawerContent}
            </Drawer>

            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    width: { md: `calc(100% - ${drawerWidth}px)` },
                    px: { xs: 2, sm: 3, md: 5 },
                    pb: { xs: 4, md: 6 },
                    pt: { xs: 10, md: 12 },
                }}
            >
                <Box sx={{ animation: "riseIn 0.6s ease-out" }}>{children}</Box>
            </Box>
        </Box>
    );
};

export { SidebarView };
