import {
  LayoutDashboard,
  Server,
  Activity,
  Bell,
  FileText,
  Cloud,
} from "lucide-react";

import { NavLink } from "react-router-dom";

function Sidebar({ collapsed }: { collapsed: boolean }) {
  return (
    <aside
      className={`${
        collapsed ? "w-20" : "w-60"
      } h-screen bg-[#0F172A] border-r border-slate-800 flex flex-col transition-all duration-300`}
    >
      {/* Logo */}

      <div className="flex items-center gap-3 p-6">
        <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center">
          <Cloud size={20} />
        </div>

        {!collapsed && (
          <div>
            <h2 className="text-white font-semibold text-base">
              Nimbus
            </h2>

            <p className="text-slate-500 text-xs">
              Infra Monitoring
            </p>
          </div>
        )}
      </div>

      {/* Menu Title */}

      {!collapsed && (
        <p className="text-slate-500 text-xs uppercase px-6 mb-3">
          Platform
        </p>
      )}

      {/* Menu */}

      <nav className="flex flex-col gap-2 px-3">

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
              isActive
                ? "bg-[#202A3E] text-white"
                : "text-slate-400 hover:bg-slate-800 hover:text-white"
            }`
          }
        >
          <LayoutDashboard size={20} />
          {!collapsed && "Dashboard"}
        </NavLink>

        <NavLink
          to="/servers"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
              isActive
                ? "bg-[#202A3E] text-white"
                : "text-slate-400 hover:bg-slate-800 hover:text-white"
            }`
          }
        >
          <Server size={20} />
          {!collapsed && "Servers"}
        </NavLink>

        <NavLink
          to="/monitoring"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
              isActive
                ? "bg-[#202A3E] text-white"
                : "text-slate-400 hover:bg-slate-800 hover:text-white"
            }`
          }
        >
          <Activity size={20} />
          {!collapsed && "Monitoring"}
        </NavLink>

        <NavLink
          to="/alerts"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
              isActive
                ? "bg-[#202A3E] text-white"
                : "text-slate-400 hover:bg-slate-800 hover:text-white"
            }`
          }
        >
          <Bell size={20} />
          {!collapsed && "Alerts"}
        </NavLink>

        <NavLink
          to="/logs"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
              isActive
                ? "bg-[#202A3E] text-white"
                : "text-slate-400 hover:bg-slate-800 hover:text-white"
            }`
          }
        >
          <FileText size={20} />
          {!collapsed && "Logs"}
        </NavLink>

      </nav>

      {/* Bottom Status */}

      <div className="mt-auto p-4">

        <div className="bg-[#111827] border border-slate-800 rounded-xl p-4">

          <div className="flex items-center gap-2">

            <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>

            {!collapsed && (
              <span className="text-sm text-slate-300">
                All systems operational
              </span>
            )}

          </div>

        </div>

      </div>

    </aside>
  );
}

export default Sidebar;