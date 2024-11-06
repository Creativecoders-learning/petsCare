import { FaTrash } from "react-icons/fa";
import useUsers from "../../../Hooks/api/useUsers";
import PrimaryTitle from "../../../Components/UI/PrimaryTitle";
import Swal from 'sweetalert2'
import useAxios from "../../../Hooks/useAxios";
import toast from 'react-hot-toast'

const UserManagement = () => {
      const { users, fetchUsers } = useUsers();
      const apiHandler = useAxios()

      const handleRoleChange = async (email, prevRole, newRole) => {
            if (prevRole === newRole) {
                  return toast.error('Can not change it')
            }
            else if (prevRole === 'Admin') {
                  return toast.error('Can not change the admin role')
            }

            try {
                  await apiHandler.put(`/users/by-email/${email}`, { role: newRole });
                  toast.success(`Role updated to ${newRole}`);
                  fetchUsers();
            } catch (error) {
                  toast.error(error?.message);
            }
      };

      // delete user
      const handleDeleteUser = (email) => {
            Swal.fire({
                  title: "Are you sure?",
                  text: "You won't be able to revert this!",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                  if (result.isConfirmed) {

                        // Deleted functionality here
                        apiHandler.delete(`/users/by-email/${email}`)
                              .then(result => {
                                    if (result?.data?.deletedCount === 1) {
                                          Swal.fire({
                                                title: "Deleted!",
                                                text: "Your file has been deleted.",
                                                icon: "success"
                                          });

                                          // fetch the user for updating in UI
                                          fetchUsers()
                                    }
                              })
                  }
            });
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
                                          <th className="p-4 font-semibold">Last Log in</th>
                                          <th className="p-4 font-semibold">Role</th>
                                          <th className="p-4 font-semibold text-center">Actions</th>
                                    </tr>
                              </thead>
                              <tbody className="text-myGray">
                                    {users?.map((user, index) => (
                                          <tr key={user?._id + index} className={`${index % 2 === 0 ? "bg-primaryLight bg-opacity-10" : "bg-white"}`}>
                                                <td className="p-4 text-center font-medium">{index + 1}</td>
                                                <td className="p-4 font-medium">{user?.name}</td>
                                                <td className="p-4">{user?.email}</td>
                                                <td className="p-4">{user?.lastLogIn}</td>
                                                <td className="p-4">
                                                      <select
                                                            value={user?.role}
                                                            onChange={(e) => handleRoleChange(user?.email, user?.role, e.target.value)}
                                                            className="border rounded-md p-2 bg-white text-gray-700"
                                                      >
                                                            <option value="normalUser">NormalUser</option>
                                                            <option value="Vet">Vet</option>
                                                            <option value="Admin">Admin</option>
                                                      </select>
                                                </td>
                                                <td className="p-4 text-center">
                                                      <button
                                                            onClick={() => handleDeleteUser(user?.email)}
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
