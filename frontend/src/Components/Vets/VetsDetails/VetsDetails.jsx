import { useParams } from "react-router-dom";
import useVetsData from "../../../Hooks/api/useVetsData";
import Breadcrumb from "../../Shared/Breadcrumb/Breadcrumb";
import LeftSide from "../../UI/VetDetail/LeftSide";
import { useState } from "react";
import Modal from "../../UI/Modal";
import UseAuth from "../../../Hooks/UseAuth";
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
      <div className="mx-20 flex flex-col lg:flex-row gap-8 mt-16 mb-20">
        <div className="w-full lg:w-[70%] border">
          <LeftSide vet={vet} />
        </div>

        <div className="w-full lg:w-[30%]">
          <div>
            <h2 className="font-bold">
              Select Location, Time Slot, and Consultation Method
            </h2>
            <div>
              <h2 className="font-semibold text-gray-500 mt-5">
                Select Appointment Type
              </h2>
              <div className="mt-5 flex items-center gap-3">
                {["New", "Follow Us", "Report Show"].map((type) => (
                  <button
                    key={type}
                    onClick={() => handleAppointmentTypeClick(type)}
                    className={`w-[140px] py-2 ${user
                        ? selectedAppointmentType === type
                          ? "bg-primary text-white"
                          : "border border-primary text-black hover:bg-black hover:text-white"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                      }`}
                    disabled={!user}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8">
            <button
              onClick={handleBookNow}
              className={`w-full py-3 rounded-xl mt-5 ${user && selectedAppointmentType
                  ? "bg-primary text-white hover:bg-black"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              disabled={!user || !selectedAppointmentType}
            >
              {user ? (selectedAppointmentType ? "Book Now" : "Select Appointment Type") : "Login to Book"}
            </button>
          </div>
        </div>
      </div>

      {openModal && (
        <Modal primary={true} openModal={openModal} setOpenModal={setOpenModal}>
          <Slot />
        </Modal>
      )}
    </div>
  );
};

export default VetsDetails;
