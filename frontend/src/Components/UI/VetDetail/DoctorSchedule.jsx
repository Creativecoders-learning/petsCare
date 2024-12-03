import { useState } from 'react';
import { FaRegBookmark } from "react-icons/fa";
import { IoBagCheck, IoCheckmarkSharp } from "react-icons/io5";
import Checkout from '../../../Pages/Checkout/Checkout';
import useMyServices from '../../../Hooks/api/useMyServices';

const DoctorSchedule = ({ doctor }) => {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [bookedSlot, setBookedSlot] = useState(null);
  const [showCheckout, setShowCheckout] = useState(false);
  const [confirmedSlots, setConfirmedSlots] = useState({}); // To track confirmed slots

  const { myServices, refresh } = useMyServices();

  // Get doctor's service from the available services
  const doctorsService = myServices?.find(service => service?.vetEmail === doctor?.email);
  const { vetName, schedule } = doctorsService || {};

  const handleSlotClick = (slotIndex, seatIndex) => {
    const slot = doctor.schedule[slotIndex];
    if (!slot.bookedSeats[seatIndex]) {
      setBookedSlot({ slotIndex, seatIndex });
      setShowCheckout(true); // Show checkout button after selecting a slot
    }
  };

  const handleCheckoutClick = () => {
    setShowCheckout(true);
  };

  const handlePaymentSuccess = () => {
    setPaymentSuccess(true); // Set payment as successful
    setShowCheckout(false); // Hide checkout after payment
  };

  const handleConfirm = () => {
    // Send booking data to the backend (e.g., API call)
    console.log("Booking Confirmed", bookedSlot);
    const updatedSchedule = [...doctor.schedule];
    const selectedSlot = updatedSchedule[bookedSlot.slotIndex];
    selectedSlot.bookedSeats[bookedSlot.seatIndex] = true;
    setConfirmedSlots((prev) => ({
      ...prev,
      [bookedSlot.slotIndex]: true,
    }));
    setBookedSlot(null); // Reset after confirmation
    setPaymentSuccess(false); // Reset payment success
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold my-3 text-center mb-5">Select Your Slot</h2>
      <div className="mx-16">
        <img className="w-full" src="https://i.ibb.co/MsbDWtd/Line-2.png" alt="line" />
        <div className="flex items-center justify-between my-5">
          <h2 className="flex items-center gap-3 font-bold text-gray-500">
            <FaRegBookmark className="text-2xl" />
            Available
          </h2>
          <button
            onClick={handleCheckoutClick}
            className="flex items-center gap-3 font-bold text-primary border-primary border px-2 py-2 rounded hover:bg-black hover:text-white"
          >
            <IoBagCheck className="text-2xl" />
            Checkout Now
          </button>
        </div>
        <img className="w-full" src="https://i.ibb.co/MsbDWtd/Line-2.png" alt="line" />
      </div>

      {/* Slot Selection */}
      <div className="mt-10 py-5 px-5">
        {schedule?.map((slot, slotIndex) => (
          <div key={slotIndex} className="mt-5">
            <h2 className="text-[18px] text-gray-500 font-bold text-center mb-4">
              {slot.startTime} - {slot.endTime}
            </h2>
            <div className="flex items-center justify-center gap-4">
              {Array.from({ length: slot.seats }).map((_, seatIndex) => {
                const isBooked = slot.bookedSeats[seatIndex];
                return (
                  <div
                    key={seatIndex}
                    onClick={() => handleSlotClick(slotIndex, seatIndex)}
                    className={`border font-bold h-[50px] w-[100px] flex items-center justify-center ${isBooked
                        ? "bg-gray-400 text-white cursor-not-allowed"
                        : "bg-[#F7F8F8] text-gray-500 cursor-pointer"
                      }`}
                  >
                    {isBooked ? (
                      <IoCheckmarkSharp className="text-2xl" />
                    ) : (
                      `Seat ${seatIndex + 1}`
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Checkout Component */}
      {showCheckout && <Checkout onPaymentSuccess={handlePaymentSuccess} />}

      {/* Confirm Button */}
      <div className="mt-10 flex items-center justify-center">
        <button
          onClick={handleConfirm}
          disabled={!paymentSuccess || !bookedSlot} // Enable only after successful payment and slot selection
          className={`w-[250px] py-2 rounded-xl font-bold text-xl ${paymentSuccess && bookedSlot
              ? "bg-primary text-white hover:bg-black"
              : "bg-gray-400 text-gray-600 cursor-not-allowed"
            }`}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default DoctorSchedule;
