import '../VetsBanner/vetsBanner.css'
import { FaSearch } from "react-icons/fa";
const VetsBanner = () => {
    return (
        <div
        className="min-h-[80vh] vets-banner-bg "
      >
        <div className=' '>
        <div className="flex items-center justify-center lg:pt-48 md:pt-20 pt-20 ">
          <div className="flex lg:gap-5 md:gap-5 gap-3">
            <div className="relative">
              <input
                className=" lg:w-[600px] md:w-[400px] w-[250px] py-4 rounded-lg pl-16 font-semibold"
                type="search"
                name=""
                id=""
                placeholder="Search doctors"
              />
              <div className="absolute top-[20px] left-4">
                <FaSearch className="text-[#3b82f6] text-2xl" />
              </div>
            </div>
            <div className="">
              <button
                type="button"
                className="px-8 py-3 rounded bg-[#3b82f6] text-white font-bold text-xl"
              >
                Search
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
      
    );
};

export default VetsBanner;