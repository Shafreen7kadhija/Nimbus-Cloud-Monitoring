import {
  LayoutDashboard,
  Server,
  Activity,
  Bell,
  FileText,
  Cloud,
} from "lucide-react";

function Sidebar() {
  return (
    <aside className="w-60 h-screen bg-[#0F172A] border-r border-slate-800 flex flex-col">

      {/* Logo */}

      <div className="flex items-center gap-3 p-6">

        <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center">

          <Cloud size={20} />

        </div>

        <div>
            <h2 className="text-white font-semibold text-base">
            Nimbus
          </h2>

          <p className="text-slate-500 text-xs">
            Infra Monitoring
          </p>
        </div>

      </div>

      {/* Menu Title */}

      <p className="text-slate-500 text-xs uppercase px-6 mb-3">
        Platform
      </p>

      {/* Menu */}

      <nav className="flex flex-col gap-2 px-3">

        <button className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#202A3E] text-white">

          <LayoutDashboard size={20} />

          Dashboard

        </button>

        <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-slate-800 hover:text-white transition-all duration-300">

          <Server size={20} />

          Servers

        </button>

        <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-slate-800 hover:text-white transition-all duration-300">

          <Activity size={20} />

          Monitoring

        </button>

        <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-slate-800 hover:text-white transition-all duration-300">

          <Bell size={20} />

          Alerts

        </button>

        <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 hover:bg-slate-800 hover:text-white transition-all duration-300">

          <FileText size={20} />

          Logs

        </button>

      </nav>

      {/* Bottom Status */}

      <div className="mt-auto p-4">

        <div className="bg-[#111827] border border-slate-800 rounded-xl p-4">

          <div className="flex items-center gap-2">

            <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>

            <span className="text-sm text-slate-300">

              All systems operational

            </span>

          </div>

        </div>

      </div>

    </aside>
  );
}

export default Sidebar;