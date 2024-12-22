import { MainView } from "./views/mainView";
import { SidebarView } from "./views/sidebarView";
import { ContactView } from "./views/contactView";
import {createHashRouter, RouterProvider} from 'react-router-dom';

function makeRouter(models) {
  return createHashRouter([
      {
          path: "/",
          element: <MainView />
      },
      {
        path: "/contact",
        element: <ContactView />
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
                <RouterProvider router={router}/>
            </div>
        </div>
        
    );
    }

export { ReactRoot };