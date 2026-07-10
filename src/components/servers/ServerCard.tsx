import {
  Server,
  Database,
  Globe,
  Zap,
  Cog,
  HardDrive,
  Cpu,
  Clock3,
} from "lucide-react";

type Server = {
  id: number;
  name: string;
  type: string;
  region: string;
  status: string;
  cpu: number;
  memory: number;
  disk: number;
  vcpu: number;
  ram: string;
  uptime: string;
  lastSeen: string;
};

type Props = {
  server: Server;
};

function ServerCard({ server }: Props) {
    const getBarColor = (value: number) => {
    if (value >= 85) return "bg-red-500";

    if (value >= 70) return "bg-yellow-500";

    return "bg-green-500";
    };
    const getStatusStyle = (status: string) => {
    switch (status) {
        case "Online":
        return "bg-green-900/30 text-green-400";

        case "Offline":
        return "bg-red-900/30 text-red-400";

        case "Maintenance":
        return "bg-blue-900/30 text-blue-400";

        case "Degraded":
        return "bg-yellow-900/30 text-yellow-400";

        default:
        return "bg-slate-800 text-slate-300";
    }
    };
    const getIconBackground = (type: string) => {
    switch (type) {
        case "Web":
        return "bg-blue-900/30";

        case "Database":
        return "bg-purple-900/30";

        case "Cache":
        return "bg-yellow-900/20";

        case "Worker":
        return "bg-green-900/20";

        case "Storage":
        return "bg-slate-700";

        default:
        return "bg-blue-900/30";
    }
    };
    const getServerIcon = (type: string) => {
    switch (type) {
        case "Web":
        return <Globe className="w-6 h-6 text-blue-400" />;

        case "Database":
        return <Database className="w-6 h-6 text-purple-400" />;

        case "Cache":
        return <Zap className="w-6 h-6 text-yellow-400" />;

        case "Worker":
        return <Cog className="w-6 h-6 text-green-400" />;

        default:
        return <Server className="w-6 h-6 text-blue-400" />;
    }
    };
  return (
    <div className="bg-[#151c2d] border border-slate-800 rounded-2xl p-6 hover:border-blue-500/40 transition-all duration-300">

      {/* Header */}

      <div className="flex justify-between items-start">

        <div className="flex items-center gap-4">

          <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center ${getIconBackground(server.type)}`}
          >
            {getServerIcon(server.type)}
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">
              {server.name}
            </h2>

            <p className="text-sm text-slate-400 mt-1">
              {server.type} • {server.region}
            </p>
          </div>

        </div>

        <span
        className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-2 ${getStatusStyle(
            server.status
        )}`}
        >
        <span className="w-2 h-2 rounded-full bg-current"></span>

        {server.status}
        </span>

      </div>

      {/* Usage */}

      <div className="mt-6 space-y-4">

        {/* CPU */}

        <div>

          <div className="flex justify-between text-sm mb-1">
            <span className="text-slate-400">CPU</span>
            <span className="text-white">{server.cpu}%</span>
          </div>

          <div className="h-2 rounded-full bg-slate-800">
            <div
               className={`h-2 rounded-full ${getBarColor(server.cpu)}`}
               style={{ width: `${server.cpu}%` }}
            />
          </div>

        </div>

        {/* Memory */}

        <div>

          <div className="flex justify-between text-sm mb-1">
            <span className="text-slate-400">Memory</span>
            <span className="text-white">{server.memory}%</span>
          </div>

          <div className="h-2 rounded-full bg-slate-800">
            <div
              className={`h-2 rounded-full ${getBarColor(server.memory)}`}
              style={{ width: `${server.memory}%` }}
            />
          </div>

        </div>

        {/* Disk */}

        <div>

          <div className="flex justify-between text-sm mb-1">
            <span className="text-slate-400">Disk</span>
            <span className="text-white">{server.disk}%</span>
          </div>

          <div className="h-2 rounded-full bg-slate-800">
            <div
              className={`h-2 rounded-full ${getBarColor(server.disk)}`}
              style={{ width: `${server.disk}%` }}
            />
          </div>

        </div>

      </div>

      {/* Bottom Info */}

      <div className="border-t border-slate-700 mt-6 pt-5">

        <div className="flex justify-between text-slate-400 text-sm">

            <div className="flex items-center gap-2">
            <Cpu size={16} />
            <span>{server.vcpu} vCPU</span>
            </div>

            <div className="flex items-center gap-2">
            <HardDrive size={16} />
            <span>{server.ram}</span>
            </div>

            <div className="flex items-center gap-2">
            <Clock3 size={16} />
            <span>{server.uptime}</span>
            </div>

        </div>

        <p className="text-slate-500 text-sm mt-4">
            Last seen {server.lastSeen}
        </p>

        </div>

    </div>
  );
}

export default ServerCard;