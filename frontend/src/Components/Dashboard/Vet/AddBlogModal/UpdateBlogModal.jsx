import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import PrimaryTitle from "../../../UI/PrimaryTitle";
import useAxios from "../../../../Hooks/useAxios";
import toast from "react-hot-toast";

const UpdateBlogModal = ({ selectedBlog: blog }) => {
      const [imageUrl, setImageUrl] = useState("");
      const [imagePreview, setImagePreview] = useState(blog?.image);
      const [subtitles, setSubtitles] = useState(blog?.subtitles || []);

      const apiHandler = useAxios();

      const { register, handleSubmit, formState: { errors } } = useForm();

      // Handle image upload
      const handleImageUpload = async (event) => {
            const file = event.target.files[0];
            if (file) {
                  const formData = new FormData();
                  formData.append("image", file);

                  try {
                        const response = await axios.post(
                              `https://api.imgbb.com/1/upload?key=597d78aa1ab369b0aa1583848b74f0f9`,
                              formData
                        );
                        setImagePreview(response.data.data.url);
                        setImageUrl(response.data.data.url);
                  } catch (error) {
                        console.error("Error uploading image", error);
                  }
            }
      };

      // Handle form submission
      const onSubmit = async (data) => {

            const blogData = {
                  title: data?.title,
                  category: data?.category,
                  image: imageUrl,
                  description: data?.description,
                  subtitles: data?.subtitles,
            };

            apiHandler.put(`/blogs/blog-details/${blog?._id}`, blogData)
                  .then(res => {
                        if (res?.data?.modifiedCount === 1) {
                              toast.success('Successfully Update the blog')
                        }
                  })
                  .catch(error => {
                        console.error(error?.message)
                  })

            console.log('Update blog data', blogData);

      };

      // Add new subtitle
      const handleAddSubtitle = () => {
            setSubtitles([...subtitles, { title: "", content: "" }]);
      };

      return (
            <div className="bg-white rounded-3xl shadow-xl px-4 md:px-8 pb-8 w-full">
                  <div className="flex justify-center">
                        <PrimaryTitle>Update Blog</PrimaryTitle>
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-10 mb-6">
                              {/* Title Field */}
                              <div className="flex-1">
                                    <label htmlFor="title" className="block text-lg font-medium text-gray-700">Blog Title</label>
                                    <input
                                          {...register("title", { required: "Blog title is required" })}
                                          defaultValue={blog?.title}
                                          type="text"
                                          placeholder="Enter blog title"
                                          className="w-full p-4 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200"
                                    />
                                    {errors.title && <p className="text-red-500 text-sm mt-2">{errors.title.message}</p>}
                              </div>

                              {/* Category Field */}
                              <div className="flex-1">
                                    <label htmlFor="category" className="block text-lg font-medium text-gray-700">Category</label>
                                    <select
                                          {...register("category", { required: "Please select a category" })}
                                          defaultValue={blog?.category}
                                          className="w-full p-4 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200"
                                    >
                                          <option value="">Select Category</option>
                                          <option value="Dog">Dog</option>
                                          <option value="Cat">Cat</option>
                                          <option value="Rabbit">Rabbit</option>
                                    </select>
                                    {errors.category && <p className="text-red-500 text-sm mt-2">{errors.category.message}</p>}
                              </div>
                        </div>

                        <div className="mb-6">
                              <label htmlFor="description" className="block text-lg font-medium text-gray-700">Description</label>
                              <textarea
                                    {...register("description", { required: "Detailed description is required" })}
                                    defaultValue={blog?.description}
                                    placeholder="Write a detailed description for your blog"
                                    className="w-full p-4 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200"
                                    rows="5"
                              />
                              {errors.description && <p className="text-red-500 text-sm mt-2">{errors.description.message}</p>}
                        </div>

                        <div className="mb-6 flex flex-col items-center">
                              <label htmlFor="image" className="text-lg font-medium text-gray-700 mb-2">Upload Blog Image</label>
                              <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    className="p-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                              />
                              {imagePreview && (
                                    <img
                                          src={imagePreview}
                                          alt="Image Preview"
                                          className="mt-4 max-w-xs max-h-48 object-cover rounded-lg shadow-lg"
                                    />
                              )}
                        </div>

                        <div className="mb-6">
                              <h3 className="text-xl font-semibold text-gray-800 mb-4">Subtitles</h3>
                              {subtitles.map((subtitle, index) => (
                                    <div key={index} className="mb-6 p-6 bg-gray-50 rounded-lg shadow-md">
                                          <input
                                                defaultValue={subtitle?.title}
                                                {...register(`subtitles.${index}.title`, { required: "Subtitle title is required" })}
                                                type="text"
                                                placeholder="Enter subtitle title"
                                                className="w-full p-4 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200"
                                          />
                                          <textarea
                                                defaultValue={subtitle?.content}
                                                {...register(`subtitles.${index}.content`, { required: "Subtitle content is required" })}
                                                placeholder="Enter subtitle content"
                                                className="w-full p-4 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200"
                                                rows="4"
                                          />
                                    </div>
                              ))}
                              <button
                                    type="button"
                                    onClick={handleAddSubtitle}
                                    className="text-blue-600 text-sm font-semibold underline hover:text-blue-700 transition duration-200"
                              >
                                    Add Another Subtitle
                              </button>
                        </div>

                        <div className="mb-6">
                              <label htmlFor="authorBio" className="block text-lg font-medium text-gray-700">Author bio</label>
                              <input
                                    {...register("authorBio")}
                                    defaultValue={blog?.author?.description}
                                    type="text"
                                    placeholder="Author's bio"
                                    className="w-full p-4 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200"
                              />
                        </div>

                        <div className="mt-8">
                              <button
                                    type="submit"
                                    className="w-full px-4 py-3 bg-primary text-white font-semibold rounded-lg focus:outline-none transition duration-300"
                              >
                                    Update Blog
                              </button>
                        </div>
                  </form>
            </div>
      );
};

export default UpdateBlogModal;
