import { FaTrash, FaEdit } from "react-icons/fa";
import useBlogs from "../../../Hooks/api/useBlogs";
import PrimaryTitle from "../../../Components/UI/PrimaryTitle";
import Button from "../../../Components/UI/Button";
import { Rating } from '@smastrom/react-rating'
import Swal from "sweetalert2";
import useAxios from "../../../Hooks/useAxios";
import UseAuth from "../../../Hooks/UseAuth";
import { useEffect, useState } from "react";
import Modal from "../../../Components/UI/Modal";
import AddBlogModal from "../../../Components/Dashboard/Vet/AddBlogModal/AddBlogModal";
import UpdateBlogModal from "../../../Components/Dashboard/Vet/AddBlogModal/UpdateBlogModal";
import NoDataFound from "../../../Components/UI/NoDataFound";

const MyBlogs = () => {
      const { user } = UseAuth()
      const [selectedBlog, setSelectedBlog] = useState(null); // State for selected vet
      const [openModal, setOpenModal] = useState(false);
      const [modalType, setModalType] = useState("");
      const apiHandler = useAxios()

      const { blogs, refresh } = useBlogs(user?.email);

      // for reload owner blogs
      useEffect(() => {
            refresh()
      }, [refresh])

      // Update blog
      const handleUpdateBlog = (blog) => {
            setSelectedBlog(blog);
            setModalType("edit-blog");
            setOpenModal(true);
      };

      // delete Blog
      const handleDeleteBlog = (id) => {
            Swal.fire({
                  title: "Are you sure?",
                  text: "You won't be able to revert this!",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                  if (result.isConfirmed) {

                        // Deleted functionality here
                        apiHandler.delete(`/blogs/blog-details/${id}`)
                              .then(result => {
                                    if (result?.data?.deletedCount === 1) {
                                          Swal.fire({
                                                title: "Deleted!",
                                                text: "Your file has been deleted.",
                                                icon: "success"
                                          });

                                          // fetch the user for updating in UI
                                          refresh()
                                    }
                              })
                  }
            });
      };

      const handleAddServices = () => {
            setModalType("add-blog");
            setOpenModal(true);
      };

      return (
            <div className="p-8 font-inter">
                  <div className="flex justify-between items-center">
                        <PrimaryTitle titleStyle="text-primaryBold font-semibold">
                              My Blogs
                        </PrimaryTitle>
                        <Button onClick={handleAddServices} secondary>
                              Add New Blog
                        </Button>
                  </div>

                  {blogs?.length > 0 ? (
                        <div className="custom-scrollbar h-[80vh] overflow-y-auto shadow-myCustomShadow bg-white rounded-lg">
                              <table className="min-w-full border border-gray-200">
                                    <thead>
                                          <tr className="bg-primary text-white text-left">
                                                <th className="p-4 font-semibold">#</th>
                                                <th className="p-4 font-semibold">Image</th>
                                                <th className="p-4 font-semibold">Title</th>
                                                <th className="p-4 font-semibold">Category</th>
                                                <th className="p-4 font-semibold">Rating & Views</th>
                                                <th className="p-4 font-semibold text-center">Actions</th>
                                          </tr>
                                    </thead>
                                    <tbody className="text-myGray">
                                          {blogs.map((blog, index) => (
                                                <tr
                                                      key={blog?._id}
                                                      className={`${index % 2 === 0
                                                            ? "bg-primaryLight bg-opacity-10"
                                                            : "bg-white"
                                                            }`}
                                                >
                                                      <td className="p-4 font-medium">{index + 1}</td>
                                                      <td className="p-4">
                                                            <img
                                                                  src={blog?.image}
                                                                  alt={blog?.title}
                                                                  className="w-12 h-12 object-cover rounded-md shadow-md"
                                                            />
                                                      </td>
                                                      <td className="p-4 font-medium">{blog?.title}</td>
                                                      <td className="p-4">{blog?.category}</td>
                                                      <td className="p-4">
                                                            <p className="flex items-center gap-1">
                                                                  <Rating
                                                                        style={{ maxWidth: 100 }}
                                                                        value={blog?.rating}
                                                                        readOnly
                                                                  />
                                                                  ({blog?.rating})
                                                            </p>
                                                            <span>
                                                                  <span className="text-sm">Total Views</span>{" "}
                                                                  {blog?.view_count}
                                                            </span>
                                                      </td>
                                                      <td className="p-4 flex justify-center gap-2">
                                                            <button
                                                                  onClick={() => handleUpdateBlog(blog)}
                                                                  className="p-2 text-white bg-secondary rounded-full hover:bg-primary transition duration-150"
                                                            >
                                                                  <FaEdit />
                                                            </button>
                                                            <button
                                                                  onClick={() => handleDeleteBlog(blog?._id)}
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
                  ) : (
                        <NoDataFound text="Blogs" />
                  )}

                  {/* Conditionally render the details modal */}
                  {openModal && (
                        <Modal primary={true} openModal={openModal} setOpenModal={setOpenModal}>
                              {modalType === "add-blog" && <AddBlogModal />}
                              {modalType === "edit-blog" && (
                                    <UpdateBlogModal selectedBlog={selectedBlog} />
                              )}
                        </Modal>
                  )}
            </div>
      );
};

export default MyBlogs;
