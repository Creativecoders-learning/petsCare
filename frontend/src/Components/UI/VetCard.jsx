import { WiTime4 } from "react-icons/wi";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Button from "./Button";
const VetCard = ({ vet }) => {
  const {
    id,
    name,
    date,
    image,
    degrees,
    expertise,
    experience,
    institute,
    instituteLocation,
  } = vet || {};
  console.log(vet)
  return (
    <div className="md:mx-8 lg:mx-0 mx-5">
      <div className=" p-4 shadow-xl dark:bg-gray-900 dark:text-gray-100">
        <div className="space-y-4">
          <div className="space-y-2">
            <img
              src={image}
              alt=""
              className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            />
            <div className="flex items-center text-lg text-gray-600">
              <span>Experience: {experience} </span>
            </div>
          </div>
          <div className="space-y-2">
            <a rel="noopener noreferrer" href="#" className="block">
              <h3 className="text-xl font-semibold dark:text-violet-400">
                {name}
              </h3>
            </a>
            <p className="leadi dark:text-gray-400">Expertise {expertise}</p>
            <p className="leadi dark:text-gray-400">Institute: {institute}</p>
            <p className="leadi dark:text-gray-400 ">Degrees: {degrees}</p>
            <div className="flex items-center  gap-16  font-bold text-gray-500 pt-4">
              <p className="leadi dark:text-gray-400 flex items-center gap-2">
                <FaLocationDot className="text-2xl text-primary" />{" "}
                {instituteLocation}
              </p>
              <p className="leadi dark:text-gray-400 flex items-center gap-2">
                <WiTime4 className="text-2xl text-primary" /> Availability
              </p>
            </div>
            <div className="flex flex-col lg:flex-row md:flex-row items-center justify-end gap-5 pt-10 pb-5">
              {/* <input type="date" name="" id="" className="border py-2 px-3" /> */}
              <h2 className="text-[18px]"><span className="font-bold">Date:</span> { date}</h2>
              <Link to={`/vets-details/${id}`}>
                <Button secondary> Book Appointment</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VetCard;
