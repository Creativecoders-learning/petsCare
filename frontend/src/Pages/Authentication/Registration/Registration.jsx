import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { FaEnvelope, FaLock, FaUser, FaImage } from "react-icons/fa"; // FaUser and FaImage icons
import { Link, useNavigate } from "react-router-dom";
import { AUTHENTICATIONImages } from "../../../Image-data/authentication";
import SocialLogin from "../../../Components/UI/SocialLogin";
import UseAuth from "../../../Hooks/UseAuth";
import toast from 'react-hot-toast'
import axios from 'axios'

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { user, setUser, createUser, updateUser } = UseAuth();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Form submission handler
  const onSubmit = (data) => {
    const { name, email, photoUrl, password } = data || {}

    // create user
    createUser(email, password)
      .then(() => {

        // Update user
        updateUser(name, photoUrl)
          .then(() => {
            console.log('User Created Successfully');
            setUser({ ...user, photoURL: photoUrl })

            // post method to store all registered user
            const userData = {
              name: name,
              email: email,
              image: photoUrl,
            }
  
            axios.post('http://localhost:8000/users', userData);
            
            toast.success('User Created Successfully')
            navigate('/')
          })
          .catch(error => {
            console.log(error?.message);
            toast.error(error?.message)
          })
      })
      .catch(error => {
        console.log(error?.message);
        toast.error(error?.message)
      })

  };

  return (
    <div className="flex flex-col md:flex-row gap-6 lg:gap-0 justify-between max-w-3xl mx-auto my-10 border shadow-2xl rounded-xl font-inter bg-[#F9F9F9] overflow-hidden">
      {/* Left side - Login */}
      <div className="w-full md:w-1/2 pt-8 relative flex flex-col items-center ">
        <Link className="flex-1" to="/">
          <h2 className="text-4xl font-acme font-bold text-center text-primary">
            PetsCare
          </h2>
        </Link>

        <div className="relative w-full flex justify-center items-center">
          <img
            className="w-[200px] z-20"
            src={AUTHENTICATIONImages.registration}
            alt=""
          />
          <div className="absolute right-0">
            <img src={AUTHENTICATIONImages.vector2} alt="" />
          </div>
          <div className="absolute bottom-5 z-0">
            <img
              className="h-[120px]"
              src={AUTHENTICATIONImages.haddi}
              alt=""
            />
          </div>
        </div>
        <div className="flex-1"></div>
        <img
          className="absolute top-0 left-0"
          src={AUTHENTICATIONImages.vector}
          alt=""
        />
        <img
          className="absolute -bottom-[120px] left-1/2 right-1/2 -translate-y-1/2 -translate-x-1/2 w-[70%] object-cover"
          src={AUTHENTICATIONImages.ellipse}
          alt=""
        />
      </div>

      {/* Right side login */}
      <div className="w-full md:w-1/2 p-10">
        <h1 className="text-center mb-5 text-xl font-bold text-[#0A453A]">
          Create Your Account
        </h1>

        <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-3">
            {/* Name input */}
            <div className="relative">
              <span className="absolute inset-y-0  left-3 flex items-center text-[#404040]">
                <FaUser className="text-lg" />
              </span>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                className="w-full pl-10 pr-4 py-3 border border-[#CBCBCB] placeholder:text-[#404040] placeholder:text-sm placeholder:font-medium outline-none rounded-xl focus:ring-2 focus:ring-[#CBCBCB] focus:border-[#CBCBCB]"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

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

            {/* Photo URL input */}
            <div className=" relative">
              <span className="absolute inset-y-0 left-3 flex items-center text-[#404040]">
                <FaImage className="text-lg" />
              </span>
              <input
                type="text"
                name="photoUrl"
                id="photoUrl"
                placeholder="Photo URL"
                className="w-full pl-10 pr-4 py-3 border border-[#CBCBCB] placeholder:text-[#404040] placeholder:text-sm placeholder:font-medium outline-none rounded-xl focus:ring-2 focus:ring-[#CBCBCB] focus:border-[#CBCBCB]"
                {...register("photoUrl")}
              />
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

            <div className="">
              <label className="flex mt-6 items-center space-x-2">
                <input
                  type="checkbox"
                  id="termsCondition"
                  {...register("termsCondition")}
                  className="form-checkbox text-[#675BC8]"
                />
                <span className="text-[#606060] cursor-pointer text-sm">
                  I agree to all{" "}
                  <span className="text-[#5D4FC4] cursor-pointer hover:underline">
                    Terms & Conditions
                  </span>{" "}
                </span>
              </label>
            </div>
          </div>

          <div className="flex justify-center">
            <input
              className="inline-flex items-center justify-center rounded px-8 py-3 text-[15px] font-medium tracking-wide text-white shadow-md transition duration-300 bg-primary hover:bg-hover hover:shadow-sm cursor-pointer "
              type="submit"
              value="Create Account"
            />
          </div>
        </form>

        {/* Google login */}
        <div>
          <div className="flex items-center my-4">
            <hr className="w-full text-[#2D2D2D] dark:text-gray-600" />
            <p className="px-3 text-sm dark:text-gray-600 text-[#000000] font-medium">
              OR
            </p>
            <hr className="w-full text-[#2D2D2D] dark:text-gray-600" />
          </div>
          <SocialLogin />
        </div>

        <div className="flex justify-center">
          <p className="text-sm text-[#404040] font-light dark:text-gray-600">
            Already have an account?
            <Link
              to="/login"
              rel="noopener noreferrer"
              className="focus:underline hover:underline text-[#5D4FC4]"
            >
              {" "}
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
