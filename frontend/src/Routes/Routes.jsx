import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ErrorPage from '../ErrorPage';
import Adoption from '../Pages/Adoption/Adoption'
const router = createBrowserRouter([
  // this is basic routes
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
    { path:'/adoption', 
      element: <Adoption/>
    }
],
  },
]);

export default router;
