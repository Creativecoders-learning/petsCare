import PrimaryTitle from "../../../Components/UI/PrimaryTitle";

const Adoptions = () => {
      // Sample data for user's adopted pets
      const adoptedPets = [
            {
                  id: 1,
                  petName: "Buddy",
                  petType: "Dog",
                  adoptionDate: "2024-10-15",
                  location: "New York",
                  notes: "Loves to play and is very friendly",
            },
            {
                  id: 2,
                  petName: "Whiskers",
                  petType: "Cat",
                  adoptionDate: "2024-10-18",
                  location: "Los Angeles",
                  notes: "Quiet and independent, prefers a calm environment",
            },
            {
                  id: 3,
                  petName: "Goldie",
                  petType: "Fish",
                  adoptionDate: "2024-10-20",
                  location: "Chicago",
                  notes: "Easy to care for, enjoys a clean tank",
            },
      ];

      return (
            <div className="p-8 font-inter">
                  <PrimaryTitle titleStyle="text-primaryBold font-semibold">My Adopted Pets</PrimaryTitle>
                  
                  <div className="custom-scrollbar h-[78vh] overflow-y-auto shadow-myCustomShadow bg-white rounded-lg">
                        <table className="min-w-full border border-gray-200">
                              <thead>
                                    <tr className="bg-primary text-white text-left">
                                          <th className="text-sm p-4 font-medium">#</th>
                                          <th className="text-sm p-4 font-medium">Pet Name</th>
                                          <th className="text-sm p-4 font-medium">Pet Type</th>
                                          <th className="text-sm p-4 font-medium">Adoption Date</th>
                                          <th className="text-sm p-4 font-medium">Location</th>
                                          <th className="text-sm p-4 font-medium">Notes</th>
                                    </tr>
                              </thead>
                              <tbody className="text-myGray">
                                    {adoptedPets.map((pet, index) => (
                                          <tr
                                                key={pet.id}
                                                className={`${index % 2 === 0 ? "bg-primaryLight bg-opacity-10" : "bg-white"}`}
                                          >
                                                <td className="text-sm p-4 font-medium">{index + 1}</td>
                                                <td className="text-sm p-4">{pet.petName}</td>
                                                <td className="text-sm p-4">{pet.petType}</td>
                                                <td className="text-sm p-4">{pet.adoptionDate}</td>
                                                <td className="text-sm p-4">{pet.location}</td>
                                                <td className="text-sm p-4">{pet.notes}</td>
                                          </tr>
                                    ))}
                              </tbody>
                        </table>
                  </div>
            </div>
      );
};

export default Adoptions;
