import { WiTime4 } from "react-icons/wi";
import { FaLocationDot } from "react-icons/fa6";
const VetsCard = ({vet}) => {
    const {name,image, 
        degrees,
        expertise, 
        experience,
        institute, 
        instituteLocation}=vet || {};
    return (
        <div className="md:mx-8 lg:mx-0 mx-5">
            <div className=" p-4 shadow-xl dark:bg-gray-900 dark:text-gray-100">
	<div className="flex justify-between pb-4 border-bottom">
		<div className="flex items-center">
			<a rel="noopener noreferrer" href="#" className="mb-0 capitalize dark:text-gray-100 font-bold">{name}</a>
		</div>
		
	</div>
	<div className="space-y-4">
		<div className="space-y-2">
			<img src={image} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
			<div className="flex items-center text-lg text-gray-600">
				<span>Experience: {experience} </span>
			</div>
		</div>
		<div className="space-y-2">
			<a rel="noopener noreferrer" href="#" className="block">
				<h3 className="text-xl font-semibold dark:text-violet-400">{expertise}</h3>
			</a>
			<p className="leadi dark:text-gray-400">Institute: {institute}</p>
			<p className="leadi dark:text-gray-400 ">Degrees: {degrees}</p>
            <div className="flex items-center  gap-16  font-bold text-gray-500 pt-4">
            <p className="leadi dark:text-gray-400 flex items-center gap-2"><FaLocationDot className="text-2xl text-[#3b82f6]" /> {instituteLocation}</p>
			<p className="leadi dark:text-gray-400 flex items-center gap-2"><WiTime4 className="text-2xl text-[#3b82f6]" /> Availability</p>
            </div>
            <div className="flex flex-col lg:flex-row md:flex-row items-center justify-end gap-5 pt-10 pb-5">
            <input type="date" name="" id="" className="border py-2 px-3" />
            <button type="button" className="px-5 py-3 font-semibold border rounded border-[#3b82f6] text-[#3b82f6]">Book Appointment</button>
            
            </div>
		</div>
	</div>
</div>
        </div>
    );
};

export default VetsCard;