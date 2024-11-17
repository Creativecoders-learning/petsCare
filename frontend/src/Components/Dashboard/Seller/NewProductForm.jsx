import { useForm } from "react-hook-form";
import Button from "../../UI/Button";
import PrimaryTitle from "../../UI/PrimaryTitle";
import { useState } from "react";
import axios from "axios";
import useAxios from "../../../Hooks/useAxios";
import Swal from "sweetalert2";

const categories = ["Dogs", "Cats", "Rabbits", "Birds"];
const subCategories = ["Foods", "Medicine", "Accessories"];

export default function NewProductForm({refresh}) {
  // const [selectOption, setSelectOption] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const apiHandler = useAxios();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

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

  // handle create product form
  const onSubmit = (data) => {
    const newProductData = { ...data, image: imageUrl, ratting: 0, publishStatus : "Pending", adminFeedback: "No Feedback Yet!!" };
    console.log(newProductData);
    apiHandler.post("/shop-products", newProductData)
    .then((res) => {
      if (res.data.acknowledged) {
        refresh();
        reset();
        Swal.fire({
          title: "Successful",
          text: "Create Product Successfully",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="w-[90%]">
      <PrimaryTitle titleStyle="justify-center mb-5">
        Add New Product
      </PrimaryTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* row-1 */}
        <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-4 mb-6">
          {/* Title */}
          <div className="flex-1">
            <label
              htmlFor="title"
              className="block text-lg font-medium text-gray-700"
            >
              Title
            </label>
            <input
              {...register("title", { required: "Blog title is required" })}
              type="text"
              placeholder="Enter blog title"
              className="w-full p-4 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-2">
                {errors.title.message}
              </p>
            )}
          </div>

          {/* brand name */}
          <div className="flex-1">
            <label
              htmlFor="brand"
              className="block text-lg font-medium text-gray-700"
            >
              Brand
            </label>
            <input
              {...register("brand", { required: "Brand Name is required" })}
              type="text"
              placeholder="Brand Name"
              className="w-full p-4 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200"
            />
            {errors.brand && (
              <p className="text-red-500 text-sm mt-2">
                {errors.brand.message}
              </p>
            )}
          </div>
        </div>

        {/* row-2 */}
        <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-4 mb-6">
          {/* Category */}
          <div className="flex-1">
            <label
              htmlFor="category"
              className="block text-lg font-medium text-gray-700"
            >
              Category
            </label>
            <select
              name="currency"
              {...register("category", { required: true })}
              className="w-full p-4 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200"
            >
              <option value="" disabled selected>
                Select Category
              </option>
              {categories?.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
            {errors.category && (
              <p className="text-red-500 text-sm mt-2">
                {errors.category.message}
              </p>
            )}
          </div>
          {/* sub-Category */}
          <div className="flex-1">
            <label
              htmlFor="subCategory"
              className="block text-lg font-medium text-gray-700"
            >
              Sub-Categories
            </label>
            <select
              name="subCategory"
              {...register("category", { required: true })}
              className="w-full p-4 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200"
            >
              <option value="" disabled selected>
                Select sub-category
              </option>
              {subCategories?.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
            {errors.subCategory && (
              <p className="text-red-500 text-sm mt-2">
                {errors.subCategory.message}
              </p>
            )}
          </div>
          {/* price */}
          <div className="flex-1">
            <label
              htmlFor="Price"
              className="block text-lg font-medium text-gray-700"
            >
              Price
            </label>
            <input
              {...register("price", { required: "Price is required" })}
              type="number"
              placeholder="$Price"
              className="w-full p-4 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200"
            />
            {errors.price && (
              <p className="text-red-500 text-sm mt-2">
                {errors.price.message}
              </p>
            )}
          </div>

          {/* quantity */}
          <div className="flex-1">
            <label
              htmlFor="quantity"
              className="block text-lg font-medium text-gray-700"
            >
              Quantity
            </label>
            <input
              {...register("quantity", { required: "Quantity is required" })}
              type="number"
              placeholder="Products Quantity"
              className="w-full p-4 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200"
            />
            {errors.quantity && (
              <p className="text-red-500 text-sm mt-2">
                {errors.quantity.message}
              </p>
            )}
          </div>
        </div>

        {/* row-3 */}
        {/* <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-10 mb-6"></div> */}

        {/* row-4 */}
        <div className="mb-6 flex flex-col items-start">
          <label
            htmlFor="media"
            className="text-lg font-medium text-gray-700 mb-2"
          >
            Media
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full py-10 px-10 text-sm border-dashed border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Image Preview"
              className="mt-4 max-w-xs max-h-48 object-cover rounded-lg shadow-lg"
            />
          )}
        </div>

        {/* row-5 */}
        <div className="mb-6">
          <label
            htmlFor="description"
            className="block text-lg font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            {...register("description", {
              required: "Detailed description is required",
            })}
            placeholder="Write a detailed description for your blog"
            className="w-full p-4 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200"
            rows="5"
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-2">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* row-6 */}
        <div className="mt-8">
          <Button dynamicType="submit" primary={true} type="submit">
            Add
          </Button>
        </div>
      </form>
    </div>
  );
}
