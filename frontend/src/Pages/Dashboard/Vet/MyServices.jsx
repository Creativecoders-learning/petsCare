import PrimaryTitle from "../../../Components/UI/PrimaryTitle";
import { FaTrash, FaEdit } from "react-icons/fa";
import useVetServices from "../../../Hooks/api/useVetServices";

const MyServices = () => {

      const email = ""; // Replace with the desired email
      const { vetServices } = useVetServices(email);


      const handleEditService = (id) => {
            console.log(`Editing service with ID: ${id}`);
            // Place edit functionality here
      };

      const handleDeleteService = (id) => {
            console.log(`Deleting service with ID: ${id}`);
            // Place delete functionality here
      };

      return (
            <div className="p-8 font-inter">
                  <PrimaryTitle titleStyle="text-primaryBold font-semibold">My Services</PrimaryTitle>

                  <div className="custom-scrollbar h-[80vh] overflow-y-auto shadow-myCustomShadow bg-white rounded-lg">
                        <table className="min-w-full border border-gray-200">
                              <thead>
                                    <tr className="bg-primary text-white text-left">
                                          <th className="p-4 font-semibold">#</th>
                                          <th className="p-4 font-semibold">Vet Name</th>
                                          <th className="p-4 font-semibold">Email</th>
                                          <th className="p-4 font-semibold">Service Type</th>
                                          <th className="p-4 font-semibold">Price</th>
                                          <th className="p-4 font-semibold text-center">Actions</th>
                                    </tr>
                              </thead>
                              <tbody className="text-myGray">
                                    {vetServices?.map((service, index) => (
                                          <tr key={service?.id} className={`${index % 2 === 0 ? "bg-primaryLight bg-opacity-10" : "bg-white"}`}>
                                                <td className="p-4 font-medium">{index + 1}</td>
                                                <td className="p-4 font-medium">{service?.vetName}</td>
                                                <td className="p-4">{service?.email}</td>
                                                <td className="p-4">{service?.serviceType}</td>
                                                <td className="p-4">{service?.price}</td>
                                                <td className="p-4 flex justify-center gap-2">
                                                      <button
                                                            onClick={() => handleEditService(service?.id)}
                                                            className="p-2 text-white bg-secondary rounded-full hover:bg-primary transition duration-150"
                                                      >
                                                            <FaEdit />
                                                      </button>
                                                      <button
                                                            onClick={() => handleDeleteService(service?.id)}
                                                            className="p-2 text-white bg-red-500 rounded-full hover:bg-red-600 transition duration-150"
                                                      >
                                                            <FaTrash />
                                                      </button>
                                                </td>
                                          </tr>
                                    ))}
                              </tbody>
                        </table>
                  </div>
                  {vetServices?.length === 0 && (
                        <p className="mt-4 text-center text-gray-600">No services found.</p>
                  )}
            </div>
      );
};

export default MyServices;
