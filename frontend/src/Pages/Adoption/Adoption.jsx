import Categories from "../../Components/Adoption/AdoptionCategories/Categories";
import Beginning from "../../Components/Adoption/Beginning/Beginning";
import FAQAdoption from "../../Components/Adoption/FAQAdoption/FAQAdoption";
import MeetAdoption from "../../Components/Adoption/Meet-adoption/MeetAdoption";
import Puppies from "../../Components/Adoption/Puppies/Puppies";
import PageBanner from "../../Components/UI/PageBanner";


const Adoption = () => {
    return (
      <div>
         <PageBanner title={"Choose your animals"} pageName={"adoption"}/>
           <MeetAdoption></MeetAdoption>
           <Categories></Categories>
           <FAQAdoption></FAQAdoption>
           <Puppies></Puppies>
           <Beginning></Beginning>
      </div>
    );
};

export default Adoption;