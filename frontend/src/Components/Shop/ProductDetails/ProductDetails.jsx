import { useParams } from "react-router-dom";
import Button from "../../UI/Button";
import usePetsProducts from "../../../Hooks/api/usePetsProducts";
import Container from "../../UI/Container";

export default function ProductDetails() {
  const { id } = useParams();
  const { petsProducts } = usePetsProducts();

  const existingProduct = petsProducts?.find(
    (item) => Number(item?.id) === Number(id)
  );
  console.log(existingProduct);
  return (
    <Container>
      <div className="my-20">
        <div className="flex justify-between items-start gap-6">
          {/* image */}
          <div className="w-[40%] h-[400px] overflow-hidden">
            <figure className="w-full h-[80%]">
              <img className="w-full h-full" src={existingProduct?.image} alt="" />
            </figure>
            <div className="h-[20%]">
            </div>
          </div>

          {/* basic info */}
          <div className=" w-[20%]flex flex-col items-start justify-between">
            {/* title */}
            <div className="flex flex-col gap-4 items-start">
              <h2 className="text-2xl font-medium">
                {
                  "Real madrid জার্সি (অ্যামব্রয়ডারি সহ) স্প্যানিশ ক্লাব প্রিমিয়াম সংস্করণ - football jersey"
                }
              </h2>
              <span>282 Ratting</span>
              <span>Brand: No Brand</span>
            </div>
            {/* body */}
            <div className="flex flex-col gap-6">
              <span>${"40"}</span>
              <span>Color Family{""}</span>
              <span>Size{""}</span>
              <span>Quantity:{""}</span>
            </div>
            {/* buttons */}
            <div className="w-full flex gap-4 items-center mt-6">
              <Button primary={true} className="w-full">Buy Now</Button>
              <Button secondary={true} className="w-full">Add to Cart</Button>
            </div>
          </div>
          <div className=" w-[20%]flex flex-col gap-6 items-start">
            {/* title */}
            <div className="flex flex-col gap-4 items-start">
              <h2>
                {
                  "Real madrid জার্সি (অ্যামব্রয়ডারি সহ) স্প্যানিশ ক্লাব প্রিমিয়াম সংস্করণ - football jersey"
                }
              </h2>
              <span>282 Ratting</span>
              <span>Brand: No Brand</span>
            </div>
            {/* body */}
            <div>
              <span>${"40"}</span>
              <span>Color Family{""}</span>
              <span>Size{""}</span>
              <span>Quantity:{""}</span>
            </div>
            <div className="flex gap-4 items-center">
              <Button primary={true}>Buy Now</Button>
              <Button secondary={true}>Add to Cart</Button>
            </div>
          </div>
        </div>

        {/* description */}
        <div></div>
      </div>
    </Container>
  );
}
