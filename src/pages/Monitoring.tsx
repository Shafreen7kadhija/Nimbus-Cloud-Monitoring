import CpuChart from "../components/monitoring/CpuChart";
import MemoryChart from "../components/monitoring/MemoryChart";
import NetworkChart from "../components/monitoring/NetworkChart";
import DiskChart from "../components/monitoring/DiskChart";
import CombinedChart from "../components/monitoring/CombinedChart";
import ServerDropdown from "../components/monitoring/ServerDropdown";

import { useState } from "react";

function Monitoring() {
  const [selectedRange, setSelectedRange] = useState("4h");
  const [selectedServer, setSelectedServer] = useState("All Servers");
  return (
    <div className="space-y-8">

      {/* Heading */}

      <div className="flex justify-between items-start">

  <div>

    <h1 className="text-3xl font-bold text-white">
      Monitoring
    </h1>

    <p className="text-slate-400 mt-2">
      Real-time performance metrics across your infrastructure.
    </p>

  </div>

  <div className="flex items-center gap-4">

    <ServerDropdown
      selectedServer={selectedServer}
      setSelectedServer={setSelectedServer}
    />

    <div className="flex bg-[#151c2d] border border-slate-700 rounded-lg overflow-hidden">

      <button
        onClick={() => setSelectedRange("1h")}
        className={`px-4 py-2 transition ${
          selectedRange === "1h"
            ? "bg-blue-600 text-white"
            : "text-slate-400 hover:bg-slate-800"
        }`}
      >
        1h
      </button>

      <button
        onClick={() => setSelectedRange("4h")}
        className={`px-4 py-2 transition ${
          selectedRange === "4h"
            ? "bg-blue-600 text-white"
            : "text-slate-400 hover:bg-slate-800"
        }`}
      >
        4h
      </button>

      <button
        onClick={() => setSelectedRange("24h")}
        className={`px-4 py-2 transition ${
          selectedRange === "24h"
            ? "bg-blue-600 text-white"
            : "text-slate-400 hover:bg-slate-800"
        }`}
      >
        24h
      </button>

    </div>

  </div>

</div>

      {/* Combined Chart */}

        <CombinedChart selectedRange={selectedRange} />

        {/* Charts */}

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        <CpuChart selectedRange={selectedRange} />

        <MemoryChart selectedRange={selectedRange} />

        <NetworkChart selectedRange={selectedRange} />

        <DiskChart selectedRange={selectedRange} />

        </div>

    </div>
  );
}

export default Monitoring;