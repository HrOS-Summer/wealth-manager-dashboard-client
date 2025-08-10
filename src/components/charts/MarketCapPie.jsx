import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const COLORS = ["#0ea5e9", "#22c55e", "#f97316"];

export default function MarketCapPie({ data }) {
  const pieData = Object.entries(data || {}).map(([name, val]) => ({ 
    name, 
    value: val.value, 
    percentage: val.percentage 
  }));

  return (
    <ResponsiveContainer width="100%" height={280}>
      <PieChart>
        <Pie 
          data={pieData} 
          dataKey="value" 
          nameKey="name" 
          innerRadius={60} 
          outerRadius={100} 
          paddingAngle={2}
        >
          {pieData.map((_, i) => (
            <Cell key={i} fill={COLORS[i % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip 
          formatter={(value, n, { payload }) => [`₹${value.toLocaleString("en-IN")}`, payload.name]} 
        />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}