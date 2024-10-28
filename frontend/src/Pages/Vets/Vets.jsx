
import VetsCard from "../../Components/Vets/VetsCard/VetsCard";
import VetsBanner from "../../Components/Vets/VetsBanner/VetsBanner";
import useVetsData from "../../Hooks/api/useVetsData";

const Vets = () => {
  const {vets}=useVetsData()
  return (
    <div className="mb-20">
      {/* vets banner  */}
      <VetsBanner />

      {/* vets card  */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-16 mt-20 max-w-7xl mx-auto">
        {vets?.map((vet,idx) => (
          <VetsCard key={idx} vet={vet}></VetsCard>
        ))}
      </div>
    </div>
  );
};

export default Vets;
