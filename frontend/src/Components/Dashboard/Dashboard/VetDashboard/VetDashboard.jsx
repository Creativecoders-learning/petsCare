import { Doughnut } from "react-chartjs-2";
import {
      Chart as ChartJS,
      ArcElement,
      Tooltip,
      Legend,
      CategoryScale,
      LinearScale,
      BarElement,
} from "chart.js";

// Register required elements for the charts to work
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const VetDashboard = () => {
      const fakeAppointments = [
            { petName: "Buddy", ownerName: "Alice Johnson", date: "2024-11-15", status: "Completed" },
            { petName: "Whiskers", ownerName: "Bob Smith", date: "2024-11-16", status: "Pending" },
            { petName: "Goldie", ownerName: "Cara Lee", date: "2024-11-17", status: "Completed" },
            { petName: "Bella", ownerName: "David Kim", date: "2024-11-18", status: "Pending" },
            { petName: "Max", ownerName: "Ella Brown", date: "2024-11-19", status: "Pending" }
      ];

      const fakePetsData = [
            { type: "Dog" },
            { type: "Cat" },
            { type: "Dog" },
            { type: "Bird" },
            { type: "Cat" }
      ];

      const totalAppointments = fakeAppointments.length;
      const completedAppointments = fakeAppointments.filter(app => app.status === "Completed").length;
      const pendingAppointments = fakeAppointments.filter(app => app.status === "Pending").length;

      const petTypesCount = { Dog: 0, Cat: 0, Bird: 0 };
      fakePetsData.forEach(pet => {
            if (petTypesCount[pet.type] !== undefined) {
                  petTypesCount[pet.type]++;
            }
      });

      const appointmentStatusData = {
            labels: ["Completed", "Pending"],
            datasets: [
                  {
                        data: [completedAppointments, pendingAppointments],
                        backgroundColor: ['#4CAF50', '#FF9800']
                  }
            ]
      };

      const petTypesData = {
            labels: ["Dogs", "Cats", "Birds"],
            datasets: [
                  {
                        data: [petTypesCount.Dog, petTypesCount.Cat, petTypesCount.Bird],
                        backgroundColor: ['#3b82f6', '#06b6d4', '#f59e0b']
                  }
            ]
      };

      return (
            <div className="p-6">

                  {/* Summary Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {['Total Appointments', 'Completed Appointments', 'Pending Appointments', 'Total Pets Managed'].map((title, idx) => (
                              <div
                                    key={idx}
                                    className="bg-white shadow-lg rounded-lg p-6 text-center border border-gray-100"
                              >
                                    <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
                                    <p className="text-2xl font-bold text-primary mt-2">
                                          {[totalAppointments, '10', 45, totalAppointments][idx]}
                                    </p>
                              </div>
                        ))}
                  </div>

                  {/* Charts Section */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">

                        {/* Appointment Status */}
                        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-100">
                              <h3 className="text-lg font-semibold mb-4">Appointment Status</h3>
                              <Doughnut data={appointmentStatusData} />
                        </div>

                        {/* Pets by Type */}
                        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-100">
                              <h3 className="text-lg font-semibold mb-4">Pets by Type</h3>
                              <Doughnut data={petTypesData} />
                        </div>
                  </div>


                  {/* Upcoming Appointments Table */}
                  <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-100 mb-8">
                        <h3 className="text-lg font-semibold mb-4">Upcoming Appointments</h3>
                        <table className="w-full text-left border-collapse">
                              <thead>
                                    <tr>
                                          <th className="py-2 px-4 border-b">Pet Name</th>
                                          <th className="py-2 px-4 border-b">Owner</th>
                                          <th className="py-2 px-4 border-b">Date</th>
                                          <th className="py-2 px-4 border-b">Status</th>
                                    </tr>
                              </thead>
                              <tbody>
                                    {fakeAppointments.map((appointment, idx) => (
                                          <tr key={idx}>
                                                <td className="py-2 px-4 border-b">{appointment.petName}</td>
                                                <td className="py-2 px-4 border-b">{appointment.ownerName}</td>
                                                <td className="py-2 px-4 border-b">{appointment.date}</td>
                                                <td className="py-2 px-4 border-b">{appointment.status}</td>
                                          </tr>
                                    ))}
                              </tbody>
                        </table>
                  </div>

            </div >
      );
};

export default VetDashboard;
