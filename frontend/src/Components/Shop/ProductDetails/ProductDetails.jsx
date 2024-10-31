import { Link, useParams } from "react-router-dom";
import Button from "../../UI/Button";
import usePetsProducts from "../../../Hooks/api/usePetsProducts";
import Container from "../../UI/Container";
import Tabs from "../../UI/Tabs";
import { useState } from "react";

export default function ProductDetails() {
  const { id } = useParams();
  const { petsProducts } = usePetsProducts();
  const [quantity, setQuantity] = useState(0);

  const existingProduct = petsProducts?.find(
    (item) => Number(item?.id) === Number(id)
  );
  console.log(existingProduct);
  return (
    <Container>
      <div className="my-10 flex flex-col gap-20">
        <div className="flex px-6 py-4 h-[70vh]">
          {/* image */}
          <div className="w-1/2 flex flex-col gap-2 justify-between items-center overflow-hidden">
            <div className="w-[80%] h-[80%] p-4 bg-[#F5F2EB]">
              <img
                className="w-full h-full object-contain"
                src={existingProduct?.image}
                alt=""
              />
            </div>
            <div className="w-[80%] h-[20%] flex justify-start gap-4">
              <div className="p-2 bg-[#F5F2EB] w-full h-full">
                <img
                  src={existingProduct?.image}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-2 bg-[#F5F2EB] w-full h-full">
                <img
                  src={existingProduct?.image}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-2 bg-[#F5F2EB] w-full h-full">
                <img
                  src={existingProduct?.image}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-2 bg-[#F5F2EB] w-full h-full">
                <img
                  src={existingProduct?.image}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* basic info */}
          <div className="w-1/2 flex flex-col justify-between">
            {/* title */}
            <div className="flex flex-col gap-2 items-start">
              <span>{existingProduct?.category}</span>
              <h2 className="text-2xl font-medium">{existingProduct?.title}</h2>
              <span>282 Ratting</span>
              <span>Brand: No Brand</span>
            </div>
            {/* body */}
            <div className="flex flex-col gap-2">
              <span className="text-3xl">${"40"}</span>
              <p>{existingProduct?.description}</p>
              <div className="flex gap-4 items-center text-xl">
                <span>Quantity:</span>
                <div className="inline-flex border border-gray-400 text-xl">
                  <span
                    className="flex justify-center items-center px-4 py-2 border-r border-gray-400 cursor-pointer"
                    onClick={() => setQuantity(quantity > 0 ? quantity - 1 : 0)}
                  >
                    {"-"}
                  </span>
                  <span className="flex justify-center items-center px-4 py-2">
                    {quantity}
                  </span>
                  <span
                    className="flex justify-center items-center px-4 py-2 border-l border-gray-400 cursor-pointer"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    {"+"}
                  </span>
                </div>
              </div>
            </div>
            {/* buttons */}
            <div className="w-full flex gap-4 items-center">
              <Link to={"/payment-process"} className="w-full">
              <Button primary={true}>
                Buy Now
              </Button>
              </Link>
              <Link to={"/payment-process"} className="w-full">
                <Button secondary={true}>
                  Shopping Cart
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* description */}
        <Tabs />
      </div>
    </Container>
  );
}
