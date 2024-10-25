import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Adoption from "../Pages/Adoption/Adoption";
const router = createBrowserRouter([
    // this is basic routes
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path:'/adoption',
                element:<Adoption></Adoption>
            }
        ]
    }
])

export default router; 