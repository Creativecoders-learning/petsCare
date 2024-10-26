import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ErrorPage from '../ErrorPage';
import Home from '../Pages/Home/Home';
const router = createBrowserRouter([
  // this is basic routes
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [{ path: '/', element: <Home /> }],
  },
]);

export default router;
