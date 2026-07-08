import {
  AlertTriangle,
  ShieldAlert,
  Info,
  ArrowRight,
} from "lucide-react";

const alerts = [
  {
    title: "Memory pressure detected",
    description: "Available memory below safe threshold",
    server: "api-gateway-02",
    time: "36m ago",
    level: "Warning",
    color: "yellow",
    icon: AlertTriangle,
  },
  {
    title: "Deployment completed",
    description: "New version rolled out successfully",
    server: "postgres-primary",
    time: "1h ago",
    level: "Info",
    color: "blue",
    icon: Info,
  },
  {
    title: "High CPU utilization",
    description: "CPU usage exceeded threshold for 5 minutes",
    server: "web-frontend-01",
    time: "2h ago",
    level: "Critical",
    color: "red",
    icon: ShieldAlert,
  },
  {
    title: "Elevated response latency",
    description: "p95 latency above SLA target",
    server: "web-frontend-01",
    time: "5h ago",
    level: "Warning",
    color: "yellow",
    icon: AlertTriangle,
  },
];

function getClasses(color: string) {
  switch (color) {
    case "red":
      return {
        border: "border-red-900/50",
        bg: "bg-red-900/20",
        text: "text-red-400",
      };

    case "blue":
      return {
        border: "border-cyan-900/50",
        bg: "bg-cyan-900/20",
        text: "text-cyan-400",
      };

    default:
      return {
        border: "border-yellow-900/50",
        bg: "bg-yellow-900/20",
        text: "text-yellow-400",
      };
  }
}

function RecentAlerts() {
  return (
    <div className="bg-[#151c2d] border border-slate-800 rounded-2xl p-4 h-fit">

      <div className="flex justify-between items-center mb-4">

        <h2 className="text-lg font-semibold text-white">
          Recent Alerts
        </h2>

        <button className="flex items-center gap-2 text-sm text-white hover:text-blue-400">
          View all
          <ArrowRight size={16} />
        </button>

      </div>

      <div className="space-y-1.5">

        {alerts.map((alert) => {

          const Icon = alert.icon;
          const style = getClasses(alert.color);

          return (

            <div
              key={alert.title}
              className={`border rounded-xl px-4 py-2 ${style.border}`}
            >

              <div className="flex items-start gap-3">

                <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${style.bg}`}>
                  <Icon
                    size={14}
                    className={style.text}
                  />
                </div>

                <div className="flex-1">

                  <div className="flex items-center gap-2">

                    <h3 className="text-[17px] font-semibold text-white">
                      {alert.title}
                    </h3>

                    <span
                      className={`text-xs px-2 py-1 rounded-full ${style.bg} ${style.text}`}
                    >
                      {alert.level}
                    </span>

                    <span className="text-slate-400 text-sm">
                      Active
                    </span>

                  </div>

                  <p className="text-slate-400 mt-0.5 text-sm">
                    {alert.description}
                  </p>

                  <p className="text-slate-500 text-xs mt-0.5">
                    {alert.server} · {alert.time}
                  </p>

                </div>

              </div>

            </div>

          );
        })}

      </div>

    </div>
  );
}

export default RecentAlerts;