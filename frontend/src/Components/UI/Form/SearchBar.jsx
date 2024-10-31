import { IoSearch } from "react-icons/io5";

export default function SearchBar() {
  return (
    <div>
      <form >
        <div className="bg-[#f5f2eb] flex justify-between">
          <input className="w-[80%] bg-[#f5f2eb] focus:outline-none focus:border-transparent px-4 py-2 text-sm" type="text" placeholder="Search..." />
          <span className="group flex justify-center items-center p-4 rounded-lg bg-[#ff4b36] cursor-pointer text-white">
            <IoSearch className="group-hover:scale-[1.2] transition-all duration-300 ease-in-out"/>
          </span>
        </div>
      </form>
    </div>
  );
}
