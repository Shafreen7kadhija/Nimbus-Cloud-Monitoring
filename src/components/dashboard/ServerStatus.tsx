import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const data = [
  { name: "Online", value: 9, color: "#22c55e" },
  { name: "Offline", value: 1, color: "#ef4444" },
  { name: "Degraded", value: 1, color: "#facc15" },
  { name: "Maintenance", value: 1, color: "#3b82f6" },
];

function ServerStatus() {
  return (
    <div className="bg-[#151c2d] border border-slate-800 rounded-2xl p-5 h-full flex flex-col">

      <h2 className="text-xl font-semibold text-white">
        Server status
      </h2>

      <p className="text-slate-400 mt-1 mb-6">
        Distribution by health
      </p>

      <div className="h-64">

        <ResponsiveContainer width="100%" height="100%">

          <PieChart>

            <Pie
              data={data}
              innerRadius={70}
              outerRadius={95}
              dataKey="value"
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={entry.color}
                />
              ))}
            </Pie>

          </PieChart>

        </ResponsiveContainer>

      </div>

      <div className="space-y-2 mt-2">

        {data.map((item) => (

          <div
            key={item.name}
            className="flex justify-between items-center text-sm"
          >

            <div className="flex items-center gap-2">

              <div
                className="w-3 h-3 rounded-full"
                style={{ background: item.color }}
              />

              <span className="text-slate-300">
                {item.name}
              </span>

            </div>

            <span className="text-white font-medium">
              {item.value}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}

export default ServerStatus;