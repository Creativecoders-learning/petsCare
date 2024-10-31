import Categories from "../../Components/Adoption/AdoptionCategories/Categories";
import Beginning from "../../Components/Adoption/Beginning/Beginning";
import FAQAdoption from "../../Components/Adoption/FAQAdoption/FAQAdoption";
import MeetAdoption from "../../Components/Adoption/Meet-adoption/MeetAdoption";
import Breadcrumb from "../../Components/Shared/Breadcrumb/Breadcrumb";


const Adoption = () => {
    return (
      <div>
         <Breadcrumb title={'Get Adoption'}></Breadcrumb>
           <MeetAdoption></MeetAdoption>
           <Categories></Categories>
           <FAQAdoption></FAQAdoption>
           <Beginning></Beginning>
      </div>
    );
};

export default Adoption;