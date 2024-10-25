/* eslint-disable react/prop-types */
import { FaArrowRight } from "react-icons/fa";


const AdoptionCard = ({ item }) => {
  return (
    <div className="max-w-[350px] mx-auto space-y-4 rounded border p-6 md:w-[350px]  min-h-[300px]">
      {/* Card Image */}
      <img
        width={350}
        height={190}
        className="h-[190px] w-[350px] rounded-2xl bg-gray-400"
        src={item?.image}
        alt="card navigate ui"
      />
      {/* Card Heading */}
      <div className="mt-5 flex items-start justify-between">
        <div>
          <div className="space-y-2">
            <h2 className="font-medium text-slate-800 sm:text-lg md:text-xl dark:text-black">
              {item?.breed}
            </h2>
           <div className="flex item-center">
           <h2 className="font-medium text-left text-black md:text-base dark:text-black">
              Age: {item?.age}
            </h2>
           </div>
          </div>
        </div>

        <button className="rounded-full bg-slate-800 px-6 py-3 text-[12px] font-semibold text-white hover:bg-slate-900 sm:text-sm md:text-base">
          <FaArrowRight/>
        </button>
      </div>
    </div>
  );
};

export default AdoptionCard;
