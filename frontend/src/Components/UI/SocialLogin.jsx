import { FcGoogle } from "react-icons/fc";
import UseAuth from "../../Hooks/UseAuth";
import { FaGithub } from "react-icons/fa6";
import toast from "react-hot-toast";


const SocialLogin = () => {

      const { googleLogIn, githubLogIn } = UseAuth();

      const handleSocialLogin = (media) => {
            media()
                  .then(() => {
                        toast.success('Successfully logged in!!')
                  })
                  .catch(error => {
                        toast.error(error?.message)
                  })
      }

      return (
            <div>
                  <div className="mb-6 flex justify-center gap-8">
                        <button onClick={() => handleSocialLogin(googleLogIn)} aria-label="Login with Google" type="button" className="">
                              <FcGoogle className="text-3xl text-white" />
                        </button>

                        <button onClick={() => handleSocialLogin(githubLogIn)} aria-label="Login with GitHub" role="button" className="">
                              <FaGithub className="text-[28px]" />

                        </button>

                  </div>
            </div>
      );
};

export default SocialLogin;