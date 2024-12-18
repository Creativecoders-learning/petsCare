import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const PaymentSuccess = () => {

      const { transId } = useParams();
      const [orders, setOrders] = useState([]);
      console.log('transId',transId);
      

      useEffect(() => {
            fetch('http://localhost:8000/orders')
                  .then(res => res.json())
                  .then(data => setOrders(data))
      }, [])

      const paymentInfo = orders?.find(order => order?.transactionId === transId);
      console.log('PaymentInfo:', paymentInfo);


      return (
            <div className="min-h-screen bg-secondaryLight flex items-center justify-center px-6">
                  <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl">
                        {/* Header */}
                        <div className="bg-primary text-white p-6 rounded-t-lg flex items-center justify-between">
                              <h1 className="text-2xl font-bold">Payment Successful</h1>
                              <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-10 w-10 text-green-400"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                              >
                                    <path
                                          fillRule="evenodd"
                                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                          clipRule="evenodd"
                                    />
                              </svg>
                        </div>

                        {/* Content */}
                        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                              {/* Customer Info */}
                              <div>
                                    <h2 className="text-secondary font-semibold text-lg mb-4">
                                          Customer Details
                                    </h2>
                                    <ul className="space-y-2">
                                          <li>
                                                <span className="font-bold text-myGray">Name:</span>{" "}
                                                {paymentInfo?.order?.name}
                                          </li>
                                          <li>
                                                <span className="font-bold text-myGray">Email:</span>{" "}
                                                {paymentInfo?.order?.email}
                                          </li>
                                          <li>
                                                <span className="font-bold text-myGray">Phone:</span>{" "}
                                                {paymentInfo?.order?.phone}
                                          </li>
                                          <li>
                                                <span className="font-bold text-myGray">Address:</span>{" "}
                                                {paymentInfo?.order?.address}, {paymentInfo?.order?.city}, {paymentInfo?.order?.country}
                                          </li>
                                    </ul>
                              </div>

                              {/* Payment Info */}
                              <div>
                                    <h2 className="text-secondary font-semibold text-lg mb-4">
                                          Payment Details
                                    </h2>
                                    <ul className="space-y-2">
                                          <li>
                                                <span className="font-bold text-myGray">Plan:</span>{" "}
                                                {paymentInfo?.order?.plan}
                                          </li>
                                          <li>
                                                <span className="font-bold text-myGray">Amount:</span>{" "}
                                                {paymentInfo?.order?.price} {paymentInfo?.order?.currency}
                                          </li>
                                          <li>
                                                <span className="font-bold text-myGray">Post Code:</span>{" "}
                                                {paymentInfo?.order?.post_code}
                                          </li>
                                          <li>
                                                <span className="font-bold text-myGray">Transaction Id:</span>{" "}
                                                {paymentInfo?.transactionId}
                                          </li>
                                    </ul>
                              </div>
                        </div>

                        {/* Buttons */}
                        <div className="p-6 bg-secondary flex justify-between items-center rounded-b-lg">
                              <Link to='/'>
                                    <button
                                          onClick={() => (window.location.href = "/")}
                                          className="bg-primary text-white px-6 py-2 rounded-lg shadow hover:bg-primaryBold transition"
                                    >
                                          Back to Home
                                    </button>
                              </Link>
                              <Link to='/dashboard/profile'>
                                    <button
                                          className="bg-primaryLight text-white px-6 py-2 rounded-lg shadow hover:bg-primary transition"
                                    >
                                          View Your Profile
                                    </button>
                              </Link>
                        </div>
                  </div>
            </div>
      );
};

export default PaymentSuccess;
