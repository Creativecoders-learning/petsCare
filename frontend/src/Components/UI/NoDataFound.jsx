import React from "react";

const NoDataFound = () => {
      return (
            <div className="bg-secondaryLight w-full border border-red-700">
                  <div className="text-center">
                        <div className="bg-primaryLight p-6 rounded-full inline-block">
                              <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-16 w-16 text-primary"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                              >
                                    <path
                                          fillRule="evenodd"
                                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM9 7a1 1 0 012 0v3a1 1 0 11-2 0V7zm2 6a1 1 0 11-2 0 1 1 0 012 0z"
                                          clipRule="evenodd"
                                    />
                              </svg>
                        </div>
                        <h1 className="text-2xl font-bold text-secondary mt-4">
                              No Data Found
                        </h1>
                        <p className="text-myGray mt-2">
                              We couldn’t find any relevant information right now.
                        </p>
                        <button
                              onClick={() => (window.location.href = "/")}
                              className="bg-primary text-white px-6 py-2 rounded-lg mt-4 shadow hover:bg-primaryBold transition"
                        >
                              Go Back Home
                        </button>
                  </div>
            </div>
      );
};

export default NoDataFound;
