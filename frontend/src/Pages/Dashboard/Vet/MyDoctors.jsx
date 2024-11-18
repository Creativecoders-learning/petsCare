import PrimaryTitle from "../../../Components/UI/PrimaryTitle";
import MyDoctorsRow from "./MyDoctorsRow";

const MyDoctors = () => {
  return (
    <div className="p-8 font-inter">
      <PrimaryTitle titleStyle="text-primaryBold font-semibold">
        Vew Appointments
      </PrimaryTitle>
      <div className="custom-scrollbar h-[78vh] overflow-y-auto shadow-myCustomShadow bg-white rounded-lg">
        <table className="min-w-full border border-gray-200">
          <thead>
            <tr className="bg-primary text-white text-left">
              <th className="text-sm p-4 font-medium">#</th>
              <th className="text-sm p-4 font-medium">Image</th>
              <th className="text-sm p-4 font-medium">Vets Name</th>
              <th className="text-sm p-4 font-medium">Vets Email</th>
              <th className="text-sm p-4 font-medium">Location</th>
              <th className="text-sm p-4 font-medium">Degrees</th>
            </tr>
          </thead>
          <tbody className="text-myGray">
              <MyDoctorsRow />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyDoctors;
