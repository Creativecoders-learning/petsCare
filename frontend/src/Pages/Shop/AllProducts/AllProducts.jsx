import { useEffect, useState } from "react";
import FilterOption from "../../../Components/Shop/AllProducts/FilterOption";
import Container from "../../../Components/UI/Container";
import usePetsFoods from "../../../Hooks/api/usePetsFoods";
import ShopCard from "../../../Components/UI/ShopCard";
import usePetsAccessories from "../../../Hooks/api/usePetsAccessories";
import usePetsMedicine from "../../../Hooks/api/usePetsMedicine";
import { useSearchParams } from "react-router-dom";

export default function AllProducts() {
  const [searchParams] = useSearchParams();
  const { petsFoods } = usePetsFoods();
  const { petsAccessories } = usePetsAccessories();
  const { petsMedicine } = usePetsMedicine();
  const [foodsByCategory, setFoodsByCategory] = useState([]);
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  console.log(category, subCategory);

  //   manage filtered products
  useEffect(() => {
    if(searchParams){
      setCategory(searchParams.get("category"));
      setSubCategory(searchParams.get("subCategory"))
    }
    // this is for foods data
    if (category !== "" && subCategory === "Foods") {
      const filteredData = petsFoods?.filter(
        (item) =>
          item?.category.trim().toLowerCase() === category.trim().toLowerCase()
      );
      console.log(filteredData);
      setFoodsByCategory(filteredData);
    }

    // this is for accessories data
    else if (category !== "" && subCategory === "Accessories") {
      const filteredData = petsAccessories?.filter(
        (item) =>
          item?.category.trim().toLowerCase() === category.trim().toLowerCase()
      );
      console.log(filteredData);
      setFoodsByCategory(filteredData);
    }
    // this is for accessories data
    else if (category !== "" && subCategory === "Medicines") {
      const filteredData = petsMedicine?.filter(
        (item) =>
          item?.category.trim().toLowerCase() === category.trim().toLowerCase()
      );
      console.log(filteredData);
      setFoodsByCategory(filteredData);
    } else {
      setFoodsByCategory(petsFoods);
    }
  }, [petsFoods, petsAccessories, petsMedicine, category, subCategory, searchParams]);

  return (
    <Container>
      <div className="w-full flex justify-between items-start">
        <div className="w-[20%]">
          <FilterOption
            setCategory={setCategory}
            setSubCategory={setSubCategory}
          />
        </div>
        <div className="w-[80%] grid grid-cols-3 gap-x-6 gap-y-10">
          {foodsByCategory?.map((item) => (
            <ShopCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </Container>
  );
}
