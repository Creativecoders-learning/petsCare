import { FaTrash } from "react-icons/fa";
import useBlogs from "../../../Hooks/api/useBlogs";
import PrimaryTitle from "../../../Components/UI/PrimaryTitle";
import Swal from "sweetalert2";
import useAxios from "../../../Hooks/useAxios";

const BlogManagement = () => {
      const { blogs, refresh } = useBlogs();
      const apiHandler = useAxios();

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

      return (
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
                                                key={blog?.id}
                                                className={`${index % 2 === 0 ? "bg-primaryLight bg-opacity-10" : "bg-white"
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
            </div>
      );
};

export default BlogManagement;
