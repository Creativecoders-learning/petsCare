
const NoDataFound = ({ text = "data" }) => {
      return (
            <div className="bg-secondaryLight rounded-md h-[60vh] flex items-center justify-center">
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
                              No {text} Found
                        </h1>
                        <p className="text-myGray mt-2">
                              You haven’t created any {text} data yet. Start by clicking the button above.
                        </p>

                  </div>

            </div>
      );
};

export default NoDataFound;
