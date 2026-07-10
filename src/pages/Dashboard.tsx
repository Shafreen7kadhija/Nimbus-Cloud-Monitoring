import {
  Server,
  ShieldAlert,
  Cpu,
  MemoryStick,
} from "lucide-react";

import StatsCard from "../components/dashboard/StatsCard";
import ResourceChart from "../components/dashboard/ResourceChart";
import ServerStatus from "../components/dashboard/ServerStatus";
import RegionChart from "../components/dashboard/RegionChart";
import RecentAlerts from "../components/dashboard/RecentAlerts";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className="space-y-8">

      {/* Heading */}

      <div>
        <h1 className="text-3xl font-bold text-white">
          Dashboard
        </h1>

        <p className="text-slate-400 mt-2">
          Real-time overview of your cloud infrastructure health.
        </p>
      </div>

      {/* Stats */}

      <div className="grid grid-cols-4 gap-6">

        <StatsCard
          title="Servers online"
          value="9/12"
          subtitle="Across 4 regions"
          icon={Server}
          iconBg="bg-green-900/30"
          iconColor="text-green-400"
        />

        <StatsCard
          title="Active alerts"
          value="8"
          subtitle="Needs attention"
          icon={ShieldAlert}
          iconBg="bg-red-900/30"
          iconColor="text-red-400"
        />

        <StatsCard
          title="Avg CPU"
          value="34%"
          subtitle="Fleet-wide average"
          icon={Cpu}
          iconBg="bg-blue-900/30"
          iconColor="text-blue-400"
          change="↓ 8.1%"
          changeColor="text-red-400"
        />

        <StatsCard
          title="Avg memory"
          value="48%"
          subtitle="Fleet-wide average"
          icon={MemoryStick}
          iconBg="bg-cyan-900/30"
          iconColor="text-cyan-400"
          change="↑ 12.4%"
          changeColor="text-green-400"
        />

      </div>

        {/* Charts */}

        <div className="grid grid-cols-3 gap-6 items-stretch">

        <div className="col-span-2">
            <ResourceChart />
        </div>

        <div>
            <ServerStatus />
        </div>

        </div>

        {/* Bottom Section */}

        <div className="grid grid-cols-12 gap-6 items-start">

        <div className="col-span-4">
            <RegionChart />
        </div>

        <div className="col-span-8">

             <RecentAlerts />

        </div>

        </div>
    </div>
  );
}

export default Dashboard;