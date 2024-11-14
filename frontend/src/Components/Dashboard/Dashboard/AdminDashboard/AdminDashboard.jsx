import { Bar, Line, Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import PrimaryTitle from '../../../../Components/UI/PrimaryTitle';
import useUsers from '../../../../Hooks/api/useUsers';
import useBlogs from '../../../../Hooks/api/useBlogs';
import UserRole from './UserRole';
import AdoptionByCategory from './AdoptionByCategory';
import SalesByCategory from './SalesByCategory';

const AdminDashboard = () => {

      const { users } = useUsers();
      const { blogs } = useBlogs();

      return (
            <div className="p-8 font-sans">
                  <PrimaryTitle>Admin Dashboard</PrimaryTitle>

                  {/* Summary Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {['Total Users', 'Total Revenue', 'Adoptions Processed', 'Total Blogs'].map((title, idx) => (
                              <div
                                    key={idx}
                                    className="bg-white shadow-lg rounded-lg p-6 text-center border border-gray-100"
                              >
                                    <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
                                    <p className="text-2xl font-bold text-primary mt-2">
                                          {[users?.length, '$12,000', 45, blogs?.length][idx]}
                                    </p>
                              </div>
                        ))}
                  </div>

                  {/* Charts Section */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                        {/* user role */}
                        <UserRole />

                        <SalesByCategory />

                        <AdoptionByCategory />
                  </div>
            </div>
      );
};

export default AdminDashboard;
