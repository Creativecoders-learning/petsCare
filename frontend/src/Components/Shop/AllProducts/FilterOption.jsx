/* eslint-disable react/prop-types */
import Button from "../../UI/Button";
import Dropdown from "../../UI/Form/Dropdown";
import Inputs from "../../UI/Form/Inputs";
import SearchBar from "../../UI/Form/SearchBar";
import { GoDot } from "react-icons/go";
import { FaPlay } from "react-icons/fa6";

const categories = ["Cats", "Dogs", "Rabbits", "Fishes"];

const subCategories = ["Foods", "Accessories", "Medicines"];
const brands = ["Foods", "Accessories", "Medicines"];

export default function FilterOption({ setCategory, setSubCategory }) {
  return (
    <div className="w-full p-6 flex flex-col gap-6 justify-center items-start">
      <SearchBar />
      <Dropdown
        categories={categories}
        subCategories={subCategories}
        setCategory={setCategory}
        setSubCategory={setSubCategory}
      />
      {/* brands */}
      <div className="flex flex-col items-start gap-2">
        <h2 className="text-md font-medium">Brands</h2>
        <ul className="flex flex-col gap-2">
          {brands?.map((item, index) => (
            <li
              onClick={() => setSubCategory(item)}
              className="flex gap-2 items-center cursor-pointer hover:text-[#ff4b36] transition-all duration-300 ease-in-out"
              key={index}
            >
              <span>
                <GoDot />
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      {/* price filter */}
      <div className="w-full flex flex-col gap-2 items-start">
        <h2 className="text-md font-medium">Price</h2>
        <div className="flex items-center gap-2 w-full">
          <div className="w-[30%]">
            <Inputs type="number" placeholder="Min" />
          </div>
          {"-"}
          <div className="w-[30%]">
            <Inputs type="number" placeholder="Max" />
          </div>
          <Button className="w-[20%]" primary>
            <span>
              <FaPlay />
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}
