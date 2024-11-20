import Checkout from "../../../Pages/Checkout/Checkout";
import Container from "../../UI/Container";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import { FaCartShopping } from "react-icons/fa6";
import { IoBagCheckOutline } from "react-icons/io5";
import { GiConfirmed } from "react-icons/gi";
import PageBanner from "../../UI/PageBanner";
import OrderSuccess from "./OrderSuccess/OrderSuccess";
import UseAuth from "../../../Hooks/UseAuth";

export default function PaymentProcess() {
  const {progress} = UseAuth();


  console.log(progress)
  return (
    <>
      <PageBanner title={"Easy to checkout"} pageName={"Payment"} />
      <div className="my-10">
        <Container>
          <ul
            aria-label="Colored activity feed"
            role="feed"
            className="relative flex items-center py-12 px-32"
          >
            {/* shipping */}
            <div className={`${
                progress === "ShippingCart" | "Checkout" | "OrderSuccess" ? "bg-[#3bb54a]" : "bg-[#ccc]"
              } h-[3px] w-full`}></div>
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
                progress === "Checkout" | "Checkout" | "OrderSuccess" ? "bg-[#3bb54a]" : "bg-[#ccc]"
              } h-[3px] w-full`}
            ></div>
            <li
              role="article"
              className="relative flex flex-col items-center px-2"
            >
              <span
                className={`${
                  progress === "Checkout" | "Checkout" | "OrderSuccess" ? "bg-[#3bb54a]" : "bg-gray-400"
                } p-4 rounded-full flex justify-center items-center text-2xl text-white`}
              >
                <IoBagCheckOutline />
              </span>
            </li>

            {/* confirm */}
            <div className={`${progress === "OrderSuccess" ? "bg-[#3bb54a]" : "bg-[#ccc]"
              } h-[2px] w-full bg-[#ccc]`}></div>
            <li
              role="article"
              className="relative flex flex-col items-center px-2"
            >
              <span className={`${
                  progress === "OrderSuccess" ? "bg-[#3bb54a]" : "bg-gray-400"
                } p-4 rounded-full flex justify-center items-center text-2xl text-white`}>
                <GiConfirmed />
              </span>
            </li>
            <div className={`${progress === "OrderSuccess" ? "bg-[#3bb54a]" : "bg-[#ccc]"
              } h-[2px] w-full bg-[#ccc]`}></div>
          </ul>
          <div>
            {progress === "ShippingCart" && (
              <ShoppingCart />
            )}
            {progress === "Checkout" && <Checkout progress={progress}/>}
            {progress === "OrderSuccess" && <OrderSuccess/>}
          </div>
        </Container>
      </div>
    </>
  );
}
