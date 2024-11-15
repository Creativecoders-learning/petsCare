import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import PrimaryTitle from '../../../UI/PrimaryTitle';

const SellerDashboard = () => {
      const [salesData, setSalesData] = useState([]);
      const [products, setProducts] = useState([]);
      const [orders, setOrders] = useState([]);

      const totalProducts = 120;
      const soldProducts = 85;
      const availableProducts = 35;
      const pendingOrders = 15;

      useEffect(() => {
            // Fetch data from APIs or mock data
            setSalesData({
                  totalSales: 1500,
                  totalRevenue: 5000,
                  monthlySales: [100, 120, 130, 150, 200, 180, 250], // mock data
            });
            setProducts([{ id: 1, name: 'Product 1', price: 200, stock: 10 }, { id: 2, name: 'Product 2', price: 300, stock: 15 }]);
            setOrders([{ id: 1, status: 'Pending', customer: 'John Doe' }, { id: 2, status: 'Shipped', customer: 'Jane Smith' }]);
      }, []);

      // Sales graph data
      const salesGraphData = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [
                  {
                        label: 'Sales (Monthly)',
                        data: salesData.monthlySales,
                        fill: false,
                        borderColor: 'rgba(75,192,192,1)',
                        tension: 0.1,
                  },
            ],
      };

      return (
            <div className="max-w-7xl mx-auto p-8">
                  <PrimaryTitle>Seller Dashboard</PrimaryTitle>

                  {/* Summary Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {[
                              { title: "Total Products", count: totalProducts },
                              { title: "Sold Products", count: soldProducts },
                              { title: "Available Products", count: availableProducts },
                              { title: "Pending Orders", count: pendingOrders },
                        ].map((item, idx) => (
                              <div key={idx} className="bg-white shadow-lg rounded-lg p-4 text-center border border-gray-100">
                                    <h3 className="text-lg font-semibold text-gray-700">{item.title}</h3>
                                    <p className="text-2xl font-bold text-blue-500 mt-2">{item.count}</p>
                              </div>
                        ))}
                  </div>
                  {/* Sales Overview Graph */}
                  <div className="bg-white p-8 shadow-md rounded-lg mb-8">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Sales Overview</h3>
                        <Line data={salesGraphData} />
                  </div>

                  {/* Order Management */}
                  <div className="bg-white p-8 shadow-md rounded-lg mb-8">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Orders</h3>
                        <ul className="space-y-4">
                              {orders.map((order) => (
                                    <li key={order.id} className="border-b pb-4 flex justify-between items-center">
                                          <div>
                                                <span className="font-semibold text-gray-700">Order ID:</span> {order.id} |{' '}
                                                <span className="font-semibold text-gray-700">Status:</span> {order.status}
                                          </div>
                                          <span className="text-gray-600">{order.customer}</span>
                                    </li>
                              ))}
                        </ul>
                  </div>

                  {/* Product Management */}
                  <div className="bg-white p-8 shadow-md rounded-lg mb-8">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Manage Products</h3>
                        <button className="bg-green-600 text-white py-2 px-4 rounded-full mb-6 hover:bg-green-700">Add New Product</button>
                        <ul className="space-y-4">
                              {products.map((product) => (
                                    <li key={product.id} className="border-b pb-4 flex justify-between items-center">
                                          <div>
                                                <span className="font-semibold text-gray-700">{product.name}</span> | Price: ${product.price} | Stock: {product.stock}
                                          </div>
                                    </li>
                              ))}
                        </ul>
                  </div>

            </div>
      );
};

export default SellerDashboard;
