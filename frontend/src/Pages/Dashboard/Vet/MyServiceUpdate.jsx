import { useState } from "react";
import useAxios from "../../../Hooks/useAxios";
import { useForm } from "react-hook-form";
import PrimaryTitle from "../../../Components/UI/PrimaryTitle";
import toast from "react-hot-toast";
const serviceType = [
  "Holistics",
  "SportsCare",
  "OncoCare",
  "Genetics",
  "Medical Care",
];
const MyServiceUpdate = ({ selectedService: service,onServiceUpdated,onClose }) => {
  console.log(service)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const apiHandler = useAxios();
  const [imagePreview, setImagePreview] = useState(service?.image);
  const [imageUrl, setImageUrl] = useState("");

  // Handle image upload
  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("image", file);

      try {
        const response = await apiHandler.post(
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

  // update
  const onSubmit = async (data) => {
    console.log(data)
    const serviceData = {
      vetName: data?.vetName,
      vetEmail: data?.vetEmail,
      serviceName: data?.serviceName,
      image: imageUrl,
      serviceType: data?.serviceType,
      shortDescription: data?.shortDescription,
      description: data?.description,
    };
    apiHandler
      .patch(`/vetServices/${service?._id}`, serviceData)
      .then((res) => {
        console.log(res)
        if (res?.data?.modifiedCount === 1) {
          toast.success("Successfully Update the Service");
          onServiceUpdated(); // Call this to refresh the list
          onClose();
        }
      })
      .catch((error) => {
        toast.error(error?.message);
      });
  };

  return (
    <div className="w-[80%]">
      <div className="flex justify-center">
        <PrimaryTitle>Update Service</PrimaryTitle>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* row-1  */}
        <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-10 mb-6">
          {/* Name Field */}
          <div className="flex-1">
            <label
              htmlFor="title"
              className="block text-lg font-medium text-gray-700"
            >
              Vet Name
            </label>
            <input
              {...register("vetName", { required: "This field is required" })}
              type="text"
              defaultValue={service?.vetName}
              className="w-full p-4 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200"
            />
            {errors.vetName && (
              <p className="text-red-500 text-sm mt-2">
                {errors.vetName.message}
              </p>
            )}
          </div>
          {/* email Field */}
          <div className="flex-1">
            <label
              htmlFor="title"
              className="block text-lg font-medium text-gray-700"
            >
              Vet Email
            </label>
            <input
              {...register("vetEmail", { required: "This field is required" })}
              defaultValue={service?.vetEmail}
              type="email"
              className="w-full p-4 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200"
            />
            {errors.vetEmail && (
              <p className="text-red-500 text-sm mt-2">
                {errors.vetEmail.message}
              </p>
            )}
          </div>
        </div>
        {/* row-2  */}
        <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-10 mb-6">
          {/* Name Field */}
          <div className="flex-1">
            <label
              htmlFor="title"
              className="block text-lg font-medium text-gray-700"
            >
              Service Name
            </label>
            <input
              {...register("serviceName", {
                required: "This field is required",
              })}
              defaultValue={service?.serviceName}
              type="text"
              className="w-full p-4 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200"
            />
            {errors.serviceName && (
              <p className="text-red-500 text-sm mt-2">
                {errors.serviceName.message}
              </p>
            )}
          </div>

          {/* Category Field */}
          <div className="flex-1">
            <label
              htmlFor="category"
              className="block text-lg font-medium text-gray-700"
            >
              Service Type
            </label>
            <select
              {...register("serviceType", {
                required: "Please select a Type",
              })}
              defaultValue={service?.serviceType}
              className="w-full p-4 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200"
            >
              <option value="">Select Type</option>
              {serviceType?.map((item, idx) => (
                <option value={item} key={idx}>
                  {item}
                </option>
              ))}
            </select>
            {errors.serviceType && (
              <p className="text-red-500 text-sm mt-2">
                {errors.serviceType.message}
              </p>
            )}
          </div>
        </div>
        {/* img uploading  */}
        <div className="mb-6 flex flex-col items-start">
          <label
            htmlFor="image"
            className="text-lg font-medium text-gray-700 mb-2"
          >
            Upload Service Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="py-10 w-full text-sm  border-dashed border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Image Preview"
              className="mt-4 max-w-xs max-h-48 object-cover rounded-lg shadow-lg"
            />
          )}
        </div>

        {/* short des  */}
        <div className="mb-6">
          <label
            htmlFor="description"
            className="block text-lg font-medium text-gray-700"
          >
            Short Description
          </label>
          <textarea
            {...register("shortDescription", {
              required: "This field is required",
            })}
            defaultValue={service?.shortDescription}
            className="w-full p-4 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200 h-[80px]"
            rows="5"
          />
          {errors.shortDescription && (
            <p className="text-red-500 text-sm mt-2">
              {errors.shortDescription.message}
            </p>
          )}
        </div>
        {/* description  */}
        <div className="mb-6">
          <label
            htmlFor="description"
            className="block text-lg font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            {...register("description", {
              required: "This field is required",
            })}
            defaultValue={service?.description}
            className="w-full p-4 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200"
            rows="5"
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-2">
              {errors.description.message}
            </p>
          )}
        </div>

        <div className="mt-8">
          <button
            type="submit"
            className="w-full px-4 py-3 bg-primary text-white font-semibold rounded-lg focus:outline-none transition duration-300"
          >
            Update Service
          </button>
        </div>
      </form>
    </div>
  );
};

export default MyServiceUpdate;
