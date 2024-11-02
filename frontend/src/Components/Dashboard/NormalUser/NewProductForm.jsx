import { useState } from "react";
import CustomForm from "../../UI/Form/CustomForm";
import Inputs from "../../UI/Form/Inputs";
import SelectInputs from "../../UI/Form/selectInputs";

const countries = ["Argentina", "Brazil", "Kenia", "Bangladesh", "India"];

export default function NewProductForm() {
  const [selectOption, setSelectOption] = useState("");

  console.log(selectOption)
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
        <div className="flex gap-4">
          <SelectInputs
            labelName={"Categories"}
            options={countries}
            optionName={"Countries"}
            selectOption={selectOption}
            setSelectOption={setSelectOption}
          />
        </div>
      </CustomForm>
    </div>
  );
}
