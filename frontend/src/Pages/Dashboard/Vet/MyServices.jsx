import PrimaryTitle from "../../../Components/UI/PrimaryTitle";

const vetServices = [
      { id: 1, vetName: "Dr. Sarah Parker", email: "sarah.parker@vetclinic.com", serviceType: "Vaccination", serviceDescription: "Provides regular vaccination for dogs and cats.", price: "$50" },
      { id: 2, vetName: "Dr. Michael Lee", email: "michael.lee@vetclinic.com", serviceType: "Surgery", serviceDescription: "Performs general surgeries including spaying and neutering.", price: "$300" },
      { id: 3, vetName: "Dr. Sarah Parker", email: "sarah.parker@vetclinic.com", serviceType: "Dental Care", serviceDescription: "Dental cleaning and oral care for pets.", price: "$80" },
      { id: 4, vetName: "Dr. Emma Brown", email: "emma.brown@vetclinic.com", serviceType: "Checkup", serviceDescription: "Routine health checkups for pets.", price: "$40" },
      { id: 5, vetName: "Dr. Michael Lee", email: "michael.lee@vetclinic.com", serviceType: "Emergency Care", serviceDescription: "24/7 emergency care services for all pets.", price: "$500" },
];

const MyServices = () => {

      return (
            <div className="p-8 font-inter">
                  <PrimaryTitle titleStyle="text-primaryBold font-semibold">My Services</PrimaryTitle>
                  <div className="custom-scrollbar h-[80vh] overflow-y-auto shadow-myCustomShadow bg-white rounded">
                        <table className="min-w-full">
                              <thead>
                                    <tr className="bg-primary text-white text-left">
                                          <th className="p-4 font-semibold">#</th>
                                          <th className="p-4 font-semibold">Vet Name</th>
                                          <th className="p-4 font-semibold">Email</th>
                                          <th className="p-4 font-semibold">Service Type</th>
                                          <th className="p-4 font-semibold">Description</th>
                                          <th className="p-4 font-semibold">Price</th>
                                    </tr>
                              </thead>
                              <tbody className="text-myGray">
                                    {vetServices.map((service, index) => (
                                          <tr key={service.id} className={`${index % 2 === 0 ? "bg-primaryLight bg-opacity-10" : "bg-white"}`}>
                                                <td className="p-4 font-medium">{index + 1}</td>
                                                <td className="p-4 font-medium">{service.vetName}</td>
                                                <td className="p-4">{service.email}</td>
                                                <td className="p-4">{service.serviceType}</td>
                                                <td className="p-4">{service.serviceDescription}</td>
                                                <td className="p-4">{service.price}</td>
                                          </tr>
                                    ))}
                              </tbody>
                        </table>
                  </div>
                  {vetServices.length === 0 && (
                        <p className="mt-4 text-center text-gray-600">No services found for this email.</p>
                  )}
            </div>
      );
};

export default MyServices;
