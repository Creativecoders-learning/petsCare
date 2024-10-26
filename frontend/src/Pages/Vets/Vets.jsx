import { useEffect, useState } from "react";
import VetsBanner from "../../Components/VetsBanner/VetsBanner";
import VetsCard from "../../Components/VetsCard/VetsCard";

const Vets = () => {
  const [vets, setVets] = useState();
  useEffect(() => {
    fetch("/vetsFakeData.json")
      .then((res) => res.json())
      .then((data) => setVets(data));
  }, []);

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
