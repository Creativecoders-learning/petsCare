import { Bar } from "react-chartjs-2";

const SalesByCategory = () => {

      const shopRevenueData = {
            labels: ['Foods', 'Medicines', 'Accessories'],
            datasets: [{
                  label: 'Sales by Category',
                  data: [5000, 8000, 3000],
                  backgroundColor: ['#3b82f6', '#10b981', '#06b6d4', '#f59e0b']
            }]
      };

      return (
            <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-100">
                  <h3 className="text-lg font-semibold mb-4">Sales by Category</h3>
                  <Bar data={shopRevenueData} />
            </div>
      );
};

export default SalesByCategory;