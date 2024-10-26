import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Adoption from "../Pages/Adoption/Adoption";
import AdopDetails from "../Components/Adoption/AdopDetails/AdopDetails";
const router = createBrowserRouter([
    // this is basic routes
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path:'/adoption',
                element:<Adoption></Adoption>
            },
            {
                path:'/adoptionDetails/:id',
                element:<AdopDetails></AdopDetails>
            },
        ]
    }
])

export default router; 