import { FaArrowRight } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";

const MeetPets = ({item}) => {
    return (
      <div className=" min-h-[300px] mx-auto space-y-4 p-3 text-center rounded  duration-500 flex flex-col items-center justify-center ">
      {/* Card Image */}
      <img
        width={500}
        height={500}
        className="size-64 rounded-full bg-gray-400 bg-cover"
        src={item?.image[0]}
        alt="card navigate ui"
      />
      {/* Card Heading */}
      <div className="pt-3 flex flex-col items-center justify-center space-y-5">
        
          <div className="space-y-2">
            <div className="flex items-center justify-center gap-x-1 md:text-sm font-nunito ">
              <SlCalender className="text-red-600" />
              <h2 className="font-medium text-black  dark:text-black">
                Age: {item?.age}
              </h2>
            </div>
            <h2 className="text-[#0A453A] hover:text-red-600 sm:text-lg md:text-2xl font-nunito font-extrabold dark:text-black">
              {item?.breed}
            </h2>
            <p className="w-[280px]">{item?.description.length > 80 ? item?.description.slice(0,60) : item?.description}... </p>
          </div>

        <Link to={`/adoptionDetails/${item.id}`}>
          <button className="rounded-full flex items-center gap-x-2  px-6 py-1 text-[12px] font-extrabold text-primary sm:text-sm md:text-base">
            Read More <FaArrowRight />
          </button>
        </Link>
      </div>
    </div>
    );
};

export default MeetPets;