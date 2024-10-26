import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../ErrorPage";
import Adoption from "../Pages/Adoption/Adoption";
import Shop from "../Pages/Shop/Shop";
import Home from '../Pages/Home/Home';

const router = createBrowserRouter([
  // this is basic routes
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/adoption', element: <Adoption /> },
      { path: '/shop', element: <Shop /> },
    ],
  },
]);

export default router;
