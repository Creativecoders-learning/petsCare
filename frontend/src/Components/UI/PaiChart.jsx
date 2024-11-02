import { PieChart, Pie } from "recharts";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Rectangle,
    ResponsiveContainer,
  } from "recharts";

  const data = [
    {
      name: "Total Vet",
      uv: 4000,
    //   pv: 2400,
      amt: 2400,
    },
    {
      name: "User",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Doctor",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Adoption",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Foods",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Dogs",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Cats",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
const data01 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];

  const data02 = [
    { name: 'A1', value: 100 },
    { name: 'A2', value: 300 },
    { name: 'B1', value: 100 },
    { name: 'B2', value: 80 },
    { name: 'B3', value: 40 },
    { name: 'B4', value: 30 },
    { name: 'B5', value: 50 },
    { name: 'C1', value: 100 },
    { name: 'C2', value: 200 },
    { name: 'D1', value: 150 },
    { name: 'D2', value: 50 },
  ];
  

const PaiChart = () => {
    return (
        <div>
            {/* <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={400}>
             <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
            <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
            </PieChart>
            </ResponsiveContainer> */}
             <PieChart width={700} height={400}>
      <Pie
        data={data01}
        dataKey="value"
        cx={200}
        cy={200}
        outerRadius={60}
        fill="#8884d8"
      />
      <Pie
        data={data02}
        dataKey="value"
        cx={200}
        cy={200}
        innerRadius={70}
        outerRadius={90}
        fill="#82ca9d"
        label
      />
            </PieChart>
            <ResponsiveContainer width={"100%"} height={300}>
                 <BarChart
                    data={data}
                    margin={{
                     top: 5,
                      right: 30,
                      left: 20,
                   bottom: 5,
             }}
                 >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar
          dataKey="uv"
          fill="#B3CDAD"
          activeBar={<Rectangle fill="pink" stroke="blue" />}
        />
        <Bar
          dataKey="pv"
          fill="#FF5F5E"
          activeBar={<Rectangle fill="gold" stroke="purple" />}
        />
      </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PaiChart;