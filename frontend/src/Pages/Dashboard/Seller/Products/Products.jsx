import { FaEdit, FaTrash } from "react-icons/fa";
import Button from "../../../../Components/UI/Button";
import PrimaryTitle from "../../../../Components/UI/PrimaryTitle";
import UpdateProductForm from "../../../../Components/Dashboard/Seller/UpdateProductForm";
import Swal from "sweetalert2";
import useAxios from "../../../../Hooks/useAxios";
import { useState } from "react";
import Modal from "../../../../Components/UI/Modal";
import NewProductForm from "../../../../Components/Dashboard/Seller/NewProductForm";
import usePetsProducts from "../../../../Hooks/api/usePetsProducts";

export default function Products() {
  const { petsProducts, refresh } = usePetsProducts();
  const [openModal, setOpenModal] = useState(false);
  const [formType, setFormType] = useState("");
  const [updateProductId, setUpdateProductId] = useState(null);
  const apiHandler = useAxios();

  // handle delete button
  const handleDeleteBtn = (id) => {
    console.log(id);

    // ensure alert!!
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        apiHandler
          .delete(`/shop-products/${id}`)
          .then((res) => {
            if (res.data.acknowledged) {
              refresh();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((err) => {
            Swal.fire({
              title: "Something Wrong!!",
              text: `${err.message}`,
              icon: "error",
            });
          });
      }
    });
  };

  // handle new form
  const handleNewForm = () => {
    setOpenModal(true);
    setFormType("newForm");
  };

  // handle update form
  const handleUpdateForm = (id) => {
    setOpenModal(true);
    setFormType("updateForm");
    setUpdateProductId(id);
  };

  return (
    <>
      {openModal && (
        <Modal primary={true} setOpenModal={setOpenModal} openModal={openModal}>
          {formType === "newForm" && <NewProductForm refresh={refresh} />}
          {formType === "updateForm" && (
            <UpdateProductForm refresh={refresh} id={updateProductId} />
          )}
        </Modal>
      )}
      <div className="p-8 font-inter">
        <PrimaryTitle titleStyle="text-primaryBold font-semibold">
          Manage Your Publish Products
        </PrimaryTitle>
        <div className="w-full flex justify-end my-6">
          <Button primary onClick={handleNewForm}>
            New Product
          </Button>
        </div>
        <div className="custom-scrollbar h-[80vh] overflow-y-auto shadow-myCustomShadow bg-white rounded">
          <table className="min-w-full">
            <thead>
              <tr className="bg-primary text-white text-left">
                <th className="p-4 font-semibold">#</th>
                <th className="p-4 font-semibold">Image</th>
                <th className="p-4 font-semibold">Title</th>
                <th className="p-4 font-semibold">Category</th>
                <th className="p-4 font-semibold">Views</th>
                <th className="p-4 font-semibold">Rating</th>
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
                    <img
                      src={item?.image}
                      alt={item?.title}
                      className="w-12 h-12 object-cover rounded-md shadow-md"
                    />
                  </td>
                  <td className="p-4 font-medium">{item?.title}</td>
                  <td className="p-4">{item?.category}</td>
                  <td className="p-4">{item?.view_count}</td>
                  <td className="p-4">{item?.rating}</td>
                  <td className="p-4 flex items-center justify-center space-x-3">
                    <button
                      onClick={() => handleUpdateForm(item._id)}
                      className="p-2 text-white bg-secondary rounded-full hover:bg-primary transition duration-150"
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDeleteBtn(item?._id)}
                      className="p-2 text-white bg-red-500 rounded-full hover:bg-red-600 transition duration-150"
                    >
                      <FaTrash />
                    </button>
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
