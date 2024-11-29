import { FaLocationDot } from "react-icons/fa6";
import { WiTime4 } from "react-icons/wi";

const LeftSide = ({ vet }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {/* Image Section */}
      <div className="relative">
        <img
          className="w-full h-[300px] sm:h-[400px] object-cover"
          src={vet.image}
          alt={vet.name}
        />
        <div className="absolute bottom-4 left-4 bg-primary text-white py-1 px-4 rounded">
          {vet.category}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Name & Details */}
        <h2 className="text-3xl font-bold text-primaryBold">{vet.name}</h2>
        <h3 className="text-lg font-medium text-primary mt-1">{vet.institute}</h3>
        <p className="text-gray-600 mt-2">{vet.expertise.join(", ")}</p>

        {/* Location & Availability */}
        <div className="flex flex-col sm:flex-row sm:justify-between mt-5 text-gray-500">
          <div className="flex items-center gap-2">
            <FaLocationDot className="text-xl text-primary" />
            <span>{vet.instituteLocation}</span>
          </div>
          <div className="flex items-center gap-2 mt-3 sm:mt-0">
            <WiTime4 className="text-2xl text-primary" />
            <span>Available</span>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-gray-100 p-6">
        <h3 className="text-xl font-semibold text-primaryBold mb-3">About</h3>
        <p className="text-gray-600">{vet.about}</p>
      </div>

      {/* Additional Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary mb-4 underline underline-offset-4">
          Additional Information
        </h3>

        {/* Work Experience */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-primaryBold">Work Experience</h4>
          <ul className="list-disc pl-5 mt-2 text-gray-600">
            {vet.work_experiences.map((experience, index) => (
              <li key={index}>{experience}</li>
            ))}
          </ul>
        </div>

        {/* Education */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-primaryBold">Education</h4>
          <ul className="list-disc pl-5 mt-2 text-gray-600">
            {vet.education.map((edu, index) => (
              <li key={index}>{edu}</li>
            ))}
          </ul>
        </div>

        {/* Awards */}
        <div>
          <h4 className="text-lg font-semibold text-primaryBold">Awards</h4>
          <ul className="list-disc pl-5 mt-2 text-gray-600">
            {vet?.awards.map((award, index) => (
              <li key={index}>{award}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
