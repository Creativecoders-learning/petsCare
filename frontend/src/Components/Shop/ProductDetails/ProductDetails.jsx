import { useParams } from "react-router-dom";
import Button from "../../UI/Button";
import usePetsProducts from "../../../Hooks/api/usePetsProducts";
import Container from "../../UI/Container";
import Tabs from "../../UI/Tabs";

export default function ProductDetails() {
  const { id } = useParams();
  const { petsProducts } = usePetsProducts();

  const existingProduct = petsProducts?.find(
    (item) => Number(item?.id) === Number(id)
  );
  console.log(existingProduct);
  return (
    <Container>
      <div className="my-10">
        <div className="flex justify-between items-start gap-6 px-6">
          {/* image */}
          <div className="w-1/2 h-[60vh]">
            <figure className="w-full h-[80%] overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={existingProduct?.image}
                alt=""
              />
            </figure>
            <div className="h-[20%]"></div>
          </div>

          {/* basic info */}
          <div className="w-1/2 flex flex-col gap-8 items-start justify-between">
            {/* title */}
            <div className="flex flex-col gap-2 items-start">
              <span>{existingProduct?.category}</span>
              <h2 className="text-2xl font-medium">
                {existingProduct?.title}
              </h2>
              <span>282 Ratting</span>
              <span>Brand: No Brand</span>
            </div>
            {/* body */}
            <div className="flex flex-col gap-2">
              <span className="text-3xl">${"40"}</span>
              <p>{existingProduct?.description}</p>
              <div>
                <span>Quantity:</span> 
              </div>
            </div>
            {/* buttons */}
            <div className="w-full flex gap-4 items-center">
              <Button primary={true} className="w-full">
                Buy Now
              </Button>
              <Button secondary={true} className="w-full">
                Add to Cart
              </Button>
            </div>
          </div>
        </div>

        {/* description */}
        <Tabs/>
      </div>
    </Container>
  );
}
