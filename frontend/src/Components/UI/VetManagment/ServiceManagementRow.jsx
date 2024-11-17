import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { RiFeedbackFill } from "react-icons/ri";
import Swal from "sweetalert2";
import useAxios from "../../../Hooks/useAxios";
const ServiceManagementRow = ({ items, index, refresh,handleAdminReviewBtn,handleFeedbackBtn }) => {
  const { vetName, vetEmail, serviceType, status, image, _id } = items || {};
  const apiHandler = useAxios();
  const { register } = useForm();
  
  // publish status changed on database
  const handlePublishStatus = ({ publishStatus, productId }) => {
    console.log(publishStatus);
    apiHandler
      .patch(`/update-vets-service/${productId}`, {
        updatedData: publishStatus,
      })
      .then((res) => {
        // console.log(res);
        if (res.data.acknowledged) {
          refresh();
          Swal.fire({
            title: "Successful",
            text: "Publish status change Successfully",
            icon: "success",
          });
        }
      });
    console.log(publishStatus, productId);
  };

  return (
    <tr
      key={items?._id}
      className={`${
        index % 2 === 0 ? "bg-primaryLight bg-opacity-10" : "bg-white"
      }`}
    >
      <td className="p-4 font-medium">{index + 1}</td>
      <td className="p-4 font-medium">
        <img
          src={image}
          className="w-12 h-12 object-cover rounded-md shadow-md"
        />
      </td>
      <td className="p-4 font-medium">{vetName}</td>
      <td className="p-4">{vetEmail}</td>
      <td className="p-4">{serviceType}</td>
      <td className="p-4">
        {status === "Approved" && (
          <span className="p-3 text-xs rounded-full bg-[#62C474] text-white">
            Approved
          </span>
        )}
        {status === "Reject" && (
          <span className="p-3 text-xs rounded-full bg-[#FE3839] text-white">
            Rejected
          </span>
        )}
        {status === "Pending" && (
          <span className="p-3 text-xs rounded-full bg-[#FF7801] text-white">
            Pending
          </span>
        )}
      </td>

      <td className="p-4">
        <div className="flex justify-center items-center gap-3">
          <form>
            <select
              name="publishStatus"
              {...register("publishStatus", { required: true })}
              className="w-full p-2 border-2 border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200 text-sm"
              onChange={(e) => {
                const selectedValue = e.target.value;
                const productId = _id; // Replace with your actual product ID logic
                handlePublishStatus({
                  publishStatus: selectedValue,
                  productId,
                });
              }}
            >
              <option value="" disabled selected>
                Change Status
              </option>
              {["Approved", "Reject"].map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </form>
          <button
            onClick={() => handleAdminReviewBtn(items)}
            className="p-2 text-white bg-red-500 rounded-full hover:bg-red-600 transition duration-150"
          >
            <FaEye />
          </button>
          <button
            onClick={()=>handleFeedbackBtn(_id)}
            className="p-2 text-white bg-red-500 rounded-full hover:bg-red-600 transition duration-150"
          >
            <RiFeedbackFill />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ServiceManagementRow;
