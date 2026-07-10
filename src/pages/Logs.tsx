import { useEffect, useState } from "react";
import { logs } from "../data/logs";

function Logs() {
  const [logList, setLogList] = useState(logs);
  const [selectedTab, setSelectedTab] = useState("all");
  const [search, setSearch] = useState("");

  const filteredLogs = logList.filter((log) => {
    const matchesTab =
      selectedTab === "all" || log.level === selectedTab;

    const matchesSearch =
      log.message.toLowerCase().includes(search.toLowerCase()) ||
      log.service.toLowerCase().includes(search.toLowerCase());

    return matchesTab && matchesSearch;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const randomLog =
        logs[Math.floor(Math.random() * logs.length)];

      const currentTime = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });

      const newLog = {
        ...randomLog,
        time: currentTime,
      };

      setLogList((previousLogs) => [
        newLog,
        ...previousLogs.slice(0, 99),
      ]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>

      {/* Heading */}

      <div className="flex items-center gap-4">

        <h1 className="text-4xl font-bold text-white">
          Logs
        </h1>

        <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-900/30 text-green-400 text-sm font-medium">

          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>

          Live

        </span>

      </div>

      <p className="text-slate-400 mt-2">
        Live log stream across all services.
      </p>

      {/* Search + Filters */}

      <div className="flex items-center gap-4 mt-8">

        <input
          type="text"
          placeholder="Filter logs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
            w-96
            px-4
            py-3
            rounded-xl
            bg-[#0f172a]
            border
            border-slate-700
            text-white
            placeholder:text-slate-500
            focus:outline-none
            focus:border-blue-500
          "
        />

        <button
          onClick={() => setSelectedTab("all")}
          className={`px-5 py-2 rounded-full transition ${
            selectedTab === "all"
              ? "bg-blue-600 text-white"
              : "bg-[#151c2d] text-slate-300 hover:bg-slate-700"
          }`}
        >
          All
        </button>

        <button
          onClick={() => setSelectedTab("info")}
          className={`px-5 py-2 rounded-full transition ${
            selectedTab === "info"
              ? "bg-blue-600 text-white"
              : "bg-[#151c2d] text-slate-300 hover:bg-slate-700"
          }`}
        >
          Info
        </button>

        <button
          onClick={() => setSelectedTab("warn")}
          className={`px-5 py-2 rounded-full transition ${
            selectedTab === "warn"
              ? "bg-blue-600 text-white"
              : "bg-[#151c2d] text-slate-300 hover:bg-slate-700"
          }`}
        >
          Warn
        </button>

        <button
          onClick={() => setSelectedTab("error")}
          className={`px-5 py-2 rounded-full transition ${
            selectedTab === "error"
              ? "bg-blue-600 text-white"
              : "bg-[#151c2d] text-slate-300 hover:bg-slate-700"
          }`}
        >
          Error
        </button>

        <button
          onClick={() => setSelectedTab("debug")}
          className={`px-5 py-2 rounded-full transition ${
            selectedTab === "debug"
              ? "bg-blue-600 text-white"
              : "bg-[#151c2d] text-slate-300 hover:bg-slate-700"
          }`}
        >
          Debug
        </button>

      </div>

      {/* Logs Table */}

      <div className="mt-8">

        <div className="bg-[#151c2d] border border-slate-800 rounded-2xl overflow-hidden">

          <div className="max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700">

            {filteredLogs.length === 0 ? (

              <div className="text-center py-20 text-slate-500">
                No logs found.
              </div>

            ) : (

              filteredLogs.map((log, index) => (

                <div
                  key={`${log.time}-${index}`}
                  className="
                    grid
                    grid-cols-[100px_80px_320px_1fr]
                    gap-4
                    px-6
                    py-2
                    border-b
                    border-slate-700/50
                    font-mono
                    text-sm
                    hover:bg-slate-700/30
                    transition-all
                    duration-500
                    animate-slideFade
                  "
                >

                  <span className="text-slate-400">
                    {log.time}
                  </span>

                  <span
                    className={`font-bold uppercase tracking-wide ${
                      log.level === "error"
                        ? "text-red-400"
                        : log.level === "warn"
                        ? "text-yellow-400"
                        : log.level === "info"
                        ? "text-sky-400"
                        : "text-purple-400"
                    }`}
                  >
                    {log.level}
                  </span>

                  <span className="text-slate-400">
                    [{log.service}]
                  </span>

                  <span className="text-white">
                    {log.message}
                  </span>

                </div>

              ))

            )}

          </div>

        </div>

      </div>

    </div>
  );
}

export default Logs;