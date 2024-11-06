import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';  // Import styles for the calendar
import Slot from './Slot';  // Import the Slot component
import Modal from "../../UI/Modal"; // Assume you have a Modal component
import UseAuth from "../../../Hooks/UseAuth";

const VetsSlot = () => {
  const { user } = UseAuth(); // Assuming you're using a custom hook for authentication
  const [date, setDate] = useState(new Date()); // Date selected by the user
  const [openModal, setOpenModal] = useState(false); // To open the modal when a slot is selected

  // Available slots for each date (example)
  const slots = {
    '2024-11-10': [
      { name: 'Slot 1', time: '8:00 AM - 9:00 AM' },
      { name: 'Slot 2', time: '9:00 AM - 10:00 AM' },
      { name: 'Slot 3', time: '10:00 AM - 11:00 AM' },
      { name: 'Slot 4', time: '11:00 AM - 12:00 PM' }, // Slot 4
    ],
    '2024-11-11': [
      { name: 'Slot 1', time: '9:00 AM - 10:00 AM' },
      { name: 'Slot 2', time: '10:00 AM - 11:00 AM' },
      { name: 'Slot 3', time: '11:00 AM - 12:00 PM' },
    ]
  };

  // Handle calendar date change
  const handleDateChange = (date) => {
    setDate(date);
  };

  // Handle the Book Now button click (to open the modal)
  const handleBookNow = (slot) => {
    if (!user) {
      alert('You must be logged in to book a slot!');
      return;
    }
    setOpenModal(true);
  };

  // Get formatted date (YYYY-MM-DD)
  const getFormattedDate = (date) => {
    return date.toISOString().split('T')[0];  // Get the date in "YYYY-MM-DD" format
  };

  const formattedDate = getFormattedDate(date);
  const availableSlots = slots[formattedDate] || [];

  return (
    <div className=''>
      <h2 className="text-xl font-bold mb-4">Select a Date</h2>
      <Calendar
        onChange={handleDateChange}
        value={date}
        minDate={new Date()}
      />
      
      <div className="mt-4">
        <div className="space-y-4">
          {availableSlots.length > 0 ? (
            availableSlots.map((slot, index) => (
              <div key={index} className="flex justify-between items-center bg-gray-100 p-4 rounded-md">
                <span className="text-lg font-semibold">{slot.name}</span>
                <span className="text-gray-500">{slot.time}</span>
                <button
                  className="bg-primary text-white px-4 py-2 rounded-md hover:bg-black"
                  onClick={() => handleBookNow(slot)}
                >
                  Book {slot.name}
                </button>
              </div>
            ))
          ) : (
            <p>No available slots for this date.</p>
          )}
        </div>
      </div>

      {openModal && (
        <Modal primary={true} openModal={openModal} setOpenModal={setOpenModal}>
          <Slot slot={availableSlots[0]} /> {/* Pass the selected slot to the Slot component */}
        </Modal>
      )}
    </div>
  );
};

export default VetsSlot;
