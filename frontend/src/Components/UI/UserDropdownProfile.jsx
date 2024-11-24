import { Link } from "react-router-dom";
import Button from "./Button";
import { useState } from "react";
import UseAuth from "../../Hooks/UseAuth";
import toast from "react-hot-toast";
import { FaCog, FaSignOutAlt, FaUserCircle, FaTachometerAlt } from "react-icons/fa";

const UserDropdownProfile = ({ setIsToggleOpen, loggedInUser }) => {
      const [isDropdownOpen, setIsDropdownOpen] = useState(false);
      const { logOut } = UseAuth();

      const handleLogOut = () => {
            logOut()
                  .then(() => toast.success("Successfully logged out!"))
                  .catch((error) => toast.error(error?.message));
      };

      return (
            <div className="relative">
                  {/* Profile Image */}
                  <figure
                        className="w-12 h-12 rounded-full overflow-hidden cursor-pointer border border-gray-300"
                        onClick={() => {
                              setIsDropdownOpen(!isDropdownOpen);
                              setIsToggleOpen(false);
                        }}
                  >
                        <img
                              className="w-full h-full rounded-full object-cover"
                              src={loggedInUser?.image}
                              alt="User Profile"
                        />
                  </figure>

                  {/* Dropdown menu */}
                  <div
                        className={`absolute -right-24 lg:right-0 mt-2 w-80 bg-white rounded-lg shadow-md py-4 transform transition-all duration-300 flex flex-col gap-4 ${isDropdownOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
                  >
                        {/* Dropdown Header */}
                        <div className="flex flex-col items-center">
                              <figure className="w-16 h-16 rounded-full mb-3 border border-gray-200">
                                    <img
                                          className="w-full h-full rounded-full object-cover"
                                          src={loggedInUser?.image}
                                          alt="User Profile"
                                    />
                              </figure>
                              <h4 className="text-xl font-bold text-gray-800">{loggedInUser?.name}</h4>
                              <p className="text-gray-500">{loggedInUser?.email}</p>
                        </div>

                        {/* Options */}
                        <div className="border-t pt-4 flex flex-col gap-2">
                              <Link
                                    to="/dashboard/profile"
                                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                              >
                                    <FaUserCircle className="mr-3 text-xl" />
                                    View Profile
                              </Link>
                              <Link
                                    to="/dashboard"
                                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                              >
                                    <FaTachometerAlt className="mr-3 text-xl" />
                                    Dashboard
                              </Link>
                              <Link
                                    to="/dashboard/profile"
                                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                              >
                                    <FaCog className="mr-3 text-xl" />
                                    Settings
                              </Link>
                        </div>

                        {/* Logout */}
                        <div className="border-t pt-2">
                              <button
                                    onClick={handleLogOut}
                                    className="flex items-center w-full px-4 py-2 text-red-500 hover:bg-gray-100"
                              >
                                    <FaSignOutAlt className="mr-3 text-xl" />
                                    Log Out
                              </button>
                        </div>
                  </div>
            </div>
      );
};

export default UserDropdownProfile;
