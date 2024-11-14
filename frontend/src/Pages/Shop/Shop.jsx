import { useEffect, useState } from "react";
import FilterOption from "../../Components/Shop/AllProducts/FilterOption";
import Container from "../../Components/UI/Container";
import ShopCard from "../../Components/UI/ShopCard";
import { useSearchParams } from "react-router-dom";
import usePetsProducts from "../../Hooks/api/usePetsProducts";
import PrimaryTitle from "../../Components/UI/PrimaryTitle";
import PageBanner from "../../Components/UI/PageBanner";

export default function Shop() {
  const { petsProducts } = usePetsProducts();
  const [searchParams] = useSearchParams();
  const [foodsByCategory, setFoodsByCategory] = useState([]);
  const [category, setCategory] = useState(
    searchParams ? searchParams.get("category") : ""
  );
  const [subCategory, setSubCategory] = useState(
    searchParams ? searchParams.get("subCategory") : ""
  );

  console.log(petsProducts);

  useEffect(() => {
    const filteredByCategoryAndSubCategory = petsProducts?.filter(
      (item) => item?.category === category && item?.subCategory === subCategory
    );

    if (category && subCategory) {
      setFoodsByCategory(filteredByCategoryAndSubCategory);
    } else {
      setFoodsByCategory(petsProducts);
    }
  }, [petsProducts, category, subCategory]);

  return (
    <div className="mb-20">
      <PageBanner title={"Our Shop"} pageName={"Shop"}/>
      <Container>
        <div className="w-full flex justify-between items-start my-10">
          <div className="w-[25%]">
            <FilterOption
              setCategory={setCategory}
              setSubCategory={setSubCategory}
            />
          </div>

          <div className="w-[75%]flex flex-col gap-4">
            <PrimaryTitle>Shop</PrimaryTitle>
            <div className="grid grid-cols-3 gap-x-6 gap-y-10">
              {foodsByCategory?.map((item) => (
                <ShopCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
