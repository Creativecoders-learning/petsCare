import { FaRegBookmark } from "react-icons/fa6";
import { IoBookmarkSharp } from "react-icons/io5";
import UseAuth from "../../../Hooks/UseAuth";
const Slot = () => {
  const { user } = UseAuth();
  return (
    <div>
      <h2 className="text-2xl font-semibold my-3 text-center mb-5">
        Select Yor Slot
      </h2>
      <div className="">
        <img className="w-full" src="https://i.ibb.co.com/MsbDWtd/Line-2.png" alt="" />
        <div className="flex items-center justify-between my-5">
          <h2 className="flex items-center gap-3 font-bold text-gray-500">
            <FaRegBookmark className="text-2xl" />
            Available
          </h2>
          <h2 className="flex items-center gap-3 font-bold  text-primary">
            <IoBookmarkSharp className="text-2xl  " />
            Selected
          </h2>
        </div>
        <img className="w-full" src="https://i.ibb.co.com/MsbDWtd/Line-2.png" alt="" />
      </div>
      
      <div className="my-10 border py-5 px-5">
        
<div className="flex items-center justify-center  gap-5  ">
<h2 className=" text-[18px] text-gray-500  font-bold  h-[50px] w-[30px] flex items-center justify-start "></h2>
<h2 className=" text-[18px] text-gray-500  font-bold  h-[40px] w-[150px] flex items-center justify-center">Saturday</h2>
<h2 className=" text-[18px] text-gray-500  font-bold  h-[40px] w-[150px] flex items-center justify-center">Monday</h2>
<h2 className=" text-[18px] text-gray-500  font-bold  h-[40px] w-[150px] flex items-center justify-center">Wednesday</h2>
<h2 className=" text-[18px] text-gray-500  font-bold  h-[40px] w-[150px] flex items-center justify-center">Thursday</h2>
</div>
{/* slot 1  */}
<div className="flex items-center justify-center  gap-4 mt-3 ">
<h2 className=" text-[18px] text-gray-500  font-bold  h-[40px] w-[30px] flex items-center justify-start ">A</h2>
<h2 className="border  text-gray-500 bg-[#F7F8F8] font-bold  h-[50px] w-[150px] flex items-center justify-center ">6:00am-6:30am</h2>
<h2 className="border  text-gray-500 bg-[#F7F8F8] font-bold  h-[50px] w-[150px] flex items-center justify-center">12:00pm-12:30pm</h2>
<h2 className="border  text-gray-500 bg-[#F7F8F8] font-bold  h-[50px] w-[150px] flex items-center justify-center">6:00pm-6:30pm</h2>
<h2 className="border text-gray-500 bg-[#F7F8F8] font-bold  h-[50px] w-[150px] flex items-center justify-center">9:00pm-9:30pm</h2>
</div>
{/* slot 2  */}
<div className="flex items-center justify-center  gap-4 mt-5 ">
<h2 className=" text-[18px] text-gray-500  font-bold  h-[40px] w-[30px] flex items-center justify-start ">B</h2>
<h2 className="border  text-gray-500 bg-[#F7F8F8] font-bold  h-[50px] w-[150px] flex items-center justify-center">6:00am-6:30am</h2>
<h2 className="border  text-gray-500 bg-[#F7F8F8] font-bold  h-[50px] w-[150px] flex items-center justify-center">12:00pm-12:30pm</h2>
<h2 className="border  text-gray-500 bg-[#F7F8F8] font-bold  h-[50px] w-[150px] flex items-center justify-center">6:00pm-6:30pm</h2>
<h2 className="border text-gray-500 bg-[#F7F8F8] font-bold  h-[50px] w-[150px] flex items-center justify-center">9:00pm-9:30pm</h2>
</div>
{/* slot 3  */}
<div className="flex items-center justify-center  gap-4 mt-5 ">
<h2 className=" text-[18px] text-gray-500  font-bold  h-[40px] w-[30px] flex items-center justify-start ">C</h2>
<h2 className="border  text-gray-500 bg-[#F7F8F8] font-bold  h-[50px] w-[150px] flex items-center justify-center">6:00am-6:30am</h2>
<h2 className="border  text-gray-500 bg-[#F7F8F8] font-bold  h-[50px] w-[150px] flex items-center justify-center">12:00pm-12:30pm</h2>
<h2 className="border  text-gray-500 bg-[#F7F8F8] font-bold  h-[50px] w-[150px] flex items-center justify-center">6:00pm-6:30pm</h2>
<h2 className="border text-gray-500 bg-[#F7F8F8] font-bold  h-[50px] w-[150px] flex items-center justify-center">9:00pm-9:30pm</h2>
</div>
{/* slot 4  */}
<div className="flex items-center justify-center  gap-4 mt-5 ">
<h2 className=" text-[18px] text-gray-500  font-bold  h-[40px] w-[30px] flex items-center justify-start ">D</h2>
<h2 className="border  text-gray-500 bg-[#F7F8F8] font-bold  h-[50px] w-[150px] flex items-center justify-center">6:00am-6:30am</h2>
<h2 className="border  text-gray-500 bg-[#F7F8F8] font-bold  h-[50px] w-[150px] flex items-center justify-center">12:00pm-12:30pm</h2>
<h2 className="border  text-gray-500 bg-[#F7F8F8] font-bold  h-[50px] w-[150px] flex items-center justify-center">6:00pm-6:30pm</h2>
<h2 className="border text-gray-500 bg-[#F7F8F8] font-bold  h-[50px] w-[150px] flex items-center justify-center">9:00pm-9:30pm</h2>
</div>
      </div>
      <div className="flex items-center gap-5 mt-5 ">
        <div className=" w-full">
          <label className="">Email</label>
          <input
            id="email"
            type="email"
            defaultValue={user?.email}
            className="w-full rounded-lg px-2 mt-2 py-2  border border-primary"
          />
        </div>
        <div className=" w-full">
          <label className="">Name</label>
          <input
            id="email"
            type="email"
            defaultValue={user?.displayName}
            className="w-full rounded-lg px-2 mt-2 py-2  border border-primary"
          />
        </div>
      </div>
      <div className="mt-10 flex items-center justify-center">
        <button className="w-[250px] py-2 bg-primary hover:bg-black text-white rounded-xl font-bold text-xl">
          Payment Now
        </button>
      </div>
    </div>
  );
};

export default Slot;
