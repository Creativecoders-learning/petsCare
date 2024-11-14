import { Doughnut } from "react-chartjs-2";
import useUsers from "../../../../Hooks/api/useUsers";

const UserRole = () => {

      const { users } = useUsers();

      const totalAdmins = users?.filter(user => user?.role === "Admin");
      const totalSeller = users?.filter(user => user?.role === "Seller");
      const totalVets = users?.filter(user => user?.role === "Vet");

      const userChartData = {
            labels: ['Admins', 'Sellers', 'Vets'],
            datasets: [{
                  label: 'Total:',
                  data: [totalAdmins.length, totalSeller.length, totalVets.length],
                  backgroundColor: ['#9990DA', '#0A453A', '#696984'],
            }]
      };

      return (
            <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-100">
                  <h3 className="text-lg font-semibold mb-4">User Roles</h3>
                  <Doughnut data={userChartData} />
            </div>
      );
};

export default UserRole;