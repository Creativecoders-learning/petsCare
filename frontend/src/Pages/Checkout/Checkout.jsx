import { useLocation } from "react-router-dom";
import CheckoutForm from "../../Components/Checkout/CheckoutForm/CheckoutForm";

export default function Checkout() {

      const location = useLocation();
      const { plan, color, price } = location?.state || {};
      console.log(location);


      return (
            <div className="flex flex-col-reverse lg:flex-row xl:flex-row justify-between items-start gap-10 container-class my-20">
                  <div className="w-full lg:w-[60%] xl:w-[60%] shadow-xl p-10 rounded-xl">
                        <CheckoutForm />
                  </div>
                  <div className="w-full lg:w-[40%] xl:w-[40%] bg-[#EBF5FF] p-10 rounded-xl">
                        <div className="w-full p-8">
                              
                              {plan ? (
                                    <div className="text-center font-inter">
                                          <div className="mb-4">
                                                <h2 className={` text-${color} text-2xl font-semibold`}>{plan} Plan</h2>
                                                <p className="text-gray-600 mt-2">
                                                      You’ve selected the <span className="font-semibold">{plan}</span> plan.
                                                </p>
                                                <p className={`text-${color} mt-2 text-3xl font-bold `}>{price}<span className="text-lg font-normal">/month</span></p>
                                          </div>

                                          <button className={`w-full py-3 mt-4 bg-primaryBold text-white rounded-lg font-semibold text-lg`}>
                                                Complete Purchase
                                          </button>
                                    </div>
                              ) : (
                                    <p className="text-center text-gray-600">No plan selected.</p>
                              )}
                        </div>
                  </div>
            </div>
      );
}
