import { useState } from "react";
import EditProfileForm from "../../../Components/Profile/EditProfileForm/EditProfileForm";
import ProfileOverview from "../../../Components/Profile/ProfileOverview/ProfileOverview";
import AdditionalInfo from "../../../Components/Profile/AdditionalInfo/AdditionalInfo";
import AccountSettings from "../../../Components/Profile/AccountSettings/AccountSettings";
import LeftSidebar from "../../../Components/Profile/LeftSidebar/LeftSidebar";
import useUser from "../../../Hooks/api/useUser";

const Profile = () => {
      const [selectedSection, setSelectedSection] = useState("profile");
      const [isEditing, setIsEditing] = useState(false);

      const { user } = useUser();
      console.log(user);
      

      const renderSectionContent = () => {
            if (isEditing) {
                  return <EditProfileForm user={user} setIsEditing={setIsEditing} />;
            }
            switch (selectedSection) {
                  case "profile":
                        return <ProfileOverview user={user} />;
                  case "additionalInfo":
                        return <AdditionalInfo user={user} />;
                  case "accountSettings":
                        return <AccountSettings user={user} />;
                  default:
                        return null;
            }
      };

      return (
            <div className="flex flex-col md:flex-row lg:p-8 bg-gray-50 min-h-screen md:space-x-4 lg:space-x-8 p-4 space-y-8 md:space-y-0">
                  <LeftSidebar user={user} selectedSection={selectedSection} setSelectedSection={setSelectedSection} setIsEditing={setIsEditing} />
                  <div className="flex-1 w-full bg-white h-fit shadow-lg rounded-lg pb-6 lg:px-6 lg:pt-6 lg:pb-10">
                        {renderSectionContent()}
                  </div>
            </div>
      );
};

export default Profile;
