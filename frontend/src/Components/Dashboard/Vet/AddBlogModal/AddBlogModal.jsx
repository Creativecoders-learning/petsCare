import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import PrimaryTitle from "../../../UI/PrimaryTitle";

const AddBlogModal = () => {
      const { control, handleSubmit, formState: { errors } } = useForm();
      const [imagePreview, setImagePreview] = useState(null);
      const [subtitles, setSubtitles] = useState([{ title: "", content: "" }]);

      // Handle form submission
      const onSubmit = (data) => {
            console.log("Submitted Data:", data);
      };

      // Add new subtitle
      const handleAddSubtitle = () => {
            setSubtitles([...subtitles, { title: "", content: "" }]);
      };

      // Handle image upload to ImageBB
      const handleImageUpload = async (event) => {
            const file = event.target.files[0];
            if (file) {
                  const formData = new FormData();
                  formData.append("image", file);

                  try {
                        // API key ঠিকমতো কাজ করছে কিনা তা চেক করতে `console.log` ব্যবহার করতে পারেন
                        console.log("Uploading Image with API Key:", import.meta.env.VITE_IMAGEBB_API_KEY);

                        const response = await axios.post(
                              `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGEBB_API_KEY}`,
                              formData
                        );
                        // যদি সঠিকভাবে কাজ করে তবে ইমেজের লিঙ্ক কনসোল-এ দেখা উচিত
                        console.log("Uploaded Image URL:", response.data.data.url);
                        setImagePreview(response.data.data.url);
                  } catch (error) {
                        console.error("Error uploading image", error);
                  }
            }
      };

      return (

            <div className="bg-white rounded-3xl shadow-xl px-8 pb-8 w-full">
                  <div className="flex justify-center">
                        <PrimaryTitle>Add New Blog</PrimaryTitle>
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)}>

                        {/* Title Field */}
                        <div className="mb-6">
                              <label htmlFor="title" className="block text-lg font-medium text-gray-700">Blog Title</label>
                              <Controller
                                    name="title"
                                    control={control}
                                    rules={{ required: "Blog title is required" }}
                                    render={({ field }) => (
                                          <input
                                                {...field}
                                                type="text"
                                                placeholder="Enter blog title"
                                                className="w-full p-4 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200"
                                          />
                                    )}
                              />
                              {errors.title && <p className="text-red-500 text-sm mt-2">{errors.title.message}</p>}
                        </div>

                        {/* Category Field */}
                        <div className="mb-6">
                              <label htmlFor="category" className="block text-lg font-medium text-gray-700">Category</label>
                              <Controller
                                    name="category"
                                    control={control}
                                    rules={{ required: "Please select a category" }}
                                    render={({ field }) => (
                                          <select
                                                {...field}
                                                className="w-full p-4 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200"
                                          >
                                                <option value="Technology">Dog</option>
                                                <option value="Health">Health</option>
                                                <option value="Lifestyle">Lifestyle</option>
                                                <option value="Business">Business</option>
                                          </select>
                                    )}
                              />
                              {errors.category && <p className="text-red-500 text-sm mt-2">{errors.category.message}</p>}
                        </div>

                        {/* Description Field */}
                        <div className="mb-6">
                              <label htmlFor="description" className="block text-lg font-medium text-gray-700">Description</label>
                              <Controller
                                    name="description"
                                    control={control}
                                    rules={{ required: "Please provide a description" }}
                                    render={({ field }) => (
                                          <textarea
                                                {...field}
                                                placeholder="Write a detailed description for your blog"
                                                className="w-full p-4 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200"
                                                rows="5"
                                          />
                                    )}
                              />
                              {errors.description && <p className="text-red-500 text-sm mt-2">{errors.description.message}</p>}
                        </div>

                        {/* Image Upload Field */}
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
                              {!imagePreview && <p className="text-gray-500 mt-2">No image selected</p>}
                        </div>

                        {/* Subtitles Section */}
                        <div className="mb-6">
                              <h3 className="text-xl font-semibold text-gray-800 mb-4">Subtitles</h3>
                              {subtitles.map((subtitle, index) => (
                                    <div key={index} className="mb-6 p-6 bg-gray-50 rounded-lg shadow-md">
                                          <div className="mb-4">
                                                <label htmlFor={`subtitles[${index}].title`} className="block text-lg font-medium text-gray-700">Subtitle Title</label>
                                                <Controller
                                                      name={`subtitles[${index}].title`}
                                                      control={control}
                                                      defaultValue={subtitle.title}
                                                      rules={{ required: "Subtitle title is required" }}
                                                      render={({ field }) => (
                                                            <input
                                                                  {...field}
                                                                  type="text"
                                                                  placeholder="Enter subtitle title"
                                                                  className="w-full p-4 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200"
                                                            />
                                                      )}
                                                />
                                          </div>

                                          <div>
                                                <label htmlFor={`subtitles[${index}].content`} className="block text-lg font-medium text-gray-700">Subtitle Content</label>
                                                <Controller
                                                      name={`subtitles[${index}].content`}
                                                      control={control}
                                                      defaultValue={subtitle.content}
                                                      rules={{ required: "Subtitle content is required" }}
                                                      render={({ field }) => (
                                                            <textarea
                                                                  {...field}
                                                                  placeholder="Enter subtitle content"
                                                                  className="w-full p-4 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200"
                                                                  rows="4"
                                                            />
                                                      )}
                                                />
                                          </div>
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

                        {/* Submit Button */}
                        <div className="mt-8">
                              <button
                                    type="submit"
                                    className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none transition duration-300"
                              >
                                    Submit Blog
                              </button>
                        </div>
                  </form>
            </div>

      );
};

export default AddBlogModal;
