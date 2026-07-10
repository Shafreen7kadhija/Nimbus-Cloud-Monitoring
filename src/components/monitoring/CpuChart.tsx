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
  cpuData1h,
  cpuData4h,
  cpuData24h,
} from "../../data/monitoring";

type CpuChartProps = {
  selectedRange: string;
};

function CpuChart({ selectedRange }: CpuChartProps) {

  const cpuData =
    selectedRange === "1h"
      ? cpuData1h
      : selectedRange === "4h"
      ? cpuData4h
      : cpuData24h;

  return (
    <div className="bg-[#151c2d] border border-slate-800 rounded-2xl p-6">

      <h2 className="text-white text-lg font-semibold mb-6">
        CPU Usage
      </h2>

      <div className="h-72">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart data={cpuData}>

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
              dataKey="cpu"
              stroke="#22c55e"
              fill="#22c55e"
              fillOpacity={0.20}
              strokeWidth={3}
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default CpuChart;