import { FaRegBookmark } from "react-icons/fa6";
import { IoBagCheck, IoCheckmarkSharp } from "react-icons/io5";
import { useState } from "react";
import UseAuth from "../../../Hooks/UseAuth";
import Checkout from "../../../Pages/Checkout/Checkout";

const Slot = () => {
  const { user } = UseAuth();
  const [showCheckout, setShowCheckout] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [bookedSlot, setBookedSlot] = useState(null); // Track only one booked slot at a time
  const [confirmedSlots, setConfirmedSlots] = useState({});

  const handleCheckoutClick = () => {
    setShowCheckout((prev) => !prev);
  };

  const handlePaymentSuccess = () => {
    setPaymentSuccess(true);
  };

  const handleSlotClick = (timeSlot, slotGroup) => {
    if (!confirmedSlots[timeSlot]?.[slotGroup] && bookedSlot?.timeSlot !== timeSlot) {
      setBookedSlot({ timeSlot, slotGroup }); // Set the currently selected slot
    }
  };

  const handleConfirm = () => {
    // Confirm the selected slot and mark it as unavailable
    if (bookedSlot) {
      setConfirmedSlots((prev) => ({
        ...prev,
        [bookedSlot.timeSlot]: {
          ...(prev[bookedSlot.timeSlot] || {}),
          [bookedSlot.slotGroup]: true,
        },
      }));
      setBookedSlot(null); // Clear temporary booking
      setPaymentSuccess(false); // Reset payment status
      setShowCheckout(false); // Hide checkout section
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold my-3 text-center mb-5">Select Your Slot</h2>
      <div className="mx-16">
        <img
          className="w-full"
          src="https://i.ibb.co.com/MsbDWtd/Line-2.png"
          alt=""
        />
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
        <img
          className="w-full"
          src="https://i.ibb.co.com/MsbDWtd/Line-2.png"
          alt=""
        />
      </div>

      {/* Slot Selection */}
      <div className="mt-10 py-5 px-5">
        <div className="flex items-center justify-center gap-4">
          <h2 className="text-[18px] text-gray-500 font-bold h-[40px] w-[150px] flex items-center justify-center">
            6:00am-9:00am
          </h2>
          <h2 className="text-[18px] text-gray-500 font-bold h-[40px] w-[150px] flex items-center justify-center">
            9:00am-12:00pm
          </h2>
          <h2 className="text-[18px] text-gray-500 font-bold h-[40px] w-[150px] flex items-center justify-center">
            1:00pm-3:00pm
          </h2>
          <h2 className="text-[18px] text-gray-500 font-bold h-[40px] w-[150px] flex items-center justify-center">
            3:00pm-6:00pm
          </h2>
        </div>

        {/* Slot Groups */}
        {["6:00am-9:00am", "9:00am-12:00pm", "1:00pm-3:00pm", "3:00pm-6:00pm"].map((timeSlot, i) => (
          <div key={i} className="flex items-center justify-center gap-4 mt-5">
            {["A", "B", "C", "D"].map((slotGroup) => (
              <div
                key={slotGroup}
                onClick={() => handleSlotClick(timeSlot, slotGroup)}
                className={`border font-bold h-[50px] w-[150px] flex items-center justify-center ${
                  confirmedSlots[timeSlot]?.[slotGroup]
                    ? "bg-gray-400 text-white cursor-not-allowed"
                    : bookedSlot?.timeSlot === timeSlot && bookedSlot.slotGroup === slotGroup
                    ? "bg-primary text-white cursor-not-allowed"
                    : "bg-[#F7F8F8] text-gray-500 cursor-pointer"
                }`}
              >
                {confirmedSlots[timeSlot]?.[slotGroup] ? (
                  <IoCheckmarkSharp className="text-2xl" />
                ) : (
                  slotGroup
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Conditional Checkout Component */}
      {showCheckout && <Checkout onPaymentSuccess={handlePaymentSuccess} />}

      {/* Confirm Button */}
      <div className="mt-10 flex items-center justify-center">
        <button
          onClick={handleConfirm}
          disabled={!paymentSuccess || !bookedSlot} // Disable until payment is successful and a slot is selected
          className={`w-[250px] py-2 rounded-xl font-bold text-xl ${
            paymentSuccess && bookedSlot ? "bg-primary text-white hover:bg-black" : "bg-gray-400 text-gray-600 cursor-not-allowed"
          }`}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Slot;
