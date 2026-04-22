import { MainView } from "./views/mainView";
import { SidebarView } from "./views/sidebarView";
import { ContactView } from "./views/contactView";
import { SnsView } from "./views/snsView";
import { createHashRouter, RouterProvider, Outlet } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Box, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const Magic8BallView = lazy(async () => {
    const module = await import("./views/magic8BallView");
    return { default: module.Magic8BallView };
});

const theme = createTheme({
    palette: {
        mode: "dark",
        primary: { main: "#58C8BF" },
        secondary: { main: "#F4BC7D" },
        background: { default: "#0B1118", paper: "#141B23" },
        text: { primary: "#E7EDF3", secondary: "#98A6B7" },
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
    shape: { borderRadius: 14 },
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: "none",
                    border: "1px solid rgba(151, 164, 179, 0.18)",
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderColor: "rgba(151, 164, 179, 0.2)",
                },
            },
        },
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
                {
                    path: "magic8ball",
                    element: (
                        <Suspense
                            fallback={(
                                <Box sx={{ py: 6 }}>
                                    <Typography variant="body1" color="text.secondary">
                                        Loading exporter...
                                    </Typography>
                                </Box>
                            )}
                        >
                            <Magic8BallView />
                        </Suspense>
                    ),
                },
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
