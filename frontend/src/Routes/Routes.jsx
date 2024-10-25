import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Components/Shared/MainLayout/Layout';
import ErrorPage from '../ErrorPage';
import Home from '../pages/Home/Home';
const router = createBrowserRouter([
  // this is basic routes
  {
    path: '/',
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
    ],
  },
]);

export default router;
