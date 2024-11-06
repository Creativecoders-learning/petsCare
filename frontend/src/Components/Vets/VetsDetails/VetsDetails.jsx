import { useParams } from "react-router-dom";
import useVetsData from "../../../Hooks/api/useVetsData";

import Breadcrumb from "../../Shared/Breadcrumb/Breadcrumb";
import LeftSide from "../../UI/VetDetail/LeftSide";
import { useState } from "react";
import Modal from "../../UI/Modal";
import UseAuth from "../../../Hooks/UseAuth";
import VetsSlot from "../../UI/VetDetail/VetsSlot";
import Slot from "../../UI/VetDetail/Slot";

const VetsDetails = () => {
  const { user } = UseAuth();
  const [openModal, setOpenModal] = useState(false);
  const { id } = useParams();
  const idInt = parseInt(id);
  const { vets } = useVetsData();
  const vet = vets?.find((item) => item.id === idInt);

  if (!vet) {
    return <p>Vet not found</p>;
  }

  // book now button

  const handleBookNow = () => {
    setOpenModal(true);
  };

  return (
    <div>
      <Breadcrumb title={"Vets Details"} />
      <div className="mx-20 flex flex-col lg:flex-row gap-8 mt-16 mb-20">
        <div className="w-full lg:w-[70%] border">
          <LeftSide vet={vet} />
        </div>

        {/* Vets Form Section */}
        <div className="w-full lg:w-[30%]">
          <div>
            <h2 className="font-bold">
              Select Location, Time Slot Consultation Method
            </h2>
            <div className="mt-8">
              <div className="mb-5">
                <h2 className="font-semibold text-gray-500">
                  Select Appointment Type
                </h2>
                <div className="mt-5 flex items-center gap-3">
                  <button
                    className={`w-[140px] py-2 ${
                      user
                        ? "focus:bg-primary border border-primary text-black hover:border-none hover:text-white focus:text-white hover:bg-black"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    New{" "}
                  </button>
                  <button
                    className={`w-[140px] py-2 ${
                      user
                        ? "focus:bg-primary border border-primary text-black hover:border-none hover:text-white focus:text-white hover:bg-black"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    Follow Us{" "}
                  </button>
                  <button
                    className={`w-[140px] py-2 ${
                      user
                        ? "focus:bg-primary border border-primary text-black hover:border-none hover:text-white focus:text-white hover:bg-black"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    Report Show{" "}
                  </button>
                </div>
                <div className="mt-10 ">
                  <VetsSlot
                    slot={{ name: "Slot 4", time: "11:00 AM - 12:00 PM" }}
                  ></VetsSlot>
                </div>
              </div>
              <button
                onClick={handleBookNow}
                className={`w-full py-3 rounded-xl mt-5 ${
                  user
                    ? "bg-primary text-white hover:bg-black"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
                disabled={!user}
              >
                {/* Book Now */}
                {user ? "Book Now" : "Login to Book"}
              </button>
            </div>
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
