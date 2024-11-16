import AdminDashboard from "../../../Components/Dashboard/Dashboard/AdminDashboard/AdminDashboard";
import ClientDashboard from "../../../Components/Dashboard/Dashboard/ClientDashboard/ClientDashboard";
import SellerDashboard from "../../../Components/Dashboard/Dashboard/SellerDashboard/SellerDashboard";
import VetDashboard from "../../../Components/Dashboard/Dashboard/VetDashboard/VetDashboard";
import useUser from "../../../Hooks/api/useUser";

const Dashboard = () => {

      const { user } = useUser();

      return (
            <div>
                  {user?.role === 'Admin' && <AdminDashboard />}
                  {user?.role === 'Vet' && <VetDashboard />}
                  {user?.role === 'Seller' && <SellerDashboard />}
                  {user?.role === 'Client' && <ClientDashboard />}
            </div>
      );
};

export default Dashboard;