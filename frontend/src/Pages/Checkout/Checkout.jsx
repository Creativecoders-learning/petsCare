import { useLocation } from "react-router-dom";
import CheckoutForm from "../../Components/Checkout/CheckoutForm/CheckoutForm";
import Button from "../../Components/UI/Button";
import PrimaryTitle from "../../Components/UI/PrimaryTitle";

export default function Checkout() {
      const location = useLocation();
      const { plan, color, price } = location?.state || {};

      return (
            <div className="flex flex-col lg:flex-row xl:flex-row justify-between items-start gap-10 container-class my-20">
                  {/* Left Side - Checkout Form */}
                  <div className="w-full lg:w-[60%] xl:w-[60%] shadow-xl p-10 rounded-xl bg-white">
                        <CheckoutForm />
                        
                  </div>

                  <div className="w-full lg:w-[40%] xl:w-[40%] bg-[#EBF5FF] p-10 rounded-xl shadow-md">
                        <div className="p-8">
                              {plan ? (
                                    <div className="text-center font-inter">
                                          <h2 className={`text-${color} text-3xl font-medium`}>{plan} Plan</h2>
                                          <PrimaryTitle titleStyle={`text-${color}`}></PrimaryTitle>
                                          <p className="text-gray-600 text-sm mb-6">
                                                You've selected the <span className="font-semibold">{plan}</span> plan, designed to give you comprehensive access to exclusive features and resources.
                                          </p>
                                          <p className={`text-${color} mt-2 text-3xl font-bold`}>
                                                {price}<span className="text-lg font-normal"> / month</span>
                                          </p>


                                          <Button btnStyle="w-full mt-8 py-3" primary>
                                                Complete Purchase
                                          </Button>


                                    </div>
                              ) : (
                                    <p className="text-center text-gray-600">No plan selected.</p>
                              )}
                        </div>
                  </div>
            </div>
      );
}
