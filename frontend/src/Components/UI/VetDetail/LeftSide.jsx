import { FaLocationDot } from "react-icons/fa6";
import { WiTime4 } from "react-icons/wi";
const LeftSide = ({ vet }) => {
  return (
    <div>
      <img className="w-full h-[500px]" src={vet.image} alt={vet.name} />

      <div className="flex items-center justify-between px-5">
        <div>
          <h2 className="mt-6 text-3xl font-bold mb-2">{vet.name}</h2>
          <h2 className="text-xl font-semibold">{vet.institute}</h2>
          <h2 className="text-xl">{vet.expertise.join(", ")}</h2>
        </div>
        <div className="flex items-center gap-20 font-bold text-gray-500">
          <div>
            <p className="flex items-center gap-2">
              <FaLocationDot className="text-2xl text-primary" />
              {vet.instituteLocation}
            </p>
          </div>
          <div>
            <p className="flex items-center gap-2">
              <WiTime4 className="text-2xl text-primary" /> Availability
            </p>
          </div>
        </div>
      </div>

      <p className="text-gray-500 mt-10 px-5">{vet.about}</p>

      <div className="px-6 mt-10">
        <h2 className="underline text-xl font-semibold underline-offset-8 underline-primary">
          Info
        </h2>

        {/* Work Experience */}
        <div className="mt-7">
          <h2 className="text-xl font-semibold mb-2">Work Experience</h2>
          <ul className="ml-5">
            {vet.work_experiences.map((experience, index) => (
              <li key={index} className="list-disc">
                {experience}
              </li>
            ))}
          </ul>
        </div>

        {/* Education */}
        <div className="mt-7">
          <h2 className="text-xl font-semibold mb-3">Education</h2>
          <ul className="ml-5">
            {vet.education.map((edu, index) => (
              <li key={index} className="list-disc">
                {edu}
              </li>
            ))}
          </ul>
        </div>

        {/* Awards */}
        <div className="mt-7">
          <h2 className="text-xl font-semibold mb-3">Awards</h2>
          <ul className="ml-5 mb-4">
            <li className="list-disc">{vet?.awards[0]}</li>
            <li className="list-disc">{vet?.awards[1]}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
