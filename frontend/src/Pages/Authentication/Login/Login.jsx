import { useState } from "react";
import { useForm } from "react-hook-form";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import SocialLogin from "../../../Components/UI/SocialLogin";
import { AUTHENTICATIONImages } from "../../../Image-data/authentication";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import UseAuth from "../../../Hooks/UseAuth";
import toast from "react-hot-toast";

const Login = () => {
      const [showPassword, setShowPassword] = useState(false);
      const { logIn } = UseAuth();

      const location = useLocation();
      const navigate = useNavigate();

      const {
            register,
            handleSubmit,
            formState: { errors },
      } = useForm();


      // Form submission handler
      const onSubmit = (data) => {
            const { email, password } = data || {};

            // Log in user
            logIn(email, password)
                  .then(() => {
                        toast.success('Successfully logged in!!')
                        navigate(location?.state ? location?.state : '/login')
                  })
                  .catch(error => {
                        toast.error(error?.message)
                  })

      };

      return (
            <div className="flex flex-col md:flex-row-reverse gap-6 lg:gap-0 justify-between max-w-3xl mx-auto my-10 border shadow-2xl rounded-xl font-inter bg-[#F9F9F9] overflow-hidden">
                  {/* Left side - Login */}
                  <div className="w-full md:w-1/2 pt-8 relative">

                        <Link to="/">
                              <h2 className="text-4xl font-acme font-bold text-center text-primary">PetsCare</h2>
                        </Link>

                        <img className="w-full" src={AUTHENTICATIONImages.login} alt="" />
                        <img className=" absolute top-0 left-0" src={AUTHENTICATIONImages.vector} alt="" />
                        <img className="absolute -bottom-[120px] left-1/2 right-1/2 -translate-y-1/2 -translate-x-1/2 w-[70%] object-cover" src={AUTHENTICATIONImages.ellipse} alt="" />
                  </div>

                  {/* Right side login */}
                  <div className="w-full md:w-1/2 p-10">
                        <h1 className="text-center mb-5 text-xl font-bold text-[#0A453A]">
                              Welcome Back <span className="text-primary">Bayezid</span>
                        </h1>

                        <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
                              <div className="space-y-4">
                                    {/* Email input */}
                                    <div className=" relative">
                                          <span className="absolute inset-y-0 left-3 flex items-center text-[#404040]">
                                                <FaEnvelope className="text-lg" />
                                          </span>
                                          <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                placeholder="Your Email"
                                                className="w-full pl-10 pr-4 py-3 border border-[#CBCBCB] placeholder:text-[#404040] placeholder:text-sm placeholder:font-medium outline-none rounded-xl focus:ring-2 focus:ring-[#CBCBCB] focus:border-[#CBCBCB]"
                                                {...register("email", { required: true })}
                                          />
                                          {errors.email && (
                                                <span className="text-red-600">This field is required</span>
                                          )}
                                    </div>

                                    {/* Password input */}
                                    <div className=" relative">
                                          <span className="absolute inset-y-0 left-3 flex items-center text-[#404040]">
                                                <FaLock className="text-lg" />
                                          </span>
                                          <input
                                                type={`${showPassword ? "text" : "password"}`}
                                                name="password"
                                                id="password"
                                                placeholder="Password"
                                                className="w-full pl-10 pr-4 py-3 border border-[#CBCBCB] placeholder:text-[#404040] placeholder:text-sm placeholder:font-medium outline-none rounded-xl focus:ring-2 focus:ring-[#CBCBCB] focus:border-[#CBCBCB]"
                                                {...register("password", { required: true })}
                                          />
                                          <span
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-[#404040]"
                                          >
                                                {showPassword ? (
                                                      <BsEyeFill className="text-xl" />
                                                ) : (
                                                      <BsEyeSlashFill className="text-xl" />
                                                )}
                                          </span>
                                          {errors.password && (
                                                <span className="text-red-600">This field is required</span>
                                          )}
                                    </div>

                                    {/* Forgot Password in one row */}
                                    <div className="flex justify-end">
                                          <a href="#" className="text-[#675BC8] hover:underline">
                                                Forgot Password?
                                          </a>
                                    </div>


                                    <div className="">
                                          <label className="flex items-center space-x-2">
                                                <input
                                                      type="checkbox"
                                                      id="rememberMe"
                                                      {...register("rememberMe")}
                                                      className="form-checkbox text-[#675BC8]"
                                                />
                                                <span className="text-[#606060] text-sm">Keep me logged in </span>
                                          </label>
                                    </div>
                              </div>

                              <div className="flex justify-center">
                                    <input
                                          className="inline-flex items-center justify-center gap-2 rounded px-8 py-3 text-[15px] font-medium tracking-wide text-white shadow-md transition duration-300 bg-primary hover:bg-hover hover:shadow-sm cursor-pointer w-[160px]"
                                          type="submit"
                                          value="Login"
                                    />
                              </div>
                        </form>

                        {/* google login */}
                        <div>
                              <div className="flex items-center my-4">
                                    <hr className="w-full text-[#2D2D2D] dark:text-gray-600" />
                                    <p className="px-3 text-sm dark:text-gray-600 text-[#000000] font-medium">OR</p>
                                    <hr className="w-full text-[#2D2D2D] dark:text-gray-600" />
                              </div>
                              <SocialLogin />
                        </div>

                        <div className="flex justify-center">
                              <p className="text-sm text-[#404040] font-light  dark:text-gray-600">Don't have any account?
                                    <Link to='/registration' rel="noopener noreferrer" className="focus:underline hover:underline text-[#5D4FC4]"> Create account</Link>
                              </p>
                        </div>
                  </div>
            </div>
      );
};

export default Login;