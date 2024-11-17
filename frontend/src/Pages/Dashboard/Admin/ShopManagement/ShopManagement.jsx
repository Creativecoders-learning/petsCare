import { FaEye } from "react-icons/fa";
import PrimaryTitle from "../../../../Components/UI/PrimaryTitle";
import usePetsProducts from "../../../../Hooks/api/usePetsProducts";
import { RiFeedbackFill } from "react-icons/ri";
import { useState } from "react";
import Modal from "../../../../Components/UI/Modal";
import AdminFeedback from "../../../../Components/Dashboard/Admin/ShopManagement/AdminFeedback";
import ReviewProductDetails from "../../../../Components/Dashboard/Admin/ShopManagement/ReviewProductDetails";
import { useForm } from "react-hook-form";
import useAxios from "../../../../Hooks/useAxios";
import Swal from "sweetalert2";

export default function ShopManagement() {
  const { petsProducts, refresh } = usePetsProducts();
  const [openModal, setOpenModal] = useState(false);
  const [actionType, setActionType] = useState("");
  const [reviewItem, setReviewItem] = useState({});
  
  const { register } = useForm();
  const apiHandler = useAxios();

  // handle feedback btn
  const handleFeedbackBtn = () => {
    setOpenModal(true);
    setActionType("feedback");
  };
  // handle admin review btn
  const handleAdminReviewBtn = (item) => {
    setOpenModal(true);
    setReviewItem(item);
    setActionType("reviewProductDetails");
  };

  // publish status changed on database
  const handlePublishStatus = ({ publishStatus, productId }) => {
    console.log(publishStatus);
    apiHandler
      .patch(`/update-shop-products/${productId}`, {
        updatedData: publishStatus,
      })
      .then((res) => {
        console.log(res);
        if (res.data.acknowledged) {
          refresh();
          Swal.fire({
            title: "Successful",
            text: "Publish status change Successfully",
            icon: "success",
          });
        }
      });
  };

  return (
    <>
      {openModal && (
        <Modal primary={true} openModal={openModal} setOpenModal={setOpenModal}>
          {actionType === "feedback" && <AdminFeedback productId={reviewItem._id}/>}
          {actionType === "reviewProductDetails" && (
            <ReviewProductDetails reviewItem={reviewItem} />
          )}
        </Modal>
      )}
      <div className="p-8 font-inter">
        <PrimaryTitle titleStyle="text-primaryBold font-semibold">
          Shop Management
        </PrimaryTitle>
        <div className="custom-scrollbar h-[80vh] overflow-y-auto shadow-myCustomShadow bg-white rounded">
          <table className="min-w-full">
            <thead>
              <tr className="bg-primary text-white text-left">
                <th className="p-4 font-semibold">#</th>
                <th className="p-4 font-semibold">Image & title</th>
                <th className="p-4 font-semibold">Category</th>
                <th className="p-4 font-semibold">Seller Name & email</th>
                <th className="p-4 font-semibold">Rating</th>
                <th className="p-4 font-semibold">Publish-Status </th>
                <th className="p-4 font-semibold text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-myGray">
              {petsProducts.map((item, index) => (
                <tr
                  key={item._id}
                  className={`${
                    index % 2 === 0
                      ? "bg-primaryLight bg-opacity-10"
                      : "bg-white"
                  }`}
                >
                  <td className="p-4 font-medium">{index + 1}</td>
                  <td className="p-4">
                    <div className="flex gap-2 items-center">
                      <img
                        src={item?.image}
                        alt={item?.title}
                        className="w-12 h-12 object-cover rounded-md shadow-md"
                      />
                      <p className="p-4 font-medium">{item?.title}</p>
                    </div>
                  </td>
                  <td className="p-4">{item?.category}</td>
                  <td className="p-4">
                    <div className="flex flex-col gap-2">
                      <span>{"md. Hasan kha"}</span>
                      <span>{"mdhasankha.wd@gmail.com"}</span>
                    </div>
                  </td>
                  <td className="p-4">{item?.rating || 0}</td>
                  <td className="p-4">
                    {item?.publishStatus === "Approved" && (
                      <span className="p-3 text-xs rounded-full bg-[#62C474] text-white">
                        Approved
                      </span>
                    )}
                    {item?.publishStatus === "Reject" && (
                      <span className="p-3 text-xs rounded-full bg-[#FE3839] text-white">
                        Rejected
                      </span>
                    )}
                    {item?.publishStatus === "Pending" || !item?.publishStatus && (
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
                            const productId = item._id; // Replace with your actual product ID logic
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
                        onClick={() => handleAdminReviewBtn(item)}
                        className="p-2 text-white bg-red-500 rounded-full hover:bg-red-600 transition duration-150"
                      >
                        <FaEye />
                      </button>
                      <button
                        onClick={handleFeedbackBtn}
                        className="p-2 text-white bg-red-500 rounded-full hover:bg-red-600 transition duration-150"
                      >
                        <RiFeedbackFill />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
