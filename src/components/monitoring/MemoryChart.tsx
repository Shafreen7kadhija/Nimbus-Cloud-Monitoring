import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import {
  memoryData1h,
  memoryData4h,
  memoryData24h,
} from "../../data/monitoring";

type MemoryChartProps = {
  selectedRange: string;
};

function MemoryChart({ selectedRange }: MemoryChartProps) {
  const memoryData =
  selectedRange === "1h"
    ? memoryData1h
    : selectedRange === "4h"
    ? memoryData4h
    : memoryData24h;
  return (
    <div className="bg-[#151c2d] border border-slate-800 rounded-2xl p-6">

      <h2 className="text-white text-lg font-semibold mb-6">
        Memory Usage
      </h2>

      <div className="h-72">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart data={memoryData}>

            <CartesianGrid
              stroke="#334155"
              strokeDasharray="3 3"
            />

            <XAxis
              dataKey="time"
              stroke="#94a3b8"
            />

            <YAxis
              stroke="#94a3b8"
            />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="memory"
              stroke="#3b82f6"
              fill="#3b82f6"
              fillOpacity={0.25}
              strokeWidth={3}
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default MemoryChart;