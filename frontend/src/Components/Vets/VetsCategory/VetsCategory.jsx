import { useState } from "react";
import useVetsData from "../../../Hooks/api/useVetsData";
import VetsCategoryBtn from "../../UI/VetsCategoryBtn";
import VetItem from "../VetsItem/VetsItem";

const VetsCategory = () => {
  const { vets } = useVetsData();
  // vets button functionality
  const [selectedCategory, SetSelectedCategory] = useState("Holistics");
  const uniqueCategory = new Set();

  const withoutCategories = vets.filter((item) => {
    const isDuplicate = uniqueCategory.has(item?.category);

    if (!isDuplicate) {
      uniqueCategory.add(item?.
        category);
      return true;
    }

    return false;
  });

  // handleSelected category
  const handleCategory = (category) => {
    SetSelectedCategory(category);
  };

  return (
    <div>
      <div className="text-center my-16">
        <h1 className="text-3xl">Please choice Our doctors </h1>
      </div>
      {/* added filter by tabs */}
      <div>
        {/* vets category option or buttons  */}
        <VetsCategoryBtn
          items={withoutCategories}
          selectedCategory={selectedCategory}
          handleCategory={handleCategory}
        />

        {/* vets category option or buttons  */}
        <VetItem selectedCategory={selectedCategory} />
      </div>
    </div>
  );
};

export default VetsCategory;