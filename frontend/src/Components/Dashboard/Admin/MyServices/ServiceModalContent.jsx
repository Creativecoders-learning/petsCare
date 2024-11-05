import CustomForm from "../../../UI/Form/CustomForm";
import Inputs from "../../../UI/Form/Inputs";

const ServiceModalContent = ({ selectedVetService }) => {
      return (
            <div>
                  <CustomForm title="Update Service" btnTitle="Update">
                        <Inputs type="text" name="vet-name" placeholder="Vet Name"></Inputs>
                        <Inputs type="text" name="service-type" placeholder="Service Type"></Inputs>
                        <Inputs type="text" name="service-description" placeholder="Service Description"></Inputs>
                        <Inputs type="number" name="price" placeholder="price"></Inputs>
                  </CustomForm>
            </div>
      );
};

export default ServiceModalContent;