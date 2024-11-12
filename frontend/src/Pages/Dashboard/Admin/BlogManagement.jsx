import { FaEdit, FaTrash } from "react-icons/fa";
import useBlogs from "../../../Hooks/api/useBlogs";
import PrimaryTitle from "../../../Components/UI/PrimaryTitle";
import axios from "axios";
import Modal from "../../../Components/UI/Modal";
import CustomForm from "../../../Components/UI/Form/CustomForm";
import { useState } from "react";

const BlogManagement = () => {
      const { blogs } = useBlogs();
      const [openModal, setOpenModal] = useState(false)

      const handleEdit = (id) => {
            console.log("Edit blog with ID:", id);
            setOpenModal(true)
      };

      const handleDelete = async (id) => {
            console.log("Delete blog with ID:", id);
            try {
                const deleteData = await axios.delete(`http://localhost:8000/blogs/blog-details/${id}`);
                 
                  console.log(deleteData);
                } catch (error) {
                  console.error('Error deleting item', error);
                }
      };

      return (
          <>
          <Modal primary={true} openModal={openModal} setOpenModal={setOpenModal}>
            <CustomForm>
                 <div className="space-x-5">
                 <input className="border-2 rounded-md p-3 outline-none" type="text" placeholder="title" />
                 <input className="border-2 rounded-md p-3 outline-none" type="text" placeholder="category" />
                 </div>
                 <textarea className="border-2 rounded-md p-3 w-full outline-none" name="" id="" rows="4" cols="50" placeholder="description"></textarea>
               
            </CustomForm>
          </Modal>
            <div className="p-8 font-inter">
                  <PrimaryTitle titleStyle="text-primaryBold font-semibold">Blog Management</PrimaryTitle>
                  <div className="custom-scrollbar h-[79vh] overflow-y-auto shadow-myCustomShadow bg-white rounded">
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
                                    {blogs.map((blog, index) => (
                                          <tr
                                                key={blog?._id}
                                                className={`${index % 2 ===  0 ? "bg-primaryLight bg-opacity-10" : "bg-white"
                                                      }`}
                                          >
                                                <td className="p-4 font-medium">{index + 1}</td>
                                                <td className="p-4">
                                                      <img src={blog?.image} alt={blog?.title} className="w-12 h-12 object-cover rounded-md shadow-md" />
                                                </td>
                                                <td className="p-4 font-medium">{blog?.title}</td>
                                                <td className="p-4">{blog?.category}</td>
                                                <td className="p-4">{blog?.view_count}</td>
                                                <td className="p-4">{blog?.rating}</td>
                                                <td className="p-4 flex items-center justify-center space-x-3">
                                                      <button
                                                            onClick={() => handleEdit(blog?._id)}
                                                            className="p-2 text-white bg-secondary rounded-full hover:bg-primary transition duration-150"
                                                      >
                                                            <FaEdit />
                                                      </button>
                                                      <button
                                                            onClick={() => handleDelete(blog?._id)}
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
};

export default BlogManagement;
