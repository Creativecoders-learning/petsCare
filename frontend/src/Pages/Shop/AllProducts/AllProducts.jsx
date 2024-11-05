import { useEffect, useState } from "react";
import FilterOption from "../../../Components/Shop/AllProducts/FilterOption";
import Container from "../../../Components/UI/Container";
import ShopCard from "../../../Components/UI/ShopCard";
import { useSearchParams } from "react-router-dom";
import usePetsProducts from "../../../Hooks/api/usePetsProducts";

export default function AllProducts() {
  const { petsProducts } = usePetsProducts();
  const [searchParams] = useSearchParams();
  const [foodsByCategory, setFoodsByCategory] = useState([]);
  const [category, setCategory] = useState(searchParams ? searchParams.get("category") : "");
  const [subCategory, setSubCategory] = useState(searchParams ? searchParams.get("subCategory") : "");

  petsProducts?.map(item => console.log(item.id))
  

  useEffect(() => {
    const filteredByCategoryAndSubCategory = petsProducts?.filter(
      (item) => item?.category === category && item?.subCategory === subCategory
    );

    if (category && subCategory) {
      setFoodsByCategory(filteredByCategoryAndSubCategory);
    }else {
      setFoodsByCategory(petsProducts);
    }
  }, [petsProducts, category, subCategory]);

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
