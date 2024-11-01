import { useState } from "react";
import PrimaryTitle from "../../../Components/UI/PrimaryTitle";
import useVetsData from "../../../Hooks/api/useVetsData";
import { FaTrash, FaEye } from "react-icons/fa"; // Importing the icons
import Modal from '../../../Components/UI/Modal';
import ModalContent from "../../../Components/Dashboard/Admin/VetManagement/ModalContent";

const VetManagement = () => {
      const { vets } = useVetsData();
      const [selectedVet, setSelectedVet] = useState(null); // State for selected vet
      const [openModal, setOpenModal] = useState(false); // State for modal visibility

      const handleDelete = (id) => {
            console.log("Deleting vet with id:", id);
            // Add your delete functionality here
      };

      const handleViewDetails = (vet) => {
            setSelectedVet(vet); // Set selected vet details for the modal
            setOpenModal(true); // Open modal
      };

      return (
            <div className="p-8 font-inter">
                  <PrimaryTitle titleStyle="text-primaryBold font-semibold">
                        Veterinarian Management
                  </PrimaryTitle>

                  <div className="custom-scrollbar h-[79vh] overflow-y-auto shadow-myCustomShadow bg-white rounded">
                        <table className="min-w-full">
                              <thead>
                                    <tr className="bg-primary text-white text-left">
                                          <th className="p-4 font-semibold text-center">#</th>
                                          <th className="p-4 font-semibold">Image</th>
                                          <th className="p-4 font-semibold">Name</th>
                                          <th className="p-4 font-semibold">Expertise</th>
                                          <th className="p-4 font-semibold">Experience</th>
                                          <th className="p-4 font-semibold">Institute</th>
                                          <th className="p-4 font-semibold text-center">Actions</th>
                                    </tr>
                              </thead>
                              <tbody className="text-myGray">
                                    {vets?.map((vet, index) => (
                                          <tr
                                                key={vet?.id || index}
                                                className={`${index % 2 === 0 ? "bg-primaryLight bg-opacity-10" : "bg-white"}`}
                                          >
                                                <td className="p-4 text-center font-medium">{index + 1}</td>
                                                <td className="p-4">
                                                      <img
                                                            src={vet?.image}
                                                            alt={vet?.name}
                                                            className="w-12 h-12 rounded-full object-cover mx-auto"
                                                      />
                                                </td>
                                                <td className="p-4 font-medium">{vet?.name}</td>
                                                <td className="p-4">{vet?.expertise}</td>
                                                <td className="p-4">{vet?.experience}</td>
                                                <td className="p-4">{vet?.institute}</td>
                                                <td className="p-4 flex items-center justify-center space-x-3">
                                                      <button
                                                            onClick={() => handleViewDetails(vet)}
                                                            className="p-2 text-white bg-secondary rounded-full hover:bg-primary transition duration-150"
                                                            aria-label="View Details"
                                                      >
                                                            <FaEye />
                                                      </button>
                                                      <button
                                                            onClick={() => handleDelete(vet?.id)}
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

                  {/* Conditionally render the details modal */}
                  {openModal && (
                        <Modal primary={true} openModal={openModal} setOpenModal={setOpenModal}>
                              <ModalContent selectedVet={selectedVet}/>

                        </Modal>
                  )}
            </div>
      );
};

export default VetManagement;
