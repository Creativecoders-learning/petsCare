import { Link } from "react-router-dom";
import Button from "../UI/Button";
import PrimaryTitle from "../UI/PrimaryTitle";
import ShopCard from "../UI/ShopCard";
import usePetsProducts from "../../Hooks/api/usePetsProducts";

export default function Foods() {
  const { petsProducts } = usePetsProducts();
  
  const petsFoods = petsProducts?.filter(item => item?.subCategory === "Foods")
  console.log(petsFoods);

  return (
    <div className="mt-20 flex flex-col gap-10">
      <PrimaryTitle>Foods</PrimaryTitle>

      <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 gap-x-8 gap-y-16">
        {petsFoods?.slice(0, 4)?.map((item) => (
          <ShopCard key={item.id} item={item} />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Link to={`/all-products?category=Cats&subCategory=Foods`}>
          <Button secondary={true}>Load More</Button>
        </Link>
      </div>
    </div>
  );
}
