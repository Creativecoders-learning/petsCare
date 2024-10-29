import PropTypes from "prop-types";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

export default function Dropdown({ categories, subCategories, setCategory, setSubCategory} ) {
  const [activeCategory, setActiveCategory] = useState(null);

  // handle open and hide sub-category
  const handleSubCategory = (index, item) => {
    setActiveCategory(index === activeCategory ? null : index);
    setCategory(item);
  };

  return (
    <div className="w-full flex flex-col gap-2">
      <h2 className="text-md font-medium">Category</h2>
      <div className="flex flex-col border border-[#ebebeb]">
        {categories?.map((item, index) => (
          <>
            <div
              onClick={() => handleSubCategory(index, item)}
              key={index}
              className="flex justify-between gap-4 border-t border-b border-b-[#ebebeb] border-t-[#ebebeb] px-4 py-2 cursor-pointer text-[#676666] hover:bg-[#F5F2EB]"
            >
              <span>{item}</span>
              <span>
                <FaPlus />
              </span>
            </div>
            {activeCategory === index && (
              <ul className="flex flex-col gap-2 px-4 py-1 text-sm cursor-pointer">
                {subCategories?.map((item, index) => (
                  <li
                  onClick={()=> setSubCategory(item)}
                  className="ml-4" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </>
        ))}
      </div>
    </div>
  );
}

Dropdown.propTypes = {
  categories: PropTypes.array.isRequired,
  subCategories: PropTypes.array.isRequired,
};
