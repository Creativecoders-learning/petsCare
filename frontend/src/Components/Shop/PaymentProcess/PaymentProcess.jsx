import { useState } from "react";
import Checkout from "../../../Pages/Checkout/Checkout";
import Container from "../../UI/Container";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import { FaCartShopping } from "react-icons/fa6";
import { IoBagCheckOutline } from "react-icons/io5";
import { GiConfirmed } from "react-icons/gi";
import PageBanner from "../../UI/PageBanner";
import { useSearchParams } from "react-router-dom";

export default function PaymentProcess() {
  const [searchParams] = useSearchParams();
  const [progress, setProgress] = useState(searchParams && searchParams.get("tab") || "Shipping Cart");

  console.log(searchParams.get("tab"))
  //   handle progress
  const handleProgress = (value) => {
    setProgress(value);
  };

  return (
    <>
    <PageBanner title={"Easy to checkout"} pageName={"Payment"}/>
    <div className="my-10">
      <Container>
        <ul
          aria-label="Colored activity feed"
          role="feed"
          className="relative flex items-center py-12 px-32"
        >
          {/* shipping */}
          <div className={`bg-[#3bb54a] h-[3px] w-full`}></div>
          <li
            role="article"
            className="relative flex flex-col items-center px-2"
          >
            <span
              className={`bg-[#3bb54a] p-4 rounded-full flex justify-center items-center text-2xl text-white`}
            >
              <FaCartShopping />
            </span>
          </li>

          {/* checkout */}
          <div
            className={`${
              progress === "Checkout" ? "bg-[#3bb54a]" : "bg-[#ccc]"
            } h-[3px] w-full`}
          ></div>
          <li
            role="article"
            className="relative flex flex-col items-center px-2"
          >
            <span
              className={`${
                progress === "Checkout" ? "bg-[#3bb54a]" : "bg-gray-400"
              } p-4 rounded-full flex justify-center items-center text-2xl text-white`}
            >
              <IoBagCheckOutline />
            </span>
          </li>

          {/* confirm */}
          <div className="h-[2px] w-full bg-[#ccc]"></div>
          <li
            role="article"
            className="relative flex flex-col items-center px-2"
          >
            <span className="p-4 bg-gray-400 rounded-full flex justify-center items-center text-2xl text-white">
              <GiConfirmed />
            </span>
          </li>
          <div className="h-[2px] w-full bg-[#ccc]"></div>
        </ul>
        <div>
          {progress === "Shipping Cart" && (
            <ShoppingCart handleProgress={handleProgress} />
          )}
          {progress === "Checkout" && <Checkout />}
        </div>
      </Container>
    </div>
    </>
  );
}
