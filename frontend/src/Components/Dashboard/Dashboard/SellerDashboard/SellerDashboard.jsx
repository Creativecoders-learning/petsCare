import { Bar, Doughnut } from "react-chartjs-2";
import {
      Chart as ChartJS,
      ArcElement,
      Tooltip,
      Legend,
      CategoryScale,
      LinearScale,
      BarElement,
} from "chart.js";
import PrimaryTitle from "../../../UI/PrimaryTitle";

// Register ChartJS elements
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const SellerDashboard = () => {
      const totalProducts = 120; // Sample data
      const soldProducts = 85;
      const availableProducts = 35;
      const totalBlogs = 10;
      const pendingOrders = 15;

      // Sales by Category Sample Data
      const salesByCategoryData = {
            labels: ["Foods", "Medicines", "Accessories"],
            datasets: [
                  {
                        label: "Sales by Category",
                        data: [5000, 8000, 3000],
                        backgroundColor: ["#3b82f6", "#10b981", "#f59e0b"],
                  },
            ],
      };

      // Product Status Data
      const productStatusData = {
            labels: ["Sold Products", "Available Products"],
            datasets: [
                  {
                        data: [soldProducts, availableProducts],
                        backgroundColor: ["#4CAF50", "#FF9800"],
                  },
            ],
      };

      return (
            <div className="p-6">
                  <PrimaryTitle>Seller Dashboard</PrimaryTitle>

                  {/* Summary Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {[
                              { title: "Total Products", count: totalProducts },
                              { title: "Sold Products", count: soldProducts },
                              { title: "Pending Orders", count: pendingOrders },
                              { title: "Blogs Created", count: totalBlogs },
                        ].map((item, idx) => (
                              <div key={idx} className="bg-white shadow-lg rounded-lg p-4 text-center border border-gray-100">
                                    <h3 className="text-lg font-semibold text-gray-700">{item.title}</h3>
                                    <p className="text-2xl font-bold text-blue-500 mt-2">{item.count}</p>
                              </div>
                        ))}
                  </div>

                  {/* Charts Section */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                        {/* Sales by Category */}
                        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-100">
                              <h3 className="text-lg font-semibold mb-4">Sales by Category</h3>
                              <Bar data={salesByCategoryData} height={300} />
                        </div>

                        {/* Product Status */}
                        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-100">
                              <h3 className="text-lg font-semibold mb-4">Product Status</h3>
                              <Doughnut data={productStatusData} />
                        </div>
                  </div>

            </div>
      );
};

export default SellerDashboard;
