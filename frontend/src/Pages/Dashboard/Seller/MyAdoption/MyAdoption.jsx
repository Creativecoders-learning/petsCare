import { useState } from "react";
import useMyAdoptionData from "../../../../hooks/useMyAdoptionData";
import MyAdoptionRow from "../../TableRow/MyAdoptionRow";
import Modal from "../../../../Components/UI/Modal";
import { useForm } from "react-hook-form"
import { imageUpload, uploadMultipleImages } from "../../../../Utilities/Utilities";
import useAdoptionData from "../../../../Hooks/useAdoptionData";

const MyAdoption = () => {
  const {adoptions} = useAdoptionData();
  const [openModal, setOpenModal] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  

  const onSubmit = async(data) =>{
    console.log(data)
    const shelterImg = data.shelter_photo[0];
    const images = data.images;
    console.log("images",images)
    console.log('shelter',shelterImg)
    const imageUrls =await uploadMultipleImages(images)
    const shelter_img = await imageUpload(shelterImg);
    console.log('get Images',imageUrls)
    console.log('get Images',shelter_img)
    

    const adoptionInfo = {
      name:data.name,
      breed:data.breed,
      age:data.age,
      gender:data.gender,
      size:data.size,
      location:data.location,
      temperament:data.temperament,
      weight:data.weight,
      height:data.height,
      color:data.color,
      good_with_kids:`${data?.good_with_kids ? 'Good with kids' : 'N/A'}`,
      good_with_other_pets:`${data?.good_with_other_pets ? 'Good with other pets' : 'N/A'}`,
      house_trained:`${data?.house_trained ? 'House trained' : 'N/A'}`,
      best_suited_for:data.best_suited_for,
      exercise_needs:data.exercise_needs,
      category:data.category,
      shelter_name:data.shelter_name,
      shelter_email:data.shelter_email,
      shelter_photo:shelter_img?.data?.display_url,
      description:data.description,
      image:imageUrls
    }

    console.log(adoptionInfo)
  }

  // console.log(myAdoptions);

  return (
    <>
      <div className="py-5 lg:py-10 ">
        <h1 className="text-xl md:text-2xl lg:text-3xl text-center mb-5">
          My Adoption
        </h1>
        <div className="text-right mr-40">
          <button onClick={() => setOpenModal(true)} className="py-3 px-10 bg-primary hover:bg-primaryBold rounded-md text-white">Create Adoption</button>
        </div>
        <div className="py-4 px-5">
          <div className=" max-w-screen-lg mx-auto custom-scrollbar h-[80vh] overflow-y-auto overflow-x-auto shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr className="bg-primary text-white text-left">
                  <th className="p-4 font-semibold">#</th>
                  <th className="p-4 font-semibold">Image</th>
                  <th className="p-4 font-semibold">Name</th>
                  <th className="p-4 font-semibold">Category</th>
                  <th className="p-4 font-semibold">Date</th>
                  <th className="p-4 font-semibold">Status</th>
                  <th className="p-4 font-semibold">Admin Response</th>
                </tr>
              </thead>
              <tbody>
                {adoptions?.map((item, index) => (
                  <MyAdoptionRow key={item?.id} index={index} item={item} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* added modal */}
      <Modal setOpenModal={setOpenModal} openModal={openModal} primary={true}>

        <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Pet Adoption Form</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* <!-- Pet Information Section --> */}
            <h3 className="text-xl font-semibold text-gray-600 mb-4">Pet Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-600">Pet's Name</label>
                <input type="text"  {...register("name")} className="w-full border border-gray-300 rounded-md p-2" required />
              </div>
              <div>
                <label className="block text-gray-600">Category</label>
                <input type="text"  {...register("category")} className="w-full border border-gray-300 rounded-md p-2" required />
              </div>
              <div>
                <label className="block text-gray-600">Breed</label>
                <input type="text"  {...register("breed")} className="w-full border border-gray-300 rounded-md p-2" required />
              </div>
              <div>
                <label className="block text-gray-600">Age</label>
                <input type="text"  {...register("age")} className="w-full border border-gray-300 rounded-md p-2" required />
              </div>
              <div>
                <label className="block text-gray-600">Gender</label>
                <select {...register("gender", { required: true })} className="w-full border border-gray-300 rounded-md p-2" required>
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-600">Size</label>
                <input type="text" className="w-full border border-gray-300 rounded-md p-2" required />
              </div>
              <div>
                <label className="block text-gray-600">Weight</label>
                <input type="text" {...register("weight")} className="w-full border border-gray-300 rounded-md p-2" required />
              </div>
              <div>
                <label className="block text-gray-600">Height</label>
                <input type="text" {...register("height")} className="w-full border border-gray-300 rounded-md p-2" required />
              </div>
              <div>
                <label className="block text-gray-600">Color</label>
                <input type="text" {...register("color")} className="w-full border border-gray-300 rounded-md p-2" required />
              </div>
              <div>
                <label className="block text-gray-600">Date</label>
                <input type="date" {...register("date")} className="w-full border border-gray-300 rounded-md p-2" required />
              </div>
              <div>
                <label className="block text-gray-600">Images (4 required)</label>
                <input type="file" {...register("images")} className="w-full border border-gray-300 rounded-md p-2" multiple required />
              </div>
            </div>

            {/* <!-- Shelter Information Section --> */}
            <h3 className="text-xl font-semibold text-gray-600 mb-4">Shelter Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-600">Shelter Name</label>
                <input type="text" {...register("shelter_name")} className="w-full border border-gray-300 rounded-md p-2" required />
              </div>
              <div>
                <label className="block text-gray-600">Shelter Email</label>
                <input type="email" {...register("shelter_email")} className="w-full border border-gray-300 rounded-md p-2" required />
              </div>
              <div>
                <label className="block text-gray-600">location</label>
                <input type="text" {...register("location")} className="w-full border border-gray-300 rounded-md p-2" required />
              </div>
              <div>
                <label className="block text-gray-600">Shelter Image</label>
                <input type="file" {...register("shelter_photo")} className="w-full border border-gray-300 rounded-md p-2" required />
              </div>
            </div>

            {/* <!-- Additional Information Section --> */}
            <h3 className="text-xl font-semibold text-gray-600 mb-4">Additional Information</h3>
            <div className="mb-6">
              <label className="block text-gray-600">Description</label>
              <textarea {...register("description")} className="w-full border border-gray-300 rounded-md p-2" rows="3" required></textarea>
            </div>

            {/* <!-- Behavior Section --> */}
            <h3 className="text-xl font-semibold text-gray-600 mb-4">Behavior</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <label className="flex items-center">
                  <input type="checkbox" {...register("good_with_kids")} className="mr-2" />
                  Good with kids
                </label>
              </div>
              <div>
                <label className="flex items-center">
                  <input type="checkbox" {...register("good_with_other_pets")} className="mr-2" />
                  Good with other pets
                </label>
              </div>
              <div>
                <label className="flex items-center">
                  <input type="checkbox" {...register("house_trained")} className="mr-2" />
                  House trained
                </label>
              </div>
            </div>

            {/* <!-- Compatibility Section --> */}
            <h3 className="text-xl font-semibold text-gray-600 mb-4">Compatibility</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-600">Best Suited For</label>
                <input type="text" {...register("best_suited_for")} className="w-full border border-gray-300 rounded-md p-2" required />
              </div>
              <div>
                <label className="block text-gray-600">Exercise Needs</label>
                <input type="text" {...register("exercise_needs")} className="w-full border border-gray-300 rounded-md p-2" required />
              </div>
              <div>
                <label className="block text-gray-600">Temperament</label>
                <input type="text"  {...register("temperament")} className="w-full border border-gray-300 rounded-md p-2" required />
              </div>
            </div>

            <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-md font-semibold hover:bg-blue-600">
              Submit
            </button>
          </form>
        </div>

      </Modal>
    </>
  );
};

export default MyAdoption;
