import { useEffect, useState } from "react";
import VetsBanner from "../../Components/VetsBanner/VetsBanner";
import VetsCard from "../../Components/VetsCard/VetsCard";

const Vets = () => {
<<<<<<< HEAD
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
=======
    const [value, setValue]=useState(false);

    return (
        <div>
            this is a vets page
            <div>
                Hi i am a | No this is no hi 
                <div>
                    this is hasan
                </div>
                <div>
                    this is hasan
                </div>
                <div>
                   error tw deyar kotha
                </div>
            </div>
        </div>
    );
>>>>>>> 4c5fd01410425e8a95cf65d046c2375d0b4523e3
};

export default Vets;
