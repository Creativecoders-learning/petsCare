import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import useAxios from "../../Hooks/useAxios";

const SocialLogin = () => {
      const { googleLogIn, githubLogIn, setUser } = UseAuth();
      const apiHandler = useAxios();
      const navigate = useNavigate();

      const handleSocialLogin = (loginMethod) => {
            loginMethod()
                  .then((result) => {
                        const loggedInUser = result.user;
                        setUser(loggedInUser);

                        // Prepare user data to be sent to the backend
                        const userData = {
                              name: loggedInUser.displayName,
                              email: loggedInUser.email,
                              image: loggedInUser.photoURL,
                        };
                        console.log('User Data:', userData);
                        // navigate('/')

                        // Send user data to the backend
                        apiHandler.post('/users', userData)
                              .then(() => {
                                    toast.success('Successfully logged in!');
                                    navigate('/role-change');
                              })
                              .catch(error => {
                                    toast.error('Failed to save user data');
                                    console.error(error.message);
                              });
                  })
                  .catch(error => {
                        toast.error(error?.message);
                  });
      };

      return (
            <div>
                  <div className="mb-6 flex justify-center gap-8">
                        <button onClick={() => handleSocialLogin(googleLogIn)} aria-label="Login with Google" type="button">
                              <FcGoogle className="text-3xl" />
                        </button>
                        <button onClick={() => handleSocialLogin(githubLogIn)} aria-label="Login with GitHub" role="button">
                              <FaGithub className="text-[28px]" />
                        </button>
                  </div>
            </div>
      );
};

export default SocialLogin;
