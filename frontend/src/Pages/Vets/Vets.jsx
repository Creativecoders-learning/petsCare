import PageBanner from "../../Components/UI/PageBanner";
import VetsCategory from "../../Components/Vets/VetsCategory/VetsCategory";

const Vets = () => {
  return (
    <div>
      {/* vets banner  */}
      <PageBanner title={"Our Vets"} pageName={"vets"}/>
      <VetsCategory/>
    </div>
  );
};

export default Vets;
