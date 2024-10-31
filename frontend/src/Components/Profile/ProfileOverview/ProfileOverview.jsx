import { FaUser, FaEnvelope, FaPhone, FaVenusMars } from "react-icons/fa";
import PrimaryTitle from "../../UI/PrimaryTitle";

const ProfileOverview = ({ user }) => (
      <div className="px-8 font-inter">
            <PrimaryTitle titleStyle="text-primaryBold font-semibold">Profile Overview</PrimaryTitle>
            <div className="space-y-4 mt-4">
                  {/* Name */}
                  <div className="flex items-center space-x-3 text-gray-700">
                        <FaUser className="text-indigo-500" />
                        <p className="font-medium">
                              <span className="text-gray-900 font-semibold">Name:</span> {user?.name || "N/A"}
                        </p>
                  </div>

                  {/* Email */}
                  <div className="flex items-center space-x-3 text-gray-700">
                        <FaEnvelope className="text-green-500" />
                        <p className="font-medium">
                              <span className="text-gray-900 font-semibold">Email:</span> {user?.email || "N/A"}
                        </p>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center space-x-3 text-gray-700">
                        <FaPhone className="text-blue-500" />
                        <p className="font-medium">
                              <span className="text-gray-900 font-semibold">Phone:</span> {user?.phone || "N/A"}
                        </p>
                  </div>

                  {/* Gender */}
                  <div className="flex items-center space-x-3 text-gray-700">
                        <FaVenusMars className="text-pink-500" />
                        <p className="font-medium">
                              <span className="text-gray-900 font-semibold">Gender:</span> {user?.gender || "N/A"}
                        </p>
                  </div>

                  
            </div>
      </div>
);

export default ProfileOverview;
