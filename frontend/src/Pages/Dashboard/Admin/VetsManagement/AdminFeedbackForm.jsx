import { useForm } from "react-hook-form";
import PrimaryTitle from "../../../../Components/UI/PrimaryTitle";
import useAxios from "../../../../Hooks/useAxios";
import Swal from "sweetalert2";

const AdminFeedbackForm = ({serviceId}) => {
    console.log(serviceId)
    const apiHandler = useAxios();
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm();

  // handle admin feedback icon
  const handleAdminFeedback = (data) => {
    console.log(data);
    apiHandler
      .patch(`/update-vets-service/${serviceId}`, {
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
          <div className="mt-8">
          <button
            type="submit"
            className="w-full px-4 py-3 bg-primary hover:bg-black text-white font-semibold rounded-lg focus:outline-none transition duration-300"
          >
            Send
          </button>
        </div>
        </div>
      </form>

    </div>
  );
};

export default AdminFeedbackForm;
