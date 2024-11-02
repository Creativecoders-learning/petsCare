import { FaTrash } from "react-icons/fa";
import useUsers from "../../../Hooks/api/useUsers";
import PrimaryTitle from "../../../Components/UI/PrimaryTitle";

const UserManagement = () => {
      const { users } = useUsers();

      const handleRoleChange = (id, newRole) => {
            console.log(`Changed role of user ID ${id} to ${newRole}`);
      };

      const handleDeleteUser = (id) => {
            console.log(`Deleted user with ID: ${id}`);
      };

      return (
            <div className="p-8 font-inter">
                  <PrimaryTitle titleStyle="text-primaryBold font-semibold">User Management</PrimaryTitle>
                  <div className="custom-scrollbar h-[79vh] overflow-y-auto shadow-myCustomShadow bg-white rounded">
                        <table className="min-w-full">
                              <thead>
                                    <tr className="bg-primary text-white text-left">
                                          <th className="p-4 font-semibold text-center">#</th>
                                          <th className="p-4 font-semibold">Name</th>
                                          <th className="p-4 font-semibold">Email</th>
                                          <th className="p-4 font-semibold">Status</th>
                                          <th className="p-4 font-semibold">Role</th>
                                          <th className="p-4 font-semibold text-center">Actions</th>
                                    </tr>
                              </thead>
                              <tbody className="text-myGray">
                                    {users?.map((user, index) => (
                                          <tr key={user?.id + index} className={`${index % 2 === 0 ? "bg-primaryLight bg-opacity-10" : "bg-white"}`}>
                                                <td className="p-4 text-center font-medium">{index + 1}</td>
                                                <td className="p-4 font-medium">{user?.name}</td>
                                                <td className="p-4">{user?.email}</td>
                                                <td className="p-4">{user?.accountSettings?.status}</td>
                                                <td className="p-4">
                                                      <select
                                                            value={user?.accountSettings?.role}
                                                            onChange={(e) => handleRoleChange(user?.id, e.target.value)}
                                                            className="border rounded-md p-2 bg-white text-gray-700"
                                                      >
                                                            <option value="normalUser">NormalUser</option>
                                                            <option value="Vet">Vet</option>
                                                            <option value="Admin">Admin</option>
                                                      </select>
                                                </td>
                                                <td className="p-4 text-center">
                                                      <button
                                                            onClick={() => handleDeleteUser(user?.id)}
                                                            className="p-2 text-white bg-red-500 rounded-full hover:bg-red-600 transition duration-150"
                                                      >
                                                            <FaTrash />
                                                      </button>
                                                </td>
                                          </tr>
                                    ))}
                              </tbody>
                        </table>
                  </div>
            </div>
      );
};

export default UserManagement;
