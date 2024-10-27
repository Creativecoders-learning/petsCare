import usePetsAccessories from "../../Hooks/api/usePetsAccessories"
import Button from "../UI/Button";
import PrimaryTitle from "../UI/PrimaryTitle";
import ShopCard from "../UI/ShopCard";

export default function Accessories() {
  const {petsAccessories} = usePetsAccessories();

  return (
    <div className="mt-20 flex flex-col gap-10">
        <PrimaryTitle>Accessories</PrimaryTitle>

        <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 gap-x-8 gap-y-16">
            {
                petsAccessories?.slice(0, 4)?.map(item => <ShopCard key={item.id} item={item}/>)
            }
        </div>
        <div className="flex justify-center mt-10">
          <Button secondary={true}>Load More</Button>
        </div>
    </div>
  )
}
