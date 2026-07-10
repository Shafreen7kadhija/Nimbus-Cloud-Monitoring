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
  networkData1h,
  networkData4h,
  networkData24h,
} from "../../data/monitoring";

type NetworkChartProps = {
  selectedRange: string;
};

function NetworkChart({ selectedRange }: NetworkChartProps) {
const networkData =
  selectedRange === "1h"
    ? networkData1h
    : selectedRange === "4h"
    ? networkData4h
    : networkData24h;
  return (
    <div className="bg-[#151c2d] border border-slate-800 rounded-2xl p-6">

      <h2 className="text-white text-lg font-semibold mb-6">
        Network Traffic
      </h2>

      <div className="h-72">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart data={networkData}>

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
              dataKey="inbound"
              stroke="#f59e0b"
              fill="#f59e0b"
              fillOpacity={0.20}
              strokeWidth={3}
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default NetworkChart;