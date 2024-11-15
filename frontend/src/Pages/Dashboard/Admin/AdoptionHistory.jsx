import React from "react";
import PrimaryTitle from "../../../Components/UI/PrimaryTitle";
import AdoptionHistoryRow from "./AdoptionHistoryRow";
import useAdoptionData from "../../../Hooks/useAdoptionData";

const AdoptionHistory = () => {

      const {adoptions,refetch} = useAdoptionData()
      

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
                                          <th className="text-sm p-4 font-medium">Pets Status</th>
                                          <th className="text-sm p-4 font-medium">Admin Response</th>
                                          <th className="text-sm p-4 font-medium">Action</th>
                                    </tr>
                              </thead>
                              <tbody className="text-myGray">
                                    {adoptions?.map((adoption, index) => (
                                      <AdoptionHistoryRow key={adoption?._id} refetch={refetch} item={adoption} index={index}/>
                                    ))}
                              </tbody>
                        </table>
                  </div>
            </div>
      );
};

export default AdoptionHistory;
