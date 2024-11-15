import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../ErrorPage";
import CustomerPlan from "../Pages/CustomerPlan/CustomerPlan";
import Adoption from "../Pages/Adoption/Adoption";
import Shop from "../Pages/Shop/Shop";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Blogs/Blog";
import AdopDetails from "../Components/Adoption/AdopDetails/AdopDetails";
import Checkout from "../Pages/Checkout/Checkout";
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
import ShopManagement from "../Pages/Dashboard/Admin/ShopManagement/ShopManagement";
import MyProducts from "../Pages/Dashboard/Seller/MyProducts/MyProducts";
import UserManagement from "../Pages/Dashboard/Admin/UserManagement";
import MyServices from "../Pages/Dashboard/Vet/MyServices";
import Patients from "../Pages/Dashboard/Vet/Patients";
import VetManagement from "../Pages/Dashboard/Admin/VetManagement";
import Appointments from "../Pages/Dashboard/Vet/Appoinments";
import AdoptionHistory from "../Pages/Dashboard/Admin/AdoptionHistory";
import RoleChange from "../Pages/RoleChange/RoleChange";
import MyBlogs from "../Pages/Dashboard/Vet/MyBlogs";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import MyAdoption from "../Pages/Dashboard/Seller/MyAdoption/MyAdoption";
import Adoptions from "../Pages/Dashboard/Seller/Adoptions";
import UserChatAdoption from "../Pages/Dashboard/Seller/userAdoption/UserChatAdoption";

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
      { path: "/get-Started", element: <GetStarted></GetStarted> },
      { path: "/checkout", element: <Checkout /> },
      { path: "/vets", element: <Vets /> },
      { path: "/vets-details/:id", element: <VetsDetails /> },
      { path: "/registration", element: <Registration /> },
      { path: "/role-change", element: <RoleChange /> },
      { path: "/login", element: <Login /> },
    ],
  },

  // Dashboard
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: 'my-blogs',
        element: <MyBlogs />
      },

      // Seller routes
      {
        path: 'seller/my-adoptions',
        element: <MyAdoption></MyAdoption>
      },
      {
        path: 'seller/user-adoptions',
        element: <UserChatAdoption/>
      },
      {
        path: "seller/my-products",
        element: <MyProducts />,
      },
      {
        path: "seller/adoptions",
        element: <Adoptions />,
      },

      // admin routes
      {
        path: "admin/blog-management",
        element: <BlogManagement />,
      },
      {
        path: "admin/shop-management",
        element: <ShopManagement />,
      },
      {
        path: "admin/user-management",
        element: <UserManagement />,
      },
      {
        path: 'admin/vet-management',
        element: <VetManagement />
      },
      {
        path: 'admin/adoption-history',
        element: <AdoptionHistory />
      },

      // vet routes
      {
        path: 'vet/appointments',
        element: <Appointments />
      },
      {
        path: 'vet/my-services',
        element: <MyServices />
      },
      {
        path: 'vet/patients',
        element: <Patients />
      },
    ],
  },
]);

export default router;
