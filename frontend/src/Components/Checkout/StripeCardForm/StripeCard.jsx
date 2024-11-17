import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import StripeCardForm from "./StripeCardForm";
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const StripeCard = () => {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <StripeCardForm />
      </Elements>
    </div>
  );
};

export default StripeCard;
