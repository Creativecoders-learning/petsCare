import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import PrimaryTitle from "../../../Components/UI/PrimaryTitle";
import usePatientsData from "../../../Hooks/api/usePatientData";

const Patients = () => {
  const { patients } = usePatientsData();

  const handleChatClick = (id) => {
    console.log("Chat with patient ID:", id);
    // Additional chat handling logic goes here
  };

  return (
    <div className="p-8 font-inter">
      <PrimaryTitle titleStyle="text-primaryBold font-semibold">
        My Patients
      </PrimaryTitle>
      <div className="custom-scrollbar overflow-y-auto shadow-myCustomShadow bg-white rounded">
        <table className="min-w-full">
          <thead>
            <tr className="bg-primary text-white text-left">
              <th className="p-4 font-semibold">#</th>
              <th className="p-4 font-semibold">Image</th>
              <th className="p-4 font-semibold">Patient Name</th>
              <th className="p-4 font-semibold">Email & Location</th>
              <th className="p-4 font-semibold">Species</th>
              <th className="p-4 font-semibold">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {patients?.map((patient, index) => (
              <tr
                key={patient?.id}
                className={`${
                  index % 2 === 0 ? "bg-primaryLight bg-opacity-10" : "bg-white"
                }`}
              >
                <td className="text-base p-4 font-medium">{index + 1}</td>
                <td className="p-4">
                  <img
                    src={patient?.image}
                    alt={patient?.patientName}
                    className="w-12 h-12 object-cover rounded-md shadow-md"
                  />
                </td>
                <td className="text-base p-4 font-medium">
                  {patient?.patientName}
                </td>
                <td className="text-base p-4">
                  <p>{patient?.email}</p>
                  <span className="text-gray-500 text-sm">
                    {patient?.location}
                  </span>
                </td>
                <td className="text-base p-4">{patient?.species}</td>
                <td className="text-base p-4 text-center">
                  <button
                    onClick={() => handleChatClick(patient?.id)}
                    className="text-primary hover:text-primaryDark text-2xl"
                  >
                    <IoChatbubbleEllipsesOutline />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Patients;
