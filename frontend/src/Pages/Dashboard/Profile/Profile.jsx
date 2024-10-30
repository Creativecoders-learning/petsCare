import { useState } from "react";
import { FaUser, FaAddressCard, FaGraduationCap, FaEnvelope, FaPhone, FaMapMarkerAlt, FaEdit } from "react-icons/fa";

const Profile = () => {
      const [selectedSection, setSelectedSection] = useState("profile");
      const [isEditing, setIsEditing] = useState(false);

      // Sample user data with more details
      const user = {
            name: "Kamruzzaman Bayezid",
            email: "kmbayezid955.com",
            photoURL: "https://i.ibb.co.com/6vHb5ZD/profile.jpg",
            phone: "+1 (555) 123-4567",
            address: "123 Main St, New York, NY",
            profileCompletion: 85,
            socialLinks: {
                  facebook: "https://www.facebook.com/kamruzzaman.baayeziid?mibextid=ZbWKwL",
                  linkedin: "https://linkedin.com/in/johndoe",
                  twitter: "https://twitter.com/johndoe",
                  github: "https://github.com/kamruzzamanbayezid",
            },

            accountSettings: {
                  role: "Admin",
                  status: "Active",
                  lastLogin: "2024-10-29",
            },
      };

      const renderSectionContent = () => {
            if (isEditing) {
                  return (
                        <div className="p-8 max-h-[82vh] overflow-y-auto custom-scrollbar">
                              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Edit Profile</h2>

                              {/* Editable Form Fields */}
                              <form className="space-y-6">
                                    {/* Name Field */}
                                    <div className="flex flex-col">
                                          <label className="text-gray-700 font-semibold mb-1">Name</label>
                                          <input
                                                type="text"
                                                defaultValue={user.name}
                                                className="w-full p-3 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:outline-none transition"
                                          />
                                    </div>

                                    {/* Username Field */}
                                    <div className="flex flex-col">
                                          <label className="text-gray-700 font-semibold mb-1">Username</label>
                                          <input
                                                type="text"
                                                defaultValue={user.username}
                                                className="w-full p-3 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:outline-none transition"
                                          />
                                    </div>

                                    {/* Email Field */}
                                    <div className="flex flex-col">
                                          <label className="text-gray-700 font-semibold mb-1">Email</label>
                                          <input
                                                type="email"
                                                defaultValue={user.email}
                                                className="w-full p-3 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:outline-none transition"
                                          />
                                    </div>

                                    {/* Phone Field */}
                                    <div className="flex flex-col">
                                          <label className="text-gray-700 font-semibold mb-1">Phone</label>
                                          <input
                                                type="tel"
                                                defaultValue={user.phone}
                                                className="w-full p-3 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:outline-none transition"
                                          />
                                    </div>

                                    {/* Address Field */}
                                    <div className="flex flex-col">
                                          <label className="text-gray-700 font-semibold mb-1">Address</label>
                                          <input
                                                type="text"
                                                defaultValue={user.address}
                                                className="w-full p-3 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:outline-none transition"
                                          />
                                    </div>

                                    {/* Date of Birth Field */}
                                    <div className="flex flex-col">
                                          <label className="text-gray-700 font-semibold mb-1">Date of Birth</label>
                                          <input
                                                type="date"
                                                defaultValue={user.dob}
                                                className="w-full p-3 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:outline-none transition"
                                          />
                                    </div>

                                    {/* Profile Picture Field */}
                                    <div className="flex flex-col">
                                          <label className="text-gray-700 font-semibold mb-1">Profile Picture</label>
                                          <input
                                                type="file"
                                                className="w-full p-3 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:outline-none transition"
                                                onChange={(e) => setUser({ ...user, profilePicture: e.target.files[0] })}
                                          />
                                          {user.profilePicture && (
                                                <img
                                                      src={URL.createObjectURL(user.profilePicture)}
                                                      alt="Profile Preview"
                                                      className="mt-3 h-20 w-20 rounded-full object-cover"
                                                />
                                          )}
                                    </div>

                                    {/* Save Button */}
                                    <button
                                          type="button"
                                          onClick={() => setIsEditing(false)}
                                          className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition"
                                    >
                                          Save Changes
                                    </button>
                              </form>
                        </div>

                  );
            } else {
                  switch (selectedSection) {
                        case "profile":
                              return (
                                    <div className="p-8">
                                          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Profile Overview</h2>
                                          <div className="space-y-4">
                                                <div className="flex items-center space-x-3 text-gray-700">
                                                      <FaUser className="text-indigo-500" />
                                                      <p>Name: {user?.name}</p>
                                                </div>
                                                <div className="flex items-center space-x-3 text-gray-700">
                                                      <FaEnvelope className="text-indigo-500" />
                                                      <p>Email: {user?.email}</p>
                                                </div>
                                                <div className="flex items-center space-x-3 text-gray-700">
                                                      <FaPhone className="text-indigo-500" />
                                                      <p>Phone: {user?.phone}</p>
                                                </div>
                                                <div className="flex items-center space-x-3 text-gray-700">
                                                      <FaMapMarkerAlt className="text-indigo-500" />
                                                      <p>Address: {user?.address}</p>
                                                </div>
                                          </div>
                                    </div>
                              );
                        case "additionalInfo":
                              return (
                                    <div className="p-8">
                                          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Additional Information</h2>
                                          <p className="text-gray-700 mb-3">Social Links:</p>
                                          <ul className="space-y-2 text-indigo-600">
                                                <li className="flex items-center space-x-2">
                                                      <FaAddressCard />
                                                      <a href={user.socialLinks.facebook} target="_blank" rel="noreferrer">Facebook</a>
                                                </li>
                                                <li className="flex items-center space-x-2">
                                                      <FaAddressCard />
                                                      <a href={user.socialLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                                                </li>
                                                <li className="flex items-center space-x-2">
                                                      <FaAddressCard />
                                                      <a href={user.socialLinks.twitter} target="_blank" rel="noreferrer">Twitter</a>
                                                </li>
                                                <li className="flex items-center space-x-2">
                                                      <FaAddressCard />
                                                      <a href={user.socialLinks.github} target="_blank" rel="noreferrer">GitHub</a>
                                                </li>
                                          </ul>
                                    </div>
                              );

                        case "accountSettings":
                              return (
                                    <div className="p-8">
                                          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Account Settings</h2>
                                          <div className="space-y-4">
                                                <div className="flex items-center space-x-3 text-gray-700">
                                                      <FaGraduationCap className="text-indigo-500" />
                                                      <p>Role: {user.accountSettings.role}</p>
                                                </div>
                                                <div className="flex items-center space-x-3 text-gray-700">
                                                      <FaUser className="text-indigo-500" />
                                                      <p>Status: {user.accountSettings.status}</p>
                                                </div>
                                                <div className="flex items-center space-x-3 text-gray-700">
                                                      <FaUser className="text-indigo-500" />
                                                      <p>Last Login: {user.accountSettings.lastLogin}</p>
                                                </div>

                                          </div>
                                    </div>
                              );
                        default:
                              return null;
                  }
            }
      };



      return (
            <div className="flex flex-col md:flex-row lg:p-8 bg-gray-50 min-h-screen md:space-x-4 lg:space-x-8 p-4 space-y-8 md:space-y-0">

                  {/* Left Sidebar */}
                  <div className="lg:w-1/3 bg-white shadow-lg rounded-lg p-6 flex flex-col">
                        {/* Profile Picture */}
                        <div className="flex flex-col items-center">
                              <img
                                    src={user?.photoURL}
                                    alt="User"
                                    className="w-24 h-24 rounded-full mb-4"
                              />
                              <h1 className="text-xl font-semibold text-primaryBold">{user?.name}</h1>
                              <p className="text-gray-600 mt-1 flex items-center"><FaEnvelope className="mr-1" /> {user?.email}</p>
                        </div>

                        {/* Profile Completion Progress Bar */}
                        <div className="mt-6">
                              <div className="flex justify-between items-center">
                                    <p className="text-gray-600">Profile Completion</p>
                                    <p className="text-primary">{user?.profileCompletion}%</p>
                              </div>
                              <div className="w-full bg-gray-200 h-2 rounded-full mt-1">
                                    <div
                                          className="bg-indigo-500 h-2 rounded-full"
                                          style={{ width: `${user?.profileCompletion}%` }}
                                    ></div>
                              </div>
                        </div>

                        {/* Navigation Options */}
                        <div className="flex-1 mt-8 space-y-4">
                              <button
                                    onClick={() => { setSelectedSection("profile"); setIsEditing(false); }}
                                    className={`w-full flex items-center space-x-2 py-2 px-4 rounded-lg ${selectedSection === "profile" ? "bg-indigo-100 text-primary" : "text-gray-700"}`}
                              >
                                    <FaUser /> <span>Profile Overview</span>
                              </button>
                              <button
                                    onClick={() => { setSelectedSection("additionalInfo"); setIsEditing(false); }}
                                    className={`w-full flex items-center space-x-2 py-2 px-4 rounded-lg ${selectedSection === "additionalInfo" ? "bg-indigo-100 text-primary" : "text-gray-700"}`}
                              >
                                    <FaAddressCard /> <span>Additional Info</span>
                              </button>

                              <button
                                    onClick={() => { setSelectedSection("accountSettings"); setIsEditing(false); }}
                                    className={`w-full flex items-center space-x-2 py-2 px-4 rounded-lg ${selectedSection === "accountSettings" ? "bg-indigo-100 text-primary" : "text-gray-700"}`}
                              >
                                    <FaUser /> <span>Account Settings</span>
                              </button>
                              
                        </div>

                        {/* Edit Profile Button */}
                        <button
                              onClick={() => setIsEditing(true)}
                              className="mt-8 w-full flex items-center justify-center space-x-2 py-2 px-4 rounded-lg bg-blue-500 text-white"
                        >
                              <FaEdit /> <span>Edit Profile</span>
                        </button>
                  </div>

                  {/* Right Content Area */}
                  <div className="flex-1 w-full bg-white h-fit shadow-lg rounded-lg p-0 lg:p-6">
                        {renderSectionContent()}
                  </div>
            </div>
      );
};

export default Profile;
