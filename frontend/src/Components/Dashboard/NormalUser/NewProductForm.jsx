import CustomForm from "../../UI/Form/CustomForm";
import Inputs from "../../UI/Form/Inputs";

export default function NewProductForm() {
  return (
    <div>
      <CustomForm btnTitle={"Add Product"} title={"Add New Product"}>
        <div className="flex gap-4">
          <Inputs
            type="text"
            name="productName"
            placeholder="Type Product Name"
          />
          <Inputs
            type="number"
            name="productName"
            placeholder="Type Product Name"
          />
        </div>
      </CustomForm>
    </div>
  );
}
