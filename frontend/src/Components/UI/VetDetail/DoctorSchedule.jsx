import { useState } from "react";

const DoctorSchedule = () => {
  const [selectedDay, setSelectedDay] = useState(""); // Selected Day
  const [selectedSlot, setSelectedSlot] = useState(null); // Selected Slot
  const [confirmedBookings, setConfirmedBookings] = useState({}); // Confirmed Bookings

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const slots = [
    "6:00am-9:00am",
    "9:00am-12:00pm",
    "1:00pm-3:00pm",
    "3:00pm-6:00pm",
  ];

  // Handle Day Selection
  const handleDaySelect = (day) => {
    setSelectedDay(day);
    setSelectedSlot(null); // Reset slot when changing the day
  };

  // Handle Slot Selection
  const handleSlotSelect = (slot) => {
    const bookings = confirmedBookings[selectedDay]?.[slot] || [];
    if (bookings.length < 4) {
      setSelectedSlot(slot);
    }
  };

  // Confirm Booking
  const handleConfirmBooking = () => {
    if (selectedDay && selectedSlot) {
      setConfirmedBookings((prev) => ({
        ...prev,
        [selectedDay]: {
          ...prev[selectedDay],
          [selectedSlot]: [
            ...(prev[selectedDay]?.[selectedSlot] || []),
            { name: "John Doe", email: "john@example.com" }, // Replace with actual user data
          ],
        },
      }));
      setSelectedSlot(null);
      alert("Booking Confirmed!");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-5">
      <h2 className="text-2xl font-bold text-center mb-5">Doctor Schedule</h2>

      {/* Day Selection */}
      <div className="flex flex-wrap justify-center gap-4 mb-5">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => handleDaySelect(day)}
            className={`px-4 py-2 rounded-lg font-medium border ${
              selectedDay === day
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Slot Selection */}
      {selectedDay && (
        <div>
          <h3 className="text-lg font-semibold text-center mb-3">
            Available Slots for {selectedDay}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {slots.map((slot) => {
              const bookings = confirmedBookings[selectedDay]?.[slot] || [];
              const isFull = bookings.length >= 4;

              return (
                <div
                  key={slot}
                  onClick={() => handleSlotSelect(slot)}
                  className={`border rounded-lg font-medium py-4 px-2 text-center cursor-pointer ${
                    isFull
                      ? "bg-gray-400 text-white cursor-not-allowed"
                      : selectedSlot === slot
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <p className="text-xl font-bold">{slot}</p>
                  <p className="text-sm">{4 - bookings.length} slots left</p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Confirm Button */}
      {selectedSlot && (
        <div className="mt-5 text-center">
          <button
            onClick={handleConfirmBooking}
            className="px-6 py-2 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600"
          >
            Confirm Booking
          </button>
        </div>
      )}
    </div>
  );
};

export default DoctorSchedule;
