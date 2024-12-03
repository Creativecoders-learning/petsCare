import { useParams } from "react-router-dom";
import useVetsData from "../../../Hooks/api/useVetsData";
import Breadcrumb from "../../Shared/Breadcrumb/Breadcrumb";
import LeftSide from "../../UI/VetDetail/LeftSide";
import { useState } from "react";
import Modal from "../../UI/Modal";
import UseAuth from "../../../Hooks/UseAuth";
import DoctorSchedule from "../../UI/VetDetail/DoctorSchedule";
import Slot from "../../UI/VetDetail/Slot";

const VetsDetails = () => {
  const { user } = UseAuth();
  const [openModal, setOpenModal] = useState(false);
  const [selectedAppointmentType, setSelectedAppointmentType] = useState(null);

  const { id } = useParams();
  const { vets } = useVetsData();

  const vet = vets?.find((item) => item?._id === id);

  if (!vet) {
    return <p>Vet not found</p>;
  }

  // book now button
  const handleBookNow = () => {
    setOpenModal(true);
  };

  // Appointment type button c
  const handleAppointmentTypeClick = (type) => {
    setSelectedAppointmentType(type);
  };

  return (
    <div>
      <Breadcrumb title={"Vets Details"} />
      <div className="lg:mx-20 flex flex-col lg:flex-row gap-8 mt-16 mb-20">
        <div className="w-full lg:w-[70%]">
          <LeftSide vet={vet} />
        </div>

        <div className="w-full lg:w-[30%] px-6 lg:px-0">
  {/* Header Section */}
  <div className="bg-secondaryLight p-5 rounded-lg shadow-md">
    <h2 className="font-bold text-xl text-primary mb-3">
      Book Your Appointment
    </h2>
    <p className="text-gray-600 text-sm">
      Select your location, preferred time slot, and consultation method to proceed.
    </p>
  </div>

  {/* Appointment Type Section */}
  <div className="mt-6">
    <h3 className="font-semibold text-lg text-gray-700 mb-4">
      Choose Appointment Type
    </h3>
    <div className="grid grid-cols-3 gap-4">
      {["New", "Follow Up", "Report Show"].map((type) => (
        <button
          key={type}
          onClick={() => handleAppointmentTypeClick(type)}
          className={`py-3 rounded-lg text-sm font-medium shadow-md transition-transform ${
            user
              ? selectedAppointmentType === type
                ? "bg-primary text-white scale-105"
                : "bg-secondaryLight text-primary hover:bg-primary hover:text-white"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
          disabled={!user}
        >
          {type}
        </button>
      ))}
    </div>
  </div>

  {/* Book Now Button */}
  <div className="mt-10">
    <button
      onClick={handleBookNow}
      className={`w-full py-3 rounded-lg font-semibold text-lg shadow-md transition-all ${
        user && selectedAppointmentType
          ? "bg-primary text-white hover:bg-primaryLight"
          : "bg-gray-300 text-gray-500 cursor-not-allowed"
      }`}
      disabled={!user || !selectedAppointmentType}
    >
      {user
        ? selectedAppointmentType
          ? "Confirm Appointment"
          : "Select Appointment Type"
        : "Login to Book"}
    </button>
  </div>
</div>

      </div>

      {openModal && (
        <Modal primary={true} openModal={openModal} setOpenModal={setOpenModal}>
          {/* <Slot /> */}
          <DoctorSchedule doctor={vet} />
        </Modal>
      )}
    </div>
  );
};

export default VetsDetails;
