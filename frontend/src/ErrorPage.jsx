import { useNavigate, useRouteError } from 'react-router-dom';
import Button from './Components/UI/Button';

const ErrorPage = () => {
  const navigate = useNavigate();
  const error = useRouteError();
  console.error(error);
  return (
    <>
      <div
        className="boxShadow px-10 w-full flex items-center flex-col justify-center py-20 rounded-xl"
        id="error-page"
      >
        <img
          src="https://plus.unsplash.com/premium_photo-1682310096066-20c267e20605?q=80&w=2112&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="illustration"
          className="w-full lg:w-[400px]"
        />
        <p className="text-[#73718A] text-[0.9rem] sm:text-[1.2rem] w-full lg:w-[55%] text-center mt-10 lg:mt-4">
          The page cannot be found. The requested URL was not found on this
          server.
        </p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>

        <Button onClick={() => navigate('/')} primary>
          Back to home
        </Button>
      </div>
    </>
  );
};
export default ErrorPage;
