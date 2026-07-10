import toast from "react-hot-toast";
import { useState } from "react";
import {
  AlertTriangle,
  ShieldAlert,
  Info,
} from "lucide-react";

import { alerts } from "../data/alerts";

function Alerts() {
  const [alertList, setAlertList] = useState(alerts);

  const [selectedTab, setSelectedTab] = useState("all");

  const filteredAlerts =
    selectedTab === "all"
      ? alertList
      : alertList.filter((alert) => alert.status === selectedTab);

  const allCount = alertList.length;

  const activeCount = alertList.filter(
    (alert) => alert.status === "active"
  ).length;

  const acknowledgedCount = alertList.filter(
    (alert) => alert.status === "acknowledged"
  ).length;

  const resolvedCount = alertList.filter(
    (alert) => alert.status === "resolved"
  ).length;

  const acknowledgeAlert = (id: number) => {
  setAlertList((previousAlerts) =>
    previousAlerts.map((alert) =>
      alert.id === id
        ? { ...alert, status: "acknowledged" }
        : alert
    )
  );

  toast.success("Alert acknowledged");
};

  const resolveAlert = (id: number) => {
  setAlertList((previousAlerts) =>
    previousAlerts.map((alert) =>
      alert.id === id
        ? { ...alert, status: "resolved" }
        : alert
    )
  );

  toast.success("Alert resolved");
};

  return (
    <div>
      {/* Heading */}

      <h1 className="text-4xl font-bold text-white">
        Alerts
      </h1>

      <p className="text-slate-400 mt-2">
        {activeCount} active alerts require attention.
      </p>

      {/* Tabs */}

      <div className="flex gap-2 mt-8">

        <button
          onClick={() => setSelectedTab("all")}
          className={`px-4 py-2 rounded-lg transition ${
            selectedTab === "all"
              ? "bg-blue-600 text-white"
              : "bg-[#151c2d] text-slate-300 hover:bg-slate-700"
          }`}
        >
          All ({allCount})
        </button>

        <button
          onClick={() => setSelectedTab("active")}
          className={`px-4 py-2 rounded-lg transition ${
            selectedTab === "active"
              ? "bg-blue-600 text-white"
              : "bg-[#151c2d] text-slate-300 hover:bg-slate-700"
          }`}
        >
          Active ({activeCount})
        </button>

        <button
          onClick={() => setSelectedTab("acknowledged")}
          className={`px-4 py-2 rounded-lg transition ${
            selectedTab === "acknowledged"
              ? "bg-blue-600 text-white"
              : "bg-[#151c2d] text-slate-300 hover:bg-slate-700"
          }`}
        >
          Acknowledged ({acknowledgedCount})
        </button>

        <button
          onClick={() => setSelectedTab("resolved")}
          className={`px-4 py-2 rounded-lg transition ${
            selectedTab === "resolved"
              ? "bg-blue-600 text-white"
              : "bg-[#151c2d] text-slate-300 hover:bg-slate-700"
          }`}
        >
          Resolved ({resolvedCount})
        </button>

      </div>

      {/* Cards */}

      <div className="space-y-5 mt-8">

        {filteredAlerts.map((alert) => (

          <div
            key={alert.id}
            className={`
              rounded-2xl
              p-6
              border
              transition-all
              duration-300
              hover:-translate-y-1
              hover:scale-[1.01]
              hover:shadow-2xl

              ${
                alert.severity === "critical"
                  ? "bg-[#151c2d] border-red-800/60 hover:border-red-500"

                  : alert.severity === "warning"
                  ? "bg-[#151c2d] border-yellow-700/60 hover:border-yellow-500"

                  : "bg-[#151c2d] border-sky-700/60 hover:border-sky-500"
              }
            `}
          >

            <div className="flex justify-between items-start gap-6">

              {/* Left */}

              <div className="flex gap-4 flex-1">

                {/* Icon */}

                <div
                  className={`
                    w-12
                    h-12
                    rounded-xl
                    flex
                    items-center
                    justify-center

                    ${
                      alert.severity === "critical"
                        ? "bg-red-900/20"

                        : alert.severity === "warning"
                        ? "bg-yellow-900/20"

                        : "bg-sky-900/20"
                    }
                  `}
                >
                  {alert.severity === "critical" ? (
                    <ShieldAlert
                      className="text-red-400"
                      size={22}
                    />
                  ) : alert.severity === "warning" ? (
                    <AlertTriangle
                      className="text-yellow-400"
                      size={22}
                    />
                  ) : (
                    <Info
                      className="text-sky-400"
                      size={22}
                    />
                  )}
                </div>

                {/* Content */}

                <div className="flex-1">

                  <div className="flex items-center gap-3">

                    <h2 className="text-xl font-semibold text-white">
                      {alert.title}
                    </h2>

                    <span
                      className={`
                        px-3
                        py-1
                        rounded-full
                        text-xs
                        font-semibold

                        ${
                          alert.severity === "critical"
                            ? "bg-red-900/40 text-red-400"

                            : alert.severity === "warning"
                            ? "bg-yellow-900/40 text-yellow-400"

                            : "bg-sky-900/40 text-sky-400"
                        }
                      `}
                    >
                      {alert.severity.charAt(0).toUpperCase() +
                        alert.severity.slice(1)}
                    </span>

                    <span
                      className={`
                        text-sm

                        ${
                          alert.status === "active"
                            ? "text-slate-300"

                            : alert.status === "acknowledged"
                            ? "text-slate-400"

                            : "text-slate-500"
                        }
                      `}
                    >
                      {alert.status.charAt(0).toUpperCase() +
                        alert.status.slice(1)}
                    </span>

                  </div>

                  <p className="text-slate-400 mt-2">
                    {alert.description}
                  </p>

                  <div className="flex items-center gap-4 mt-5 text-sm text-slate-400">

                    <span>{alert.server}</span>

                    <span>•</span>

                    <span>{alert.time}</span>

                  </div>

                </div>

              </div>

              {/* Right Buttons */}

              {alert.status === "active" && (

                <div className="flex items-center gap-3 shrink-0">

                  <button
                    onClick={() => acknowledgeAlert(alert.id)}
                    className="
                      h-9
                      px-2
                      text-sm
                      font-medium
                      text-slate-300
                      hover:text-white
                      transition-colors
                    "
                  >
                    Ack
                  </button>

                  <button
                    onClick={() => resolveAlert(alert.id)}
                    className="
                      h-9
                      px-4
                      rounded-lg
                      border
                      border-slate-700
                      text-sm
                      font-medium
                      text-white
                      hover:bg-slate-800
                      transition-colors
                    "
                  >
                    Resolve
                  </button>

                </div>

              )}

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Alerts;