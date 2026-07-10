import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import {
  cpuData1h,
  cpuData4h,
  cpuData24h,
  memoryData1h,
  memoryData4h,
  memoryData24h,
  diskData1h,
  diskData4h,
  diskData24h,
} from "../../data/monitoring";


function CustomTooltip({ active, payload, label }: any) {
  if (!active || !payload) return null;

  return (
    <div className="bg-[#0f172a] border border-slate-700 rounded-xl px-4 py-3 shadow-xl">
      <p className="text-white text-sm font-medium mb-3">
        {label}
      </p>

      <div className="space-y-2">
        <p className="text-green-400 text-sm">
          CPU : {payload[0].value}%
        </p>

        <p className="text-blue-400 text-sm">
          Memory : {payload[1].value}%
        </p>

        <p className="text-purple-400 text-sm">
          Disk : {payload[2].value}%
        </p>
      </div>
    </div>
  );
}

type CombinedChartProps = {
  selectedRange: string;
};

function CombinedChart({ selectedRange }: CombinedChartProps) {

  const cpuData =
    selectedRange === "1h"
      ? cpuData1h
      : selectedRange === "4h"
      ? cpuData4h
      : cpuData24h;

  const memoryData =
    selectedRange === "1h"
      ? memoryData1h
      : selectedRange === "4h"
      ? memoryData4h
      : memoryData24h;

  const diskData =
    selectedRange === "1h"
      ? diskData1h
      : selectedRange === "4h"
      ? diskData4h
      : diskData24h;

  const combinedData = cpuData.map((cpu, index) => ({
    time: cpu.time,
    cpu: cpu.cpu,
    memory: memoryData[index].memory,
    disk: diskData[index].disk,
  }));
  return (
    <div className="bg-[#151c2d] border border-slate-800 rounded-2xl p-6">

      <h2 className="text-white text-xl font-semibold">
        Combined Utilization
      </h2>

      <p className="text-slate-400 mt-1 mb-6">
        CPU, memory and disk together
      </p>

      <div className="h-[420px]">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart data={combinedData}>
          <defs>

          <linearGradient id="cpuGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#22c55e" stopOpacity={0.28} />
            <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
          </linearGradient>

          <linearGradient id="memoryGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.25} />
            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
          </linearGradient>

          <linearGradient id="diskGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#a855f7" stopOpacity={0.25} />
            <stop offset="95%" stopColor="#a855f7" stopOpacity={0} />
          </linearGradient>

        </defs>

            <CartesianGrid
              vertical={false}
              stroke="#1e293b"
              strokeDasharray="4 4"
            />

            <XAxis
              dataKey="time"
              stroke="#64748b"
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              stroke="#64748b"
              tickLine={false}
              axisLine={false}
              domain={[0, 80]}
              ticks={[0, 20, 40, 60, 80]}
              tickFormatter={(value) => `${value}%`}
            />

            <Tooltip content={<CustomTooltip />} />

            <Area
              type="natural"
              dataKey="cpu"
              stroke="#22c55e"
              fill="url(#cpuGradient)"
              fillOpacity={0.25}
              strokeWidth={2.5}
              dot={false}
              activeDot={{
                r: 5,
                strokeWidth: 2,
                fill: "#22c55e",
              }}
            />

            <Area
              type="natural"
              dataKey="memory"
              stroke="#3b82f6"
              fill="url(#memoryGradient)"
              fillOpacity={0.25}
              strokeWidth={2.5}
              dot={false}
              activeDot={{
                r: 5,
                strokeWidth: 2,
                fill: "#3b82f6",
              }}
            />

            <Area
                type="natural"
                dataKey="disk"
                stroke="#a855f7"
                fill="url(#diskGradient)"
                fillOpacity={0.25}
                strokeWidth={2.5}
                dot={false}
                activeDot={{
                  r: 5,
                  strokeWidth: 2,
                  fill: "#a855f7",
                }}
              />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default CombinedChart;