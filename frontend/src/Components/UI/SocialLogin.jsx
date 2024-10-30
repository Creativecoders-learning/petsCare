import { FcGoogle } from "react-icons/fc";
import { MdOutlineFacebook } from "react-icons/md";



const SocialLogin = () => {

      return (
            <div>
                  <div className="mb-6 flex justify-center gap-8">
                        <button aria-label="Login with Google" type="button" className="">
                              <FcGoogle className="text-3xl text-white" />
                        </button>

                        <button aria-label="Login with GitHub" role="button" className="">
                              <MdOutlineFacebook className="text-3xl text-[#1877F2]" />

                        </button>
                        {/* <button aria-label="Login with Google" type="button" className=" flex items-center justify-center w-full py-2 space-x-4 border bg-[#00095E] focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
                              <FaGoogle className="text-3xl text-white" />

                        </button>

                        <button aria-label="Login with GitHub" role="button" className="flex items-center justify-center w-full py-2 space-x-4 border focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600 bg-[#00095E]">
                              <FaGithub className="text-3xl text-white" />

                        </button> */}

                  </div>
            </div>
      );
};

export default SocialLogin;