import useVetsData from "../../../Hooks/api/useVetsData";
import VetCard from "../../UI/VetCard";

const VetsItem = ({selectedCategory}) => {
const {vets}=useVetsData();
  
  // vets filtering 
  const categories = vets.filter(
    (item) => item.category === selectedCategory,
  );
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-16 mt-10 mb-20 max-w-7xl mx-auto">
        {categories?.map((vet) => (
          <VetCard 
          key={vet.id} 
          vet={vet} 
          />
        ))}
      </div>
  );
};

export default VetsItem;