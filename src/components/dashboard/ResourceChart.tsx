import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const data = [
  { time: "12:10", cpu: 35, memory: 68 },
  { time: "12:30", cpu: 60, memory: 62 },
  { time: "12:50", cpu: 52, memory: 50 },
  { time: "13:10", cpu: 28, memory: 42 },
  { time: "13:30", cpu: 15, memory: 35 },
  { time: "13:50", cpu: 22, memory: 50 },
  { time: "14:10", cpu: 40, memory: 58 },
  { time: "14:30", cpu: 63, memory: 72 },
  { time: "14:50", cpu: 68, memory: 74 },
  { time: "15:10", cpu: 48, memory: 60 },
  { time: "15:30", cpu: 18, memory: 46 },
  { time: "15:50", cpu: 24, memory: 40 },
];

function ResourceChart() {
  return (
    <div className="bg-[#151c2d] border border-slate-800 rounded-2xl p-5">

      <h2 className="text-xl font-semibold text-white">
        Resource utilization
      </h2>

      <p className="text-sm text-slate-400 mt-1 mb-5">
        CPU and memory over the last 4 hours
      </p>

      <div className="h-94">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart data={data}>

            <CartesianGrid
              stroke="#273246"
              strokeDasharray="4 4"
            />

            <XAxis
              dataKey="time"
              stroke="#94a3b8"
            />

            <YAxis
              stroke="#94a3b8"
            />

            <Area
              type="monotone"
              dataKey="cpu"
              stroke="#3b82f6"
              fill="#3b82f6"
              fillOpacity={0.15}
            />

            <Area
              type="monotone"
              dataKey="memory"
              stroke="#22c55e"
              fill="#22c55e"
              fillOpacity={0.12}
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default ResourceChart;