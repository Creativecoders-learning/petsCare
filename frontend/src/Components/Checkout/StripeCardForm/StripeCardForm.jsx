import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useVetsData from "../../../Hooks/api/useVetsData";
import useAxios from "../../../Hooks/useAxios";
import UseAuth from "../../../Hooks/UseAuth";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

const StripeCardForm = () => {
  const { id } = useParams();
  const { user } = UseAuth();
  const apiHandler = useAxios();
  const { vets } = useVetsData();

  const [error, setError] = useState(" ");
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);

  const stripe = useStripe();
  const elements = useElements();

  const vet = vets?.find((item) => item?._id === id);

  useEffect(() => {
    if (vet?.price) {
      apiHandler
        .post("/create-payment-intent", { price: vet.price })
        .then((res) => setClientSecret(res.data.clientSecret))
        .catch((err) => console.error("Error fetching client secret:", err));
    }
  }, [apiHandler, vet?.price]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setError(error.message);
      setLoading(false);
      return;
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError(" ");
    }
    const { paymentIntent, error: confirmedErr } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmedErr) {
      setError(confirmedErr.message);
      toast.error(error.message);
    } else {
      toast.success("Payment successful!");
      console.log("Payment Intent:", paymentIntent);
    }

    setLoading(false);
  };

  console.log(import.meta.env.VITE_Payment_Gateway_PK);


  return (
    <div>
      <div>
        <h2 className="text-xl font-semibold mb-3">
          Your booking amount {vet?.price}
        </h2>
      </div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className="w-full mt-6 text-white bg-primary hover:bg-black py-2 text-x rounded" type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
    </div>
  );
};

export default StripeCardForm;
