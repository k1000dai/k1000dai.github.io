import {MainView} from "./views/mainView";
import {SidebarView} from "./views/sidebarView";
import {ContactView} from "./views/contactView";
import {SnsView} from "./views/snsView";
import {Magic8BallView} from "./views/magic8BallView";
import {createHashRouter, RouterProvider} from 'react-router-dom';

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
        <div>
            <div className="root-container">
                <SidebarView />
                <RouterProvider router={router} />
            </div>
        </div>

    );
}

export {ReactRoot};
