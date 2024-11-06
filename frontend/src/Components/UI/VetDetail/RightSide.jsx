import UseAuth from "../../../Hooks/UseAuth";

const RightSide = ({handleBookNow}) => {
    const {user}=UseAuth();

   
    return (
        <div>
        <h2 className="font-bold">
          Select Location, Time Slot Consultation Method
        </h2>
        <div className="mt-8">
          <button
          onClick={handleBookNow}
             className={`w-full py-3 rounded-xl mt-5 ${user ? 'bg-primary text-white hover:bg-black' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
             disabled={!user}
          >
            {/* Book Now */}
            {user ? 'Book Now' : 'Login to Book'}
          </button>
        </div>
      </div>
    );
};

export default RightSide;