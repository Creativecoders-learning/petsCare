import Checkout from "../../../Pages/Checkout/Checkout";
import Container from "../../UI/Container";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
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
