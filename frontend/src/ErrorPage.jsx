import { Link } from "react-router-dom";
import Button from "./Components/UI/Button";
import { ERRORPAGEImages } from "./Image-data/errorPage";

const ErrorPage = () => {
  return (
    <div className=" flex flex-col items-center justify-center text-center px-6">
      <div className="w-96 h-96">
        <img
          src={ERRORPAGEImages?.errorImage}
          alt="404 Error"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Error Message */}
      <h1 className="text-3xl sm:text-5xl font-semibold text-primary mb-4">Oops! Page Not Found</h1>
      <p className="text-lg sm:text-xl text-gray-600 mb-6">
        It seems the page you’re looking for doesn’t exist or has been moved.
      </p>

      {/* Navigation Options */}
      <div className="">
        <Link to="/">
          <Button primary>Go home</Button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
