import { useState } from "react";
import { CHECKOUTImages } from "../../../image-data/checkout";
import PaypalCardForm from "../PaypalCardForm/PaypalCardForm";
import SSLCommerceForm from "../SSLCommerceForm/SSLCommerceForm";
import VisaCardForm from "../VisaCardForm/VisaCardForm";
import PrimaryTitle from "../../UI/PrimaryTitle";

const cards = [
      {
            name: "paypal",
            logo: CHECKOUTImages.checkout_1,
      },
      {
            name: "SSLCommerce",
            logo: CHECKOUTImages.checkout_2,
      },
      {
            name: "visa",
            logo: CHECKOUTImages.checkout_3,
      },
];

export default function CheckoutForm() {
      const [clickedCard, setClickedCard] = useState("paypal");


      // Form submission handler
      const onSubmit = (data) => {
            const paymentInfo = {
                  name: data.name,
                  email: data.email,
                  address: data.address,
                  country: data.country,
                  phone: data.phone,
                  city: data.city,
                  post_code: data.postCode,
                  currency: data.currency,
            };
            console.log('Payment Info:', paymentInfo);

      };

      return (
            <div className="">
                  <div className="w-full">
                  <div className="flex flex-col gap-2">
                              <PrimaryTitle titleStyle="text-primaryBold">Secure Your Purchase</PrimaryTitle>
                              <p className="text-gray-600 text-md">
                                    Select your preferred payment method below and complete the required details to secure your purchase. We prioritize your security with every transaction.
                              </p>
                        </div>
                        <div className="flex justify-between gap-6 w-full lg:w-[70%] xl:w-[70%] py-10">
                              {cards?.map((item, index) => (
                                    <figure
                                          key={index}
                                          onClick={() => setClickedCard(item.name)}
                                          className={`cursor-pointer border-[1px] ${clickedCard === item.name
                                                ? "border-[#49BBBD]"
                                                : "border-[#D9D9D9]"
                                                } py-2 px-4 rounded-xl`}
                                    >
                                          <img src={item.logo} alt="" />
                                    </figure>
                              ))}
                        </div>
                        <div>
                              {clickedCard === "paypal" && <PaypalCardForm onSubmit={onSubmit} />}
                              {clickedCard === "SSLCommerce" && (
                                    <SSLCommerceForm onSubmit={onSubmit} />
                              )}
                              {clickedCard === "visa" && <VisaCardForm onSubmit={onSubmit} />}
                        </div>
                  </div>
            </div>
      );
}
