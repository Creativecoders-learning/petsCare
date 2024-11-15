import React from "react";
import PrimaryTitle from "../../../Components/UI/PrimaryTitle";
import AdoptionHistoryRow from "./AdoptionHistoryRow";
import useAdoptionData from "../../../Hooks/useAdoptionData";

const AdoptionHistory = () => {

      const {adoptions} = useAdoptionData()
      // Sample adoption history data
      // const adoptions = [
      //       {
      //             id: 1,
      //             petName: "Buddy",
      //             petType: "Dog",
      //             adopterName: "John Doe",
      //             adoptionDate: "2024-10-15",
      //             location: "New York",
      //             contact: "john@example.com",
      //             previousLocation: "NY Animal Shelter",
      //             notes: "Friendly and healthy",
      //       },
      //       {
      //             id: 2,
      //             petName: "Whiskers",
      //             petType: "Cat",
      //             adopterName: "Sarah Smith",
      //             adoptionDate: "2024-10-18",
      //             location: "Los Angeles",
      //             contact: "sarah@example.com",
      //             previousLocation: "LA Pet Rescue",
      //             notes: "Requires special diet",
      //       },
      //       {
      //             id: 3,
      //             petName: "Goldie",
      //             petType: "Fish",
      //             adopterName: "Emily Johnson",
      //             adoptionDate: "2024-10-20",
      //             location: "Chicago",
      //             contact: "emily@example.com",
      //             previousLocation: "Chicago Aquarium",
      //             notes: "Easy to care for",
      //       },
      // ];

      return (
            <div className="p-8 font-inter">
                  <PrimaryTitle titleStyle="text-primaryBold font-semibold">Adoption History</PrimaryTitle>

                  <div className="custom-scrollbar h-[78vh] overflow-y-auto shadow-myCustomShadow bg-white rounded-lg">
                        <table className="min-w-full border border-gray-200">
                              <thead>
                                    <tr className="bg-primary text-white text-left">
                                          <th className="text-sm p-4 font-medium">#</th>
                                          <th className="text-sm p-4 font-medium">Pet Name</th>
                                          <th className="text-sm p-4 font-medium">Type</th>
                                          <th className="text-sm p-4 font-medium">Adopter</th>
                                          <th className="text-sm p-4 font-medium">Date</th>
                                          <th className="text-sm p-4 font-medium">Location</th>
                                          <th className="text-sm p-4 font-medium">Contact</th>
                                          <th className="text-sm p-4 font-medium">Admin Response</th>
                                          <th className="text-sm p-4 font-medium">Action</th>
                                    </tr>
                              </thead>
                              <tbody className="text-myGray">
                                    {adoptions.map((adoption, index) => (
                                      <AdoptionHistoryRow item={adoption} index={index}/>
                                    ))}
                              </tbody>
                        </table>
                  </div>
            </div>
      );
};

export default AdoptionHistory;
