import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

export default function Inputs({ type, name, placeholder }) {
  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <div className="relative">
      <span className="absolute inset-y-0  left-3 flex items-center text-[#404040]">
        {/* <FaUser className="text-lg" /> */}
      </span>
      <input
        type={type}
        name={name}
        id="name"
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-3 border border-[#CBCBCB] placeholder:text-[#404040] placeholder:text-sm placeholder:font-medium outline-none rounded-xl focus:ring-2 focus:ring-[#CBCBCB] focus:border-[#CBCBCB]"
        {...register("name", { required: true })}
      />
      {errors.name && (
        <span className="text-red-600">This field is required</span>
      )}
    </div>
  );
}

Inputs.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
