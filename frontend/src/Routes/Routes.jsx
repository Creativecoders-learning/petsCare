import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ErrorPage from '../ErrorPage';
import CustomerPlan from '../Pages/CustomerPlan/CustomerPlan';
import Adoption from '../Pages/Adoption/Adoption';
import Shop from "../Pages/Shop/Shop";
import Home from '../Pages/Home/Home';
import Blog from "../Pages/Blogs/Blog";
import BlogDetails from "../Components/Blogs/BlogDetails";
import AdopDetails from '../Components/Adoption/AdopDetails/AdopDetails';
import Checkout from '../Pages/Checkout/Checkout';

const router = createBrowserRouter([
  // this is basic routes
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/adoption', element: <Adoption /> },
      { path: '/adoptionDetails/:id', element: <AdopDetails></AdopDetails>},
      { path: '/shop', element: <Shop /> },
      {path: '/blogs', element: <Blog />},
      {path: '/blog-details/:id', element: <BlogDetails />},
      { path: '/customer-plan', element: <CustomerPlan /> },
      { path: '/checkout', element: <Checkout /> },
    ],
  },
]);

export default router;
