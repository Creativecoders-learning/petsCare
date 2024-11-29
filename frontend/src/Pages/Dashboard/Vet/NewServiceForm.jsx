import { useState } from "react";
import { useForm } from "react-hook-form";
import useAxios from "../../../Hooks/useAxios";
import PrimaryTitle from "../../../Components/UI/PrimaryTitle";
import Button from "../../../Components/UI/Button";
import toast from "react-hot-toast";

const serviceType = [
  "Holistics",
  "SportsCare",
  "OncoCare",
  "Genetics",
  "Medical Care",
];

const NewServiceForm = () => {
  const apiHandler = useAxios();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [imagePreview, setImagePreview] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [timeSlots, setTimeSlots] = useState([]);
  const [newSlot, setNewSlot] = useState({
    startTime: "",
    endTime: "",
    seats: 1,
  });

  const addTimeSlot = () => {
    setTimeSlots([
      ...timeSlots,
      { ...newSlot, bookedSeats: Array(newSlot.seats).fill(false) },
    ]);
    setNewSlot({ startTime: "", endTime: "", seats: 1 });
  };

  const onSubmit = async (data) => {
    const newServiceData = {
      ...data,
      image: imageUrl,
      status: "Pending",
      adminFeedback: "no feedback !",
      schedule: timeSlots
    };
    console.log(newServiceData);

    try {
      const response = await apiHandler.post("/vetServices", newServiceData);

      if (response.data.insertedId) {
        toast.success(`Service data added successfully`, response.data);
        reset();
      }
    } catch (error) {
      toast.error("Error adding service:", error.message);
    }
  };

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

  return (
    <div className="w-[80%]">
      <div className="flex justify-center">
        <PrimaryTitle>Add Service</PrimaryTitle>
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
              placeholder="Enter Vets Name"
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
              type="email"
              placeholder="Enter Vets Email"
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
              type="text"
              placeholder="Enter Service Name"
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
        {/* row-3  */}
        <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-10 mb-6">
          {/* degrees Field */}
          <div className="flex-1">
            <label
              htmlFor="title"
              className="block text-lg font-medium text-gray-700"
            >
              Degrees
            </label>
            <input
              {...register("degrees", {
                required: "This field is required",
              })}
              type="text"
              placeholder="Enter Service Name"
              className="w-full p-4 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200"
            />
            {errors.degrees && (
              <p className="text-red-500 text-sm mt-2">
                {errors.degrees.message}
              </p>
            )}
          </div>
          {/* institute Field */}
          <div className="flex-1">
            <label
              htmlFor="title"
              className="block text-lg font-medium text-gray-700"
            >
              Institute
            </label>
            <input
              {...register("institute", {
                required: "This field is required",
              })}
              type="text"
              placeholder="Enter Service Name"
              className="w-full p-4 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200"
            />
            {errors.institute && (
              <p className="text-red-500 text-sm mt-2">
                {errors.institute.message}
              </p>
            )}
          </div>
        </div>
        {/* row-4  */}
        <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-10 mb-6">
          {/* expertise Field */}
          <div className="flex-1">
            <label
              htmlFor="title"
              className="block text-lg font-medium text-gray-700"
            >
              Expertise
            </label>
            <input
              {...register("expertise", {
                required: "This field is required",
              })}
              type="text"
              placeholder="Enter Service Name"
              className="w-full p-4 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200"
            />
            {errors.expertise && (
              <p className="text-red-500 text-sm mt-2">
                {errors.expertise.message}
              </p>
            )}
          </div>
          {/* experience Field */}
          <div className="flex-1">
            <label
              htmlFor="title"
              className="block text-lg font-medium text-gray-700"
            >
              Experience
            </label>
            <input
              {...register("experience", {
                required: "This field is required",
              })}
              type="text"
              placeholder="Enter Service Name"
              className="w-full p-4 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200"
            />
            {errors.experience && (
              <p className="text-red-500 text-sm mt-2">
                {errors.experience.message}
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

        {/* schedule */}
        <div className="mb-6">
          <h3>Add Time Slot</h3>
          <div className="flex justify-between gap-6">
            <input
              type="time"
              value={newSlot.startTime}
              className="w-full p-4 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200"
              onChange={(e) =>
                setNewSlot({ ...newSlot, startTime: e.target.value })
              }
            />
            <input
              type="time"
              value={newSlot.endTime}
              className="w-full p-4 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200"
              onChange={(e) =>
                setNewSlot({ ...newSlot, endTime: e.target.value })
              }
            />
            <input
              type="number"
              value={newSlot.seats}
              min="1"
              className="w-full p-4 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200"
              onChange={(e) =>
                setNewSlot({ ...newSlot, seats: Number(e.target.value) })
              }
            />
          </div>
          <Button btnStyle="mt-5" onClick={addTimeSlot}>
            Add Slot
          </Button>

          <ul className="mt-5 flex gap-6">
            {timeSlots.map((slot, index) => (
              <li
                className="p-4 border-2 border-gray-300 rounded-lg flex flex-col items-center gap-4"
                key={index}
              >
                <span>slot: {index + 1}</span>
                <span>
                  {slot.startTime} - {slot.endTime}
                </span>{" "}
                <span>Seats: {slot.seats}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* short des  */}
        <div className="mb-6">
          <label
            htmlFor="description"
            className="block text-lg font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            {...register("shortDescription", {
              required: "This field is required",
            })}
            placeholder="Write a detailed description for your Service"
            className="w-full p-4 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200 h-[80px]"
            rows="5"
          />
          {errors.shortDescription && (
            <p className="text-red-500 text-sm mt-2">
              {errors.shortDescription.message}
            </p>
          )}
        </div>
        <div className="mt-8">
          <button
            type="submit"
            className="w-full px-4 py-3 bg-primary text-white font-semibold rounded-lg focus:outline-none transition duration-300"
          >
            Add New Service
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewServiceForm;