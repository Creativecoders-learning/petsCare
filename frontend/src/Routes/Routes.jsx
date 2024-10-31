import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../ErrorPage";
import CustomerPlan from "../Pages/CustomerPlan/CustomerPlan";
import Adoption from "../Pages/Adoption/Adoption";
import Shop from "../Pages/Shop/Shop";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Blogs/Blog";
import AdopDetails from '../Components/Adoption/AdopDetails/AdopDetails';
import Checkout from '../Pages/Checkout/Checkout';
import Vets from "../Pages/Vets/Vets";
import VetsDetails from "../Components/Vets/VetsDetails/VetsDetails";
import BlogDetails from "../Pages/Blogs/BlogDetails";
import AllProducts from "../Pages/Shop/AllProducts/AllProducts";
import ProductDetails from "../Components/Shop/ProductDetails/ProductDetails";
import Registration from "../Pages/Authentication/Registration/Registration";
import Login from "../Pages/Authentication/Login/Login";
import DashboardLayout from "../Layout/DashboardLayout";
import BlogManagement from "../Pages/Dashboard/Admin/BlogManagement";
import PaymentProcess from "../Components/Shop/PaymentProcess/PaymentProcess";
import GetStarted from "../Components/Adoption/Meet-Adoption/GetStarted/GetStarted";
import Profile from "../Pages/Dashboard/Profile/Profile";
import UserManagement from "../Pages/Dashboard/Admin/UserManagement";

const router = createBrowserRouter([
  // this is basic routes
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/adoption", element: <Adoption /> },
      { path: "/adoptionDetails/:id", element: <AdopDetails></AdopDetails> },
      { path: "shop", element: <Shop /> },
      { path: "all-products", element: <AllProducts /> },
      { path: "productDetails/:id", element: <ProductDetails /> },
      { path: "payment-process", element: <PaymentProcess /> },
      { path: "/blogs", element: <Blog /> },
      { path: "blog-details/:id", element: <BlogDetails /> },
      { path: "/customer-plan", element: <CustomerPlan /> },      
      {path:'/get-Started', element:<GetStarted></GetStarted>},
      { path: '/checkout', element: <Checkout /> },
      { path: "/vets", element: <Vets /> },
      {
        path: "/vets-details/:id",
        element: <VetsDetails />,
      },
      { path: "/registration", element: <Registration /> },
      { path: "/login", element: <Login /> },
    ],
  },

  // Dashboard
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        path: 'profile',
        element: <Profile />
      },
      {
        path: 'admin/blog-management',
        element: <BlogManagement />
      },
      {
        path: 'admin/user-management',
        element: <UserManagement />
      },
    ],
  }
]);

export default router;
