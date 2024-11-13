import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { FaUser, FaPaw } from 'react-icons/fa';
import UseAuth from '../../Hooks/UseAuth';
import useAxios from '../../Hooks/useAxios';

const RoleChange = () => {
  const navigate = useNavigate();
  const { user } = UseAuth();
  const lastLogIn = user?.metadata?.lastLoginAt;

  const apiHandler = useAxios();

  // Function to update role
  const handleRoleSelection = async (role) => {
    try {
      await apiHandler.put(`/users/by-email/${user?.email}`, { role, lastLogIn })
      toast.success(`Role updated to ${role}`);
      navigate('/');
    } catch (error) {
      toast.error(error?.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen lg:h-[80vh] bg-gradient-to-tr from-purple-200 via-blue-300 to-green-200 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Are You a...</h2>
        <p className="text-gray-600 text-center mb-8">
          Choose the option that best describes you to continue.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          {/* Seller Button */}
          <button
            onClick={() => handleRoleSelection('Seller')}
            className="w-full md:w-1/2 flex items-center justify-center px-6 py-4 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            <FaUser className="text-2xl mr-2" />
            <span className="text-lg font-semibold">Seller</span>
          </button>

          {/* Veterinarian Button */}
          <button
            onClick={() => handleRoleSelection('Vet')}
            className="w-full md:w-1/2 flex items-center justify-center px-6 py-4 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition duration-300"
          >
            <FaPaw className="text-2xl mr-2" />
            <span className="text-lg font-semibold">Veterinarian</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoleChange;
