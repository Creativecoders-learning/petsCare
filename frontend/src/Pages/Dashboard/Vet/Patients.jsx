import PrimaryTitle from "../../../Components/UI/PrimaryTitle";

const patientsData = [
      { id: 1, patientName: "Buddy", ownerName: "John Doe", age: "3 years", species: "Dog", breed: "Golden Retriever", medicalIssue: "Skin Allergy", appointmentDate: "2024-10-25", treatmentStatus: "Ongoing" },
      { id: 2, patientName: "Whiskers", ownerName: "Jane Smith", age: "5 years", species: "Cat", breed: "Siamese", medicalIssue: "Dental Issues", appointmentDate: "2024-10-10", treatmentStatus: "Completed" },
      { id: 3, patientName: "Bella", ownerName: "Mark Johnson", age: "1 year", species: "Dog", breed: "Bulldog", medicalIssue: "Ear Infection", appointmentDate: "2024-09-30", treatmentStatus: "Ongoing" },
      { id: 4, patientName: "Snowball", ownerName: "Emily Davis", age: "2 years", species: "Rabbit", breed: "Angora", medicalIssue: "Digestive Problems", appointmentDate: "2024-09-20", treatmentStatus: "Completed" }
];

const Patients = () => {

      const handleStatusChange = (id, newStatus) => {
            console.log(id, newStatus);

      };

      return (
            <div className="p-8 font-inter">
                  <PrimaryTitle titleStyle="text-primaryBold font-semibold">My Patients</PrimaryTitle>
                  <div className="custom-scrollbar overflow-y-auto shadow-myCustomShadow bg-white rounded">
                        <table className="min-w-full">
                              <thead>
                                    <tr className="bg-primary text-white text-left">
                                          <th className="text-sm p-4 font-medium">#</th>
                                          <th className="text-sm p-4 font-medium">Patient Name</th>
                                          <th className="text-sm p-4 font-medium">Owner Name</th>
                                          <th className="text-sm p-4 font-medium">Age</th>
                                          <th className="text-sm p-4 font-medium">Species</th>
                                          <th className="text-sm p-4 font-medium">Breed</th>
                                          <th className="text-sm p-4 font-medium">Medical Issue</th>
                                          <th className="text-sm p-4 font-medium">Appointment Date</th>
                                          <th className="text-sm p-4 font-medium">Treatment Status</th>
                                    </tr>
                              </thead>
                              <tbody className="text-gray-700">
                                    {patientsData?.map((patient, index) => (
                                          <tr key={patient?.id} className={`${index % 2 === 0 ? "bg-primaryLight bg-opacity-10" : "bg-white"}`}>
                                                <td className="text-sm p-4 font-medium">{index + 1}</td>
                                                <td className="text-sm p-4 font-medium">{patient?.patientName}</td>
                                                <td className="text-sm p-4">{patient?.ownerName}</td>
                                                <td className="text-sm p-4">{patient?.age}</td>
                                                <td className="text-sm p-4">{patient?.species}</td>
                                                <td className="text-sm p-4">{patient?.breed}</td>
                                                <td className="text-sm p-4">{patient?.medicalIssue}</td>
                                                <td className="text-sm p-4">{patient?.appointmentDate}</td>
                                                <td className="text-sm p-4">
                                                      <select
                                                            value={patient?.treatmentStatus}
                                                            onChange={(e) => handleStatusChange(patient?.id, e.target.value)}
                                                            className="border p-2 rounded"
                                                      >
                                                            <option value="Pending">Pending</option>
                                                            <option value="Ongoing">Ongoing</option>
                                                            <option value="Completed">Completed</option>
                                                      </select>
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
