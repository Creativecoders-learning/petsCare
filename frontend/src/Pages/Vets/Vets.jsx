import Breadcrumb from "../../Components/Shared/Breadcrumb/Breadcrumb";
import VetsCategory from "../../Components/Vets/VetsCategory/VetsCategory";

const Vets = () => {
  return (
    <div>
      {/* vets banner  */}
      <Breadcrumb title={"Choose Your Vets"} />
      {/* vets Category  */}
      <VetsCategory/>
    </div>
  );
};

export default Vets;
