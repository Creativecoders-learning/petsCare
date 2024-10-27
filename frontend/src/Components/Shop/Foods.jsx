import usePetsFoods from "../../Hooks/api/usePetsFoods"
import Button from "../UI/Button";
import PrimaryTitle from "../UI/PrimaryTitle";
import ShopCard from "../UI/ShopCard";

export default function Foods() {
    const {petsFoods} = usePetsFoods();


  return (
    <div className="mt-20 flex flex-col gap-10">
        <PrimaryTitle>Foods</PrimaryTitle>

        <div className="grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 gap-x-8 gap-y-16">
            {
                petsFoods?.slice(0, 4)?.map(item => <ShopCard key={item.id} item={item}/>)
            }
        </div>
        <div className="flex justify-center mt-10">
          <Button secondary={true}>Load More</Button>
        </div>
    </div>
  )
}
