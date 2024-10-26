import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Blog from "../Pages/Blogs/Blog";
import BlogDetails from "../Components/Blogs/BlogDetails";
const router = createBrowserRouter([
    // this is basic routes
    {
        path: "/",
        element: <App/>,
        children:[
            {
                path: '/blogs',
                element: <Blog />
            },{
                path: '/blog-details/:id',
                element: <BlogDetails />
            }
        ]
    }
])

export default router;