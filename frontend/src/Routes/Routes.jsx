import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ErrorPage from '../ErrorPage';
import CustomerPlan from '../Pages/CustomerPlan/CustomerPlan';
const router = createBrowserRouter([
  // this is basic routes
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/customer-plan', element: <CustomerPlan /> },
    ],
  },
]);

export default router;
