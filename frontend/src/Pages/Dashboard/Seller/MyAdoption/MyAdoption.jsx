import useMyAdoptionData from "../../../../hooks/useMyAdoptionData";
import MyAdoptionRow from "../../TableRow/MyAdoptionRow";

const MyAdoption = () => {
  const [myAdoptions] = useMyAdoptionData();
  // console.log(myAdoptions);

  return (
    <div className="py-5 lg:py-10 ">
      <h1 className="text-xl md:text-2xl lg:text-3xl text-center mb-5">
        My Adoption
      </h1>
      <div className="py-4 px-5">
        <div className=" max-w-screen-lg mx-auto custom-scrollbar h-[80vh] overflow-y-auto overflow-x-auto shadow rounded-lg overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead>
            <tr className="bg-primary text-white text-left">
               <th className="p-4 font-semibold">#</th>
               <th className="p-4 font-semibold">Image</th>
               <th className="p-4 font-semibold">Name</th>
               <th className="p-4 font-semibold">Category</th>
               <th className="p-4 font-semibold">Date</th>
               <th className="p-4 font-semibold">Status</th>
               <th className="p-4 font-semibold text-center">Actions</th>
             </tr>
            </thead>
            <tbody>
              {myAdoptions?.map((item,index) => (
                <MyAdoptionRow  key={item?.id} index={index} item={item} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyAdoption;
