import { FaVideo, FaComment } from "react-icons/fa";
import PrimaryTitle from "../../../Components/UI/PrimaryTitle";

const Appointments = () => {
      // Sample appointment data
      const appointments = [
            {
                  id: 1,
                  petImage: "https://example.com/pet1.jpg", // Replace with actual image URLs
                  petName: "Buddy",
                  petType: "Dog",
                  date: "2024-11-05",
                  time: "10:00 AM",
            },
            {
                  id: 2,
                  petImage: "https://example.com/pet2.jpg",
                  petName: "Whiskers",
                  petType: "Cat",
                  date: "2024-11-06",
                  time: "11:30 AM",
            },
            {
                  id: 3,
                  petImage: "https://example.com/pet3.jpg",
                  petName: "Goldie",
                  petType: "Fish",
                  date: "2024-11-07",
                  time: "09:00 AM",
            },
      ];

      // Placeholder functions for video call and messaging
      const handleVideoCall = (id) => {
            console.log(`Starting video call for appointment ID: ${id}`);
            // Replace with actual video call functionality
      };

      const handleMessage = (id) => {
            console.log(`Starting chat for appointment ID: ${id}`);
            // Replace with actual messaging functionality
      };

      return (
            <div className="p-8 font-inter">
                  <PrimaryTitle titleStyle="text-primaryBold font-semibold">Appointments</PrimaryTitle>
                  <div className="custom-scrollbar h-[78vh] overflow-y-auto shadow-myCustomShadow bg-white rounded-lg">
                        <table className="min-w-full border border-gray-200">
                              <thead>
                                    <tr className="bg-primary text-white text-left">
                                          <th className="p-4 font-semibold">#</th>
                                          <th className="p-4 font-semibold">Image</th>
                                          <th className="p-4 font-semibold">Pet Name</th>
                                          <th className="p-4 font-semibold">Pet Type</th>
                                          <th className="p-4 font-semibold">Date</th>
                                          <th className="p-4 font-semibold">Time</th>
                                          <th className="p-4 font-semibold text-center">Actions</th>
                                    </tr>
                              </thead>
                              <tbody className="text-myGray">
                                    {appointments.map((appointment, index) => (
                                          <tr
                                                key={appointment?.id}
                                                className={`${index % 2 === 0 ? "bg-primaryLight bg-opacity-10" : "bg-white"}`}
                                          >
                                                <td className="p-4 font-medium">{index + 1}</td>
                                                <td className="p-4">
                                                      <img
                                                            src={appointment?.petImage}
                                                            alt={appointment?.petName}
                                                            className="w-12 h-12 object-cover rounded-full"
                                                      />
                                                </td>
                                                <td className="p-4">{appointment?.petName}</td>
                                                <td className="p-4">{appointment?.petType}</td>
                                                <td className="p-4">{appointment?.date}</td>
                                                <td className="p-4">{appointment?.time}</td>
                                                <td className="p-4 flex justify-center gap-2">
                                                      <button
                                                            onClick={() => handleVideoCall(appointment?.id)}
                                                            className="p-2 text-white bg-blue-500 rounded-full hover:bg-blue-600 transition duration-150"
                                                      >
                                                            <FaVideo /> {/* Video Call Icon */}
                                                      </button>
                                                      <button
                                                            onClick={() => handleMessage(appointment?.id)}
                                                            className="p-2 text-white bg-gray-500 rounded-full hover:bg-gray-600 transition duration-150"
                                                      >
                                                            <FaComment /> {/* Message Icon */}
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

export default Appointments;
