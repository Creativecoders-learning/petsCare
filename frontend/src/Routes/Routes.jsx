import {createBrowserRouter} from "react-router-dom";
import App from "../App";
const router = createBrowserRouter([
    // this is basic routes
    {
        path: "/",
        element: <App/>,
        children: [
            
        ]
    }
])

export default router; 