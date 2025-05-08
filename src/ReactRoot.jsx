import {MainView} from "./views/mainView";
import {SidebarView} from "./views/sidebarView";
import {ContactView} from "./views/contactView";
import {SnsView} from "./views/snsView";
import {Magic8BallView} from "./views/magic8BallView";
import {createHashRouter, RouterProvider} from 'react-router-dom';
import { Box } from '@mui/material';

function makeRouter() {
    return createHashRouter([
        {
            path: "/",
            element: <MainView />
        },
        {
            path: "/contact",
            element: <ContactView />
        },
        {
            path: "/sns",
            element: <SnsView />
        },
        {
            path: "/magic8ball",
            element: <Magic8BallView />
        }
    ]);
}
/*header*/

const ReactRoot = function reactroot() {
    const router = makeRouter();
    return (
        <Box sx={{
            minHeight: '100vh',
            backgroundColor: 'var(--background-color)',
            animation: 'fadeIn 0.5s ease-in'
        }}>
            <Box className="root-container" sx={{
                position: 'relative',
                '& > *': {
                    animation: 'slideIn 0.5s ease-out'
                }
            }}>
                <SidebarView />
                <RouterProvider router={router} />
            </Box>
        </Box>
    );
}

export {ReactRoot};
