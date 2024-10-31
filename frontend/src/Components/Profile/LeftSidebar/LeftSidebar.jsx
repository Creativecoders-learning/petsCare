import { FaEnvelope, FaEdit, FaUser, FaAddressCard } from "react-icons/fa";

const LeftSidebar = ({ user, selectedSection, setSelectedSection, setIsEditing }) => (
      <div className="lg:w-1/3 bg-white shadow-lg rounded-lg p-6 flex flex-col font-inter">
            <div className="flex flex-col items-center">
                  <img
                        src={user?.photoURL}
                        alt="User"
                        className="w-24 h-24 rounded-full mb-4"
                  />
                  <h1 className="text-xl font-semibold text-primaryBold">{user?.name}</h1>
                  <p className="text-gray-600 mt-1 flex items-center"><FaEnvelope className="mr-1" /> {user?.email}</p>
            </div>
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
            <div className="flex-1 mt-8 space-y-4">
                  <button onClick={() => { setSelectedSection("profile"); setIsEditing(false); }}
                        className={`w-full flex items-center space-x-2 py-2 px-4 rounded-lg ${selectedSection === "profile" ? "bg-indigo-100 text-primary" : "text-gray-700"}`}>
                        <FaUser /> <span>Profile Overview</span>
                  </button>
                  <button onClick={() => { setSelectedSection("additionalInfo"); setIsEditing(false); }}
                        className={`w-full flex items-center space-x-2 py-2 px-4 rounded-lg ${selectedSection === "additionalInfo" ? "bg-indigo-100 text-primary" : "text-gray-700"}`}>
                        <FaAddressCard /> <span>Additional Info</span>
                  </button>
                  <button onClick={() => { setSelectedSection("accountSettings"); setIsEditing(false); }}
                        className={`w-full flex items-center space-x-2 py-2 px-4 rounded-lg ${selectedSection === "accountSettings" ? "bg-indigo-100 text-primary" : "text-gray-700"}`}>
                        <FaUser /> <span>Account Settings</span>
                  </button>
            </div>
            <button onClick={() => setIsEditing(true)} className="mt-8 w-full flex items-center justify-center space-x-2 py-2 px-4 rounded-lg bg-blue-500 text-white">
                  <FaEdit /> <span>Edit Profile</span>
            </button>
      </div>
);

export default LeftSidebar;
