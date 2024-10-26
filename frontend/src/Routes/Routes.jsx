import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ErrorPage from '../ErrorPage';
import Adoption from '../Pages/Adoption/Adoption';
import Home from '../Pages/Home/Home';
import Blog from "../Pages/Blogs/Blog";
import BlogDetails from "../Components/Blogs/BlogDetails";

const router = createBrowserRouter([
  // this is basic routes
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/adoption', element: <Adoption /> },
      {path: '/blogs', element: <Blog />},
      {path: '/blog-details/:id', element: <BlogDetails />}
    ],
  },
]);

export default router;
