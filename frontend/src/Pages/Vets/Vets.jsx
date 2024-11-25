import Breadcrumb from "../../Components/Shared/Breadcrumb/Breadcrumb";
import VetsCategory from "../../Components/Vets/VetsCategory/VetsCategory";

const Vets = () => {
  return (
    <div>
      {/* vets banner  */}
      <Breadcrumb title={"Choose Your Vets"} />
      <VetsCategory/>
    </div>
  );
};

export default Vets;
