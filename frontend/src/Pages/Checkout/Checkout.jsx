import { useLocation } from "react-router-dom";
import CheckoutForm from "../../Components/Checkout/CheckoutForm/CheckoutForm";
import PrimaryTitle from "../../Components/UI/PrimaryTitle";
import Container from "../../Components/UI/Container";

export default function Checkout() {
  const location = useLocation();
  const { plan, color, price } = location?.state || {};

  // Content based on plan type
  const planDetails = {
    Basic: [
      "Limited content access",
      "Standard customer support.",
      "Monthly updates.",
    ],
    Standard: [
      "Premium content access.",
      "Priority support.",
      "Access to exclusive resources.",
    ],
    Pro: [
      "Full content access.",
      "24/7 dedicated support.",
      "Personalized sessions.",
    ],
  };

  // Dynamically render features based on the selected plan
  const features = planDetails[plan] || [];

  return (
    <Container>
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-center">Choice Your Payment Option</h2>
      </div>
      <div className="flex flex-col lg:flex-row xl:flex-row justify-between items-start gap-10 mb-20 mt-10">
        {/* Left Side - Checkout Form */}
        <div className="w-full lg:w-[60%] xl:w-[60%] shadow-xl p-10 rounded-xl bg-white">
          <CheckoutForm price={Number(price)} plan={plan} />
        </div>

        {/* Right Side - Plan Details */}
        <div className="w-full lg:w-[40%] xl:w-[40%] bg-[#EBF5FF] p-8 md:p-14 rounded-xl shadow-md">
          <div>
            {plan ? (
              <div className="text-center font-inter">
                <h2 className={`text-${color} text-3xl font-medium`}>
                  {plan} Plan
                </h2>
                <PrimaryTitle titleStyle={`text-${color}`} />

                <p className="text-gray-800 text-sm mb-6">
                  You have selected the{" "}
                  <span className="font-semibold">{plan}</span> plan, designed
                  to give you comprehensive access to exclusive features and
                  resources.
                </p>

                <p className={`text-${color} mt-2 text-3xl font-bold`}>
                  ${price}
                  <span className="text-lg font-normal"> / month</span>
                </p>

                {/* Additional Content */}
                <ul className="mt-6 text-gray-700 text-left space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className={`text-${color} font-bold text-xl`}>
                        ✔
                      </span>
                      <p>{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p className="text-center text-gray-600">No plan selected.</p>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}
