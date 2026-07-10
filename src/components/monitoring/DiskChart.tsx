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
  diskData1h,
  diskData4h,
  diskData24h,
} from "../../data/monitoring";

type DiskChartProps = {
 selectedRange: string;
};

function DiskChart({ selectedRange }: DiskChartProps) {
const diskData =
  selectedRange === "1h"
    ? diskData1h
    : selectedRange === "4h"
    ? diskData4h
    : diskData24h;
  return (
    <div className="bg-[#151c2d] border border-slate-800 rounded-2xl p-6">

      <h2 className="text-white text-lg font-semibold mb-6">
        Disk I/O
      </h2>

      <div className="h-72">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart data={diskData}>

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
              dataKey="disk"
              stroke="#a855f7"
              fill="#a855f7"
              fillOpacity={0.20}
              strokeWidth={3}
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default DiskChart;