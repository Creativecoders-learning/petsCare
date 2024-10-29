import Categories from "../../Components/Adoption/AdoptionCategories/Categories";
import MeetAdoption from "../../Components/Adoption/Meet-adoption/MeetAdoption";
import Breadcrumb from "../../Components/Shared/Breadcrumb/Breadcrumb";


const Adoption = () => {
    return (
      <div>
         <Breadcrumb title={'Get Adoption'} ></Breadcrumb>
           <MeetAdoption></MeetAdoption>
           <Categories></Categories>
      </div>
    );
};

export default Adoption;