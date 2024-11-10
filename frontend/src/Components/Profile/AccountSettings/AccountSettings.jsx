import { FaCheckCircle, FaClock, FaGraduationCap } from "react-icons/fa";
import PrimaryTitle from "../../UI/PrimaryTitle";
import UseAuth from "../../../Hooks/UseAuth";

const AccountSettings = ({ user }) => {

      const { user: authUser } = UseAuth();

      // Convert to a JavaScript Date object
      const date = new Date(Number(authUser?.metadata?.lastLoginAt));
      const formattedDate = date.toDateString();

      return (
            <div className="px-8 font-inter">
                  <PrimaryTitle titleStyle="text-primaryBold font-semibold">Account Settings</PrimaryTitle>

                  <div className="space-y-4 mt-4">
                        {/* Role */}
                        <div className="flex items-center space-x-3 text-gray-700">
                              <FaGraduationCap className="text-indigo-500" />
                              <p className="font-medium">
                                    <span className="text-gray-900 font-semibold">Role:</span> {user?.role || "N/A"}
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
                                    <span className="text-gray-900 font-semibold">Last Login:</span> {formattedDate || "N/A"}
                              </p>
                        </div>
                  </div>
            </div>
      );
};

export default AccountSettings;