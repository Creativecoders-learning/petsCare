import { useLocation } from "react-router-dom";
import CheckoutForm from "../../Components/Checkout/CheckoutForm/CheckoutForm";
import Container from "../../Components/UI/Container";

export default function Checkout() {
  const location = useLocation();
  const { plan, price } = location?.state || {};


  return (
    <Container>
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-center">Choice Your Payment Option</h2>
      </div>
      <div className="mb-20 mt-10">
        <div className="">
          <CheckoutForm price={Number(price)} plan={plan} />
        </div>
      </div>
    </Container>
  );
}
