import { CardCvcElement, CardElement, CardExpiryElement, CardNumberElement, useElements, useStripe } from "@stripe/react-stripe-js";
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

  const inputStyle = {
    style: {
      base: {
        fontSize: "16px",
        color: "#424770",
        "::placeholder": { color: "#aab7c4" },
      },
      invalid: { color: "#9e2146" },
    },
  };

  return (
    <div>
      <div>
        <h2 className="text-xl font-semibold mb-3">
          Your booking amount {vet?.price}
        </h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Card Number</label>
          <div style={{ border: "1px solid #424770", padding: "10px", borderRadius: "4px" }}>
            <CardNumberElement options={inputStyle} />
          </div>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <div style={{ flex: 1 }}>
            <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>Expiration Date</label>
            <div style={{ border: "1px solid #424770", padding: "10px", borderRadius: "4px" }}>
              <CardExpiryElement options={inputStyle} />
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>CVC</label>
            <div style={{ border: "1px solid #424770", padding: "10px", borderRadius: "4px" }}>
              <CardCvcElement options={inputStyle} />
            </div>
          </div>
        </div>
        <button className="mt-7  px-6 py-2 rounded hover:bg-black bg-primary text-white text-xl font-bold w-full   hove:border " type="submit"  disabled={!stripe || loading}>
        {loading ? "Processing..." : "Pay"}
        </button>
        {error && <p className="text-primary ">{error}</p>}
      </form>
    </div>
  );
};

export default StripeCardForm;
