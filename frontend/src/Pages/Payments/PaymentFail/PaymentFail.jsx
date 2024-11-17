import { Link } from "react-router-dom";

const PaymentFail = () => {
      return (
            <div className="h-[80vh] bg-secondaryLight flex items-center justify-center px-6">
                  <div className="bg-white rounded-lg shadow-lg w-full max-w-md text-center p-6">
                        {/* Header */}
                        <div className="bg-red-500 text-white p-4 rounded-t-lg">
                              <h1 className="text-2xl font-bold">Payment Failed</h1>
                        </div>

                        {/* Message */}
                        <div className="p-4">
                              <p className="text-lg">
                                    Unfortunately, your payment could not be processed. Please try again.
                              </p>
                        </div>

                        {/* Retry Button */}
                        <div className="p-4">
                              <Link to='/'>
                                    <button
                                          className="bg-primary text-white px-6 py-2 rounded-lg shadow hover:bg-primaryBold transition"
                                    >
                                          Try Again
                                    </button>
                              </Link>
                        </div>
                  </div>
            </div>
      );
};

export default PaymentFail;
