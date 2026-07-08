import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const data = [
  { region: "US-East", servers: 3 },
  { region: "US-West", servers: 2 },
  { region: "EU-Central", servers: 2 },
  { region: "Asia", servers: 2 },
];

function RegionChart() {
  return (
    <div className="bg-[#151c2d] border border-slate-800 rounded-2xl p-5">

      <h2 className="text-xl font-semibold text-white">
        Servers by Region
      </h2>

      <p className="text-sm text-slate-400 mt-1 mb-5">
        Active servers across regions
      </p>

      <div className="h-80">

        <ResponsiveContainer width="100%" height="100%">

          <BarChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: 0,
              bottom: 10,
            }}
          >

            <CartesianGrid
              stroke="#273246"
              strokeDasharray="4 4"
            />

            <XAxis
              dataKey="region"
              stroke="#94a3b8"
              tick={{ fontSize: 12 }}
            />

            <YAxis
              stroke="#94a3b8"
              tick={{ fontSize: 12 }}
            />

            <Bar
              dataKey="servers"
              fill="#3b82f6"
              radius={[8, 8, 0, 0]}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default RegionChart;