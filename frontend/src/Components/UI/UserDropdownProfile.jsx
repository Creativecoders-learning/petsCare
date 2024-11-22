import { Link } from "react-router-dom";
import Button from "./Button";
import { useState } from "react";
import UseAuth from "../../Hooks/UseAuth";
import toast from "react-hot-toast";

const UserDropdownProfile = ({ setIsToggleOpen, loggedInUser }) => {

      const [isDropdownOpen, setIsDropdownOpen] = useState(false);
      const { logOut } = UseAuth();


      const handleLogOut = () => {
            logOut()
                  .then(() => {
                        toast.success('Successfully logged Out!!')
                  })
                  .catch(error => {
                        toast.error(error?.message)
                  })
      }


      return (
            <div className="relative">
                  <figure
                        className="w-12 h-12 rounded-full overflow-hidden cursor-pointer"
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
                  {/* Dropdown menu start */}
                  <div
                        className={`absolute -right-14 md:right-0 mt-2 w-80 md:w-96 py-2 bg-white rounded-md shadow-lg transform transition-all duration-300 flex flex-col gap-6 ${isDropdownOpen
                              ? "opacity-100 scale-100"
                              : "opacity-0 scale-95 pointer-events-none"
                              }`}
                  >
                        {/* Dropdown head */}
                        <div className="flex flex-col items-center">
                              <figure className="w-16 h-16 rounded-full mb-3">
                                    <img
                                          className="w-16 h-16 rounded-full"
                                          src={loggedInUser?.image}
                                          alt="User Profile"
                                    />
                              </figure>
                              {/* user name */}
                              <h4 className="text-2xl text-center font-nunito font-bold">
                                    {loggedInUser?.name}
                              </h4>
                              {/* user email */}
                              <p className="text-[#646464] text-center mb-4">
                                    {loggedInUser?.email}
                              </p>
                              {/* profile */}
                              <div className="flex items-center gap-3">
                                    <Link to={`/dashboard/profile`}>
                                          <li className="flex items-stretch text-base mb-2">
                                                <Button outlineBtn>
                                                      <span className="relative">View profile</span>
                                                </Button>
                                          </li>
                                    </Link>
                                    <Link to={`/dashboard`}>
                                          <li className="flex items-stretch text-base mb-2">
                                                <Button outlineBtn>
                                                      <span className="relative">Dashboard</span>
                                                </Button>
                                          </li>
                                    </Link>
                              </div>

                              {/* log out */}
                              <div onClick={handleLogOut}>
                                    <Button primary>Log out</Button>
                              </div>
                        </div>

                  </div>
                  {/* Dropdown menu end */}
            </div>
      );
};

export default UserDropdownProfile;