import { FaCheckCircle, FaClock, FaGraduationCap } from "react-icons/fa";
import PrimaryTitle from "../../UI/PrimaryTitle";

const AccountSettings = ({ user }) => {      
      return (
            <div className="px-8 font-inter">
                  <PrimaryTitle titleStyle="text-primaryBold font-semibold">Account Settings</PrimaryTitle>

                  <div className="space-y-4 mt-4">
                        {/* Role */}
                        <div className="flex items-center space-x-3 text-gray-700">
                              <FaGraduationCap className="text-indigo-500" />
                              <p className="font-medium">
                                    <span className="text-gray-900 font-semibold">Role:</span> {user?.accountSettings?.role || "N/A"}
                              </p>
                        </div>

                        {/* Status */}
                        <div className="flex items-center space-x-3 text-gray-700">
                              <FaCheckCircle className="text-green-500" />
                              <p className="font-medium">
                                    <span className="text-gray-900 font-semibold">Status:</span> {user?.accountSettings?.status || "N/A"}
                              </p>
                        </div>

                        {/* Last Login */}
                        <div className="flex items-center space-x-3 text-gray-700">
                              <FaClock className="text-blue-500" />
                              <p className="font-medium">
                                    <span className="text-gray-900 font-semibold">Last Login:</span> {user?.accountSettings?.lastLogin || "N/A"}
                              </p>
                        </div>
                  </div>
            </div>
      );
};

export default AccountSettings;