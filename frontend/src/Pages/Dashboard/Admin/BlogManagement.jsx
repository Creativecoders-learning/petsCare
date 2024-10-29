import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import useBlogs from "../../../Hooks/api/useBlogs";

const BlogManagement = () => {
      const { blogs } = useBlogs();

      const handleEdit = (id) => {
            console.log("Edit blog with ID:", id);
      };

      const handleDelete = (id) => {
            console.log("Delete blog with ID:", id);
      };

      return (
            <div className="p-8 font-inter">
                  <h2 className="text-3xl font-semibold mb-6 text-primaryBold">Blog Management</h2>
                  <div className="overflow-x-auto rounded-lg shadow-myCustomShadow bg-white">
                        <table className="min-w-full">
                              <thead>
                                    <tr className="bg-primary text-white text-left">
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
                                                key={blog.id}
                                                className={`${index % 2 === 0 ? "bg-primaryLight bg-opacity-10" : "bg-white"
                                                      } hover:bg-primaryLight hover:bg-opacity-20 transition duration-200`}
                                          >
                                                <td className="p-4">
                                                      <img src={blog.image} alt={blog.title} className="w-12 h-12 object-cover rounded-md shadow-md" />
                                                </td>
                                                <td className="p-4 font-medium">{blog.title}</td>
                                                <td className="p-4">{blog.category}</td>
                                                <td className="p-4">{blog.view_count}</td>
                                                <td className="p-4">{blog.rating}</td>
                                                <td className="p-4 flex items-center justify-center space-x-3">
                                                      <button
                                                            onClick={() => handleEdit(blog.id)}
                                                            className="p-2 text-white bg-secondary rounded-full hover:bg-primary transition duration-150"
                                                      >
                                                            <FaEdit />
                                                      </button>
                                                      <button
                                                            onClick={() => handleDelete(blog.id)}
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
