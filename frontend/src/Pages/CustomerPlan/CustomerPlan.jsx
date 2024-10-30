import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TiPlus, TiMinus } from "react-icons/ti";
import PrimaryTitle from "../../Components/UI/PrimaryTitle";
import Container from "../../Components/UI/Container";

const CustomerPlan = () => {

      const [activeIndex, setActiveIndex] = useState(0);
      const navigate = useNavigate();

      const toggleFAQ = (index) => {
            setActiveIndex(activeIndex === index ? null : index);
      };


      const handleSelectPlan = (plan, price, color) => {
            navigate("/checkout", { state: { plan, price, color } }); // Redirect to checkout with the selected plan
      };

      return (
            <Container>
                  <div className="min-h-screen p-8 font-inter bg-white">
                        {/* Page Header */}
                        <div className="text-center mb-16">
                              <div className="flex justify-center">
                                    <PrimaryTitle titleStyle="text-6xl font-bold font-acme text-primaryBold">Our Subscription Plans</PrimaryTitle>
                              </div>
                              <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                                    Explore our plans and find the one that best suits your needs. Each option provides tailored benefits to enhance your experience.
                              </p>
                        </div>

                        {/* Plan Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                              {/* Basic Plan */}
                              <div className="p-8 bg-white shadow-md rounded-lg transform transition duration-300 hover:scale-105 border border-gray-300 hover:border-blue-400 hover:shadow-lg">
                                    <h2 className="text-2xl font-semibold text-blue-600 font-acme mb-4">Basic</h2>
                                    <p className="text-3xl font-bold text-gray-800">$10<span className="text-lg font-normal">/month</span></p>
                                    <p className="text-sm text-gray-500">✔ 7-Day Free Trial</p>
                                    <ul className="mt-6 space-y-3 text-gray-600">
                                          <li>✔ Limited content access</li>
                                          <li>✔ Standard support</li>
                                          <li>✔ Monthly updates</li>
                                    </ul>
                                    <button
                                          onClick={() => handleSelectPlan("Basic", "$10", "blue-600",)}
                                          className="mt-8 w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-semibold">
                                          Select Basic
                                    </button>
                              </div>

                              {/* Standard Plan */}
                              <div className="p-8 bg-white shadow-md rounded-lg transform transition duration-300 hover:scale-105 border border-gray-300 hover:border-green-400 hover:shadow-lg">
                                    <h2 className="text-2xl font-semibold text-green-600 font-acme mb-4">Standard</h2>
                                    <p className="text-3xl font-bold text-gray-800">$30<span className="text-lg font-normal">/month</span></p>
                                    <p className="text-sm text-gray-500">✔ 14-Day Free Trial</p>
                                    <ul className="mt-6 space-y-3 text-gray-600">
                                          <li>✔ Premium content access</li>
                                          <li>✔ Priority support</li>
                                          <li>✔ Access to exclusive resources</li>
                                    </ul>
                                    <button
                                          onClick={() => handleSelectPlan("Standard", "$30", "green-600")}
                                          className="mt-8 w-full py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-semibold">
                                          Select Standard
                                    </button>
                              </div>

                              {/* Pro Plan */}
                              <div className="p-8 bg-white shadow-md rounded-lg transform transition duration-300 hover:scale-105 border border-gray-300 hover:border-gray-800 hover:shadow-lg">
                                    <h2 className="text-2xl font-semibold text-primaryBold font-acme mb-4">Pro</h2>
                                    <p className="text-3xl font-bold text-gray-800">$50<span className="text-lg font-normal">/month</span></p>
                                    <p className="text-sm text-gray-500">✔ 30-Day Free Trial</p>
                                    <ul className="mt-6 space-y-3 text-gray-600">
                                          <li>✔ Full content access</li>
                                          <li>✔ 24/7 dedicated support</li>
                                          <li>✔ Personalized sessions</li>
                                    </ul>
                                    <button
                                          onClick={() => handleSelectPlan("Pro", "$50", "primaryBold")}
                                          className="mt-8 w-full py-3 bg-primaryBold text-white rounded-lg hover:bg-gray-900 transition-colors font-semibold">
                                          Select Pro
                                    </button>
                              </div>
                        </div>

                        {/* Comparison Table */}
                        <div className="overflow-x-auto mt-16 w-full mx-auto">
                              <table className="min-w-full bg-white shadow-md rounded-lg">
                                    <thead className="bg-gray-800 text-white ">
                                          <tr>
                                                <th className="py-4 px-6">Features</th>
                                                <th className="py-4 px-6">Basic</th>
                                                <th className="py-4 px-6">Standard</th>
                                                <th className="py-4 px-6">Pro</th>
                                          </tr>
                                    </thead>
                                    <tbody className="text-center text-gray-800">
                                          <tr className="hover:bg-gray-100">
                                                <td className="py-4 px-6 border-b">Content Access</td>
                                                <td className="py-4 px-6 border-b">Limited</td>
                                                <td className="py-4 px-6 border-b">Premium</td>
                                                <td className="py-4 px-6 border-b">Full</td>
                                          </tr>
                                          <tr className="hover:bg-gray-100">
                                                <td className="py-4 px-6 border-b">Support</td>
                                                <td className="py-4 px-6 border-b">Standard</td>
                                                <td className="py-4 px-6 border-b">Priority</td>
                                                <td className="py-4 px-6 border-b">24/7 Dedicated</td>
                                          </tr>
                                          <tr className="hover:bg-gray-100">
                                                <td className="py-4 px-6 border-b">Resources</td>
                                                <td className="py-4 px-6 border-b">None</td>
                                                <td className="py-4 px-6 border-b">Exclusive</td>
                                                <td className="py-4 px-6 border-b">Personalized</td>
                                          </tr>
                                          <tr className="hover:bg-gray-100">
                                                <td className="py-4 px-6 border-b">Sessions</td>
                                                <td className="py-4 px-6 border-b">None</td>
                                                <td className="py-4 px-6 border-b">Group</td>
                                                <td className="py-4 px-6 border-b">One-on-One</td>
                                          </tr>
                                          <tr className="hover:bg-gray-100">
                                                <td className="py-4 px-6 border-b">Free Trial</td>
                                                <td className="py-4 px-6 border-b">✔ 7 Days</td>
                                                <td className="py-4 px-6 border-b">✔ 14 Days</td>
                                                <td className="py-4 px-6 border-b">✔ 30 Days</td>
                                          </tr>
                                    </tbody>
                              </table>
                        </div>

                        {/* Frequently Asked Questions */}
                        <div className="mt-16 max-w-5xl mx-auto">
                              <div className="flex justify-center">
                                    <PrimaryTitle titleStyle="text-5xl font-bold font-acme text-primaryBold">Frequently Asked Questions?</PrimaryTitle>
                              </div>
                              <div className="overflow-hidden">
                                    {/* FAQ Item 1 */}
                                    <div className="border-y-2 border-gray-300 py-3">
                                          <button
                                                className="flex justify-between items-center w-full p-4 text-left focus:outline-none transition duration-200"
                                                onClick={() => toggleFAQ(0)}
                                          >
                                                <span className="text-xl font-semibold text-secondary">What is included in the Basic plan?</span>
                                                <span className="text-gray-600">{activeIndex === 0 ? <TiMinus className="text-2xl text-primary" /> : <TiPlus className="text-2xl text-primary" />}</span>
                                          </button>
                                          <div
                                                className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === 0 ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
                                          >
                                                <p className="p-4 text-base text-gray-700 bg-blue-50 border-l-4 border-blue-500">
                                                      The Basic plan includes access to a curated selection of courses, standard customer support via email, and monthly updates to ensure you're always up-to-date with the latest content. This plan is designed for those who are just starting their learning journey and want to explore without a significant commitment.
                                                </p>
                                          </div>
                                    </div>

                                    {/* FAQ Item 2 */}
                                    <div className="border-y-2 border-gray-300 py-3">
                                          <button
                                                className="flex justify-between items-center w-full p-4 text-left focus:outline-none transition duration-200"
                                                onClick={() => toggleFAQ(1)}
                                          >
                                                <span className="text-xl font-semibold text-secondary">Can I upgrade my plan later?</span>
                                                <span className="text-gray-600">{activeIndex === 1 ? <TiMinus className="text-2xl text-primary" /> : <TiPlus className="text-2xl text-primary" />}</span>
                                          </button>
                                          <div
                                                className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === 1 ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
                                          >
                                                <p className="p-4 text-base text-gray-700 bg-blue-50 border-l-4 border-blue-500">
                                                      Absolutely! You can upgrade your plan at any time through your account settings. Whether you're looking for more advanced content or additional features, we offer flexible options that can be tailored to your evolving needs.
                                                </p>
                                          </div>
                                    </div>

                                    {/* FAQ Item 3 */}
                                    <div className="border-y-2 border-gray-300 py-3">
                                          <button
                                                className="flex justify-between items-center w-full p-4 text-left focus:outline-none transition duration-200"
                                                onClick={() => toggleFAQ(2)}
                                          >
                                                <span className="text-xl font-semibold text-secondary">Is there a money-back guarantee?</span>
                                                <span className="text-gray-600">{activeIndex === 2 ? <TiMinus className="text-2xl text-primary" /> : <TiPlus className="text-2xl text-primary" />}</span>
                                          </button>
                                          <div
                                                className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === 2 ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
                                          >
                                                <p className="p-4 text-base text-gray-700 bg-blue-50 border-l-4 border-blue-500">
                                                      Yes, we understand that choosing the right plan is important. That's why we offer a 30-day money-back guarantee. If you're not satisfied with your experience, simply reach out to our support team within 30 days for a full refund—no questions asked.
                                                </p>
                                          </div>
                                    </div>

                                    {/* FAQ Item 4 */}
                                    <div className="border-y-2 border-gray-300 py-3">
                                          <button
                                                className="flex justify-between items-center w-full p-4 text-left focus:outline-none transition duration-200"
                                                onClick={() => toggleFAQ(3)}
                                          >
                                                <span className="text-xl font-semibold text-secondary">How do I cancel my subscription?</span>
                                                <span className="text-gray-600">{activeIndex === 3 ? <TiMinus className="text-2xl text-primary" /> : <TiPlus className="text-2xl text-primary" />}</span>
                                          </button>
                                          <div
                                                className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === 3 ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
                                          >
                                                <p className="p-4 text-base text-gray-700 bg-blue-50 border-l-4 border-blue-500">
                                                      You can cancel your subscription at any time through your account settings. Simply navigate to the billing section, and follow the prompts to cancel. We aim to make this process as smooth as possible, and our support team is here to assist you if needed.
                                                </p>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </Container>
      );
};

export default CustomerPlan;
