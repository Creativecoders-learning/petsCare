import { useForm } from "react-hook-form";
import useAxios from "../../../../Hooks/useAxios";
import Button from "../../../UI/Button";
import PrimaryTitle from "../../../UI/PrimaryTitle";
import Swal from "sweetalert2";

export default function AdminFeedback({ productId }) {
  const apiHandler = useAxios();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // handle admin feedback icon
  const handleAdminFeedback = (data) => {
    console.log(data.adminFeedback);
    apiHandler
      .patch(`/update-shop-products/${productId}`, {
        adminFeedback: data.adminFeedback,
      })
      .then((res) => {
        console.log(res);
        if (res.data.acknowledged) {
          reset();
          Swal.fire({
            title: "Successful",
            text: "Publish status change Successfully",
            icon: "success",
          });
        }
      });
  };
  return (
    <div className="w-[80%]">
      <PrimaryTitle>Write Your feedback</PrimaryTitle>
      <form onSubmit={handleSubmit(handleAdminFeedback)}>
        <div className="mt-5 flex flex-col items-start gap-6">
          <textarea
            {...register("adminFeedback", {
              required: "Feedback is required",
            })}
            placeholder="Write a detailed description for your blog"
            className="w-full p-4 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200"
            rows="5"
          />
          {errors.adminFeedback && (
            <p className="text-red-500 text-sm">
              {errors.adminFeedback.message}
            </p>
          )}
          <Button dynamicType="submit" primary={true}>
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}
