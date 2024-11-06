
const Slot = () => {
  return (
    <div className="p-5">
      <h2 className="text-2xl font-semibold mb-4">Select a Time Slot</h2>

      <div className="space-y-4">
        {/* Slot 4 */}
        <div className="flex justify-between items-center bg-gray-100 p-4 rounded-md">
          <span className="text-lg font-semibold">Slot 4</span>
          <span className="text-gray-500">9:00 AM - 10:00 AM</span>
          <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-black">
            Book Slot 4
          </button>
        </div>

        {/* You can add more slots here as needed */}

      </div>
    </div>
  );
};

export default Slot;
