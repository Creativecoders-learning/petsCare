import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import useAxios from "../../Hooks/useAxios";
import useUsers from "../../Hooks/api/useUsers";

const SocialLogin = () => {
      const { googleLogIn, githubLogIn, setUser } = UseAuth();
      const apiHandler = useAxios();
      const navigate = useNavigate();
      const { users } = useUsers();

      const handleSocialLogin = async (loginMethod) => {
            try {
                  const result = await loginMethod()

                  const matchedUser = users?.find(user => user?.email === result?.email);

                  if (!matchedUser) {
                        setUser(result);

                        const userData = {
                              name: result?.displayName,
                              email: result?.email,
                              image: result?.photoURL,
                        };

                        // Send user data to the backend
                        await apiHandler.post('/users', userData);
                        toast.success('Successfully logged in!');

                        navigate('/role-change');
                  }

                  navigate('/');

            } catch (error) {
                  toast.error(error?.message || 'Failed to save user data');
                  console.error('Error during login:', error.message);
            }
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
