import { MainView } from "./views/mainView";
import { SidebarView } from "./views/sidebarView";
import { ContactView } from "./views/contactView";
import { SnsView } from "./views/snsView";
import { Magic8BallView } from "./views/magic8BallView";
import { createHashRouter, RouterProvider, Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
    palette: {
        mode: "light",
        primary: { main: "#2C6E6B" },
        secondary: { main: "#F2A65A" },
        background: { default: "#F8F4EF", paper: "#FFFDF9" },
        text: { primary: "#1F1C1A", secondary: "#5B544E" },
    },
    typography: {
        fontFamily: '"Manrope", "Noto Sans JP", sans-serif',
        h1: { fontFamily: '"Fraunces", "Noto Serif JP", serif', fontWeight: 600 },
        h2: { fontFamily: '"Fraunces", "Noto Serif JP", serif', fontWeight: 600 },
        h3: { fontFamily: '"Fraunces", "Noto Serif JP", serif', fontWeight: 600 },
        h4: {
            fontFamily: '"Fraunces", "Noto Serif JP", serif',
            fontWeight: 600,
            letterSpacing: "0.02em",
        },
    },
    shape: { borderRadius: 16 },
    components: {
        MuiPaper: { styleOverrides: { root: { backgroundImage: "none" } } },
        MuiButton: { styleOverrides: { root: { textTransform: "none" } } },
    },
});

const AppLayout = function appLayout() {
    return (
        <SidebarView>
            <Outlet />
        </SidebarView>
    );
};

function makeRouter() {
    return createHashRouter([
        {
            path: "/",
            element: <AppLayout />,
            children: [
                { index: true, element: <MainView /> },
                { path: "contact", element: <ContactView /> },
                { path: "sns", element: <SnsView /> },
                { path: "magic8ball", element: <Magic8BallView /> },
            ],
        },
    ]);
}

const ReactRoot = function reactroot() {
    const router = makeRouter();
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box
                sx={{
                    minHeight: "100vh",
                    backgroundColor: "var(--background-color)",
                    animation: "fadeIn 0.6s ease-out",
                }}
            >
                <RouterProvider router={router} />
            </Box>
        </ThemeProvider>
    );
};

export { ReactRoot };
