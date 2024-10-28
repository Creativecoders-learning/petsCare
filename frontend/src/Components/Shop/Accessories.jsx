import { Link } from "react-router-dom";
import Button from "../UI/Button";
import PrimaryTitle from "../UI/PrimaryTitle";
import ShopCard from "../UI/ShopCard";
import usePetsProducts from "../../Hooks/api/usePetsProducts";

export default function Accessories() {
  const { petsProducts } = usePetsProducts();
  
  const petsAccessories = petsProducts?.filter(item => item?.subCategory === "Accessories")
  console.log(petsAccessories);

  return (
    <div className="mt-20 flex flex-col gap-10">
      <PrimaryTitle>Accessories</PrimaryTitle>

      <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 gap-x-8 gap-y-16">
        {petsAccessories?.slice(0, 4)?.map((item) => (
          <ShopCard key={item.id} item={item} />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Link to={`/all-products?category=Rabbits&subCategory=Accessories`}>
          <Button secondary={true}>Load More</Button>
        </Link>
      </div>
    </div>
  );
}
