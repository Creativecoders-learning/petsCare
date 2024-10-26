import usePetsFoods from "../../Hooks/api/usePetsFoods"
import PrimaryTitle from "../UI/PrimaryTitle";
import ShopCard from "../UI/ShopCard";

export default function Foods() {
    const {loading, error, petsFoods} = usePetsFoods();


  return (
    <div className="mt-20">
        <PrimaryTitle>Foods</PrimaryTitle>

        <div className="grid grid-cols-3 gap-x-6 gap-y-10">
            {
                petsFoods?.map(item => <ShopCard key={item.id} item={item}/>)
            }
        </div>
    </div>
  )
}
