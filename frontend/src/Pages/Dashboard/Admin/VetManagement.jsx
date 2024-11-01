import { useState } from "react";
import PrimaryTitle from "../../../Components/UI/PrimaryTitle";
import useVetsData from "../../../Hooks/api/useVetsData";
import { FaTrash, FaEye } from "react-icons/fa"; // Importing the icons
import Modal from '../../../Components/UI/Modal';

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
                              <div className="w-full max-w-3xl rounded-lg">
                                    <PrimaryTitle titleStyle="text-primaryBold font-semibold">
                                          Veterinarian Details
                                    </PrimaryTitle>
                                    {selectedVet && (
                                          <div className="space-y-4">
                                                {/* Image and Basic Info */}
                                                <div className="flex items-center space-x-6">
                                                      <img
                                                            src={selectedVet.image}
                                                            alt={selectedVet.name}
                                                            className="w-24 h-24 rounded-full object-cover shadow-md"
                                                      />
                                                      <div>
                                                            <p className="text-lg font-semibold text-gray-700">{selectedVet.name}</p>
                                                            <p className="text-base text-gray-600"><strong>Expertise:</strong> {selectedVet.expertise}</p>
                                                            <p className="text-base text-gray-600"><strong>Experience:</strong> {selectedVet.experience}</p>
                                                      </div>
                                                </div>

                                                {/* Degrees and Education */}
                                                <div>
                                                      <p className="text-lg font-semibold text-primary">Degrees</p>
                                                      <ul className="list-disc list-inside text-gray-600 ml-5">
                                                            {selectedVet.degrees.map((degree, index) => (
                                                                  <li key={index}>{degree}</li>
                                                            ))}
                                                      </ul>
                                                </div>

                                                <div>
                                                      <p className="text-lg font-semibold text-primary">Education</p>
                                                      <ul className="list-disc list-inside text-gray-600 ml-5">
                                                            {selectedVet.education.map((edu, index) => (
                                                                  <li key={index}>{edu}</li>
                                                            ))}
                                                      </ul>
                                                </div>

                                                {/* Institute Information */}
                                                <div>
                                                      <p className="text-lg font-semibold text-primary">Institute</p>
                                                      <p className="text-gray-600">{selectedVet.institute}</p>
                                                      <p className="text-gray-500">{selectedVet.instituteLocation}</p>
                                                </div>

                                                {/* Work Experience */}
                                                <div>
                                                      <p className="text-lg font-semibold text-primary">Work Experience</p>
                                                      <ul className="list-disc list-inside text-gray-600 ml-5">
                                                            {selectedVet.work_experiences.map((exp, index) => (
                                                                  <li key={index}>{exp}</li>
                                                            ))}
                                                      </ul>
                                                </div>

                                                {/* Awards */}
                                                <div>
                                                      <p className="text-lg font-semibold text-primary">Awards</p>
                                                      <ul className="list-disc list-inside text-gray-600 ml-5">
                                                            {selectedVet.awards.map((award, index) => (
                                                                  <li key={index}>{award}</li>
                                                            ))}
                                                      </ul>
                                                </div>
                                          </div>
                                    )}
                              </div>
                        </Modal>

                  )}
            </div>
      );
};

export default VetManagement;
