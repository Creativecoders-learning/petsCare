import { Link } from "react-router-dom";
import usePetsMedicine from "../../Hooks/api/usePetsMedicine";
import Button from "../UI/Button";
import PrimaryTitle from "../UI/PrimaryTitle";
import ShopCard from "../UI/ShopCard";

export default function Medicine() {
  const { petsMedicine } = usePetsMedicine();
  return (
    <div className="mt-20 flex flex-col gap-10">
      <PrimaryTitle>Medicine</PrimaryTitle>

      <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 gap-x-8 gap-y-16">
        {petsMedicine?.slice(0, 4)?.map((item) => (
          <ShopCard key={item.id} item={item} />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Link to={"/all-products"}>
          <Button secondary={true}>Load More</Button>
        </Link>
      </div>
    </div>
  );
}
