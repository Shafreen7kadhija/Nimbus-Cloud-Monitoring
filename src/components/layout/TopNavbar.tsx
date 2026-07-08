import { Menu, Search, RefreshCw, Settings } from "lucide-react";

function TopNavbar() {
  return (
    <header className="h-[64px] border-b border-slate-800 bg-[#0B1120] flex items-center justify-between px-6">

      {/* Left */}

      <div className="flex items-center gap-4">

        <button className="text-slate-400 hover:text-white transition-colors duration-300">
          <Menu size={20} />
        </button>

        <div className="relative">

          <Search
            size={17}
            className="absolute left-3 top-3 text-slate-500"
          />

          <input
            type="text"
            placeholder="Search servers, alerts, logs..."
            className="
            w-[440px]
            bg-[#0F172A]
            border
            border-slate-700
            rounded-xl
            h-11
            pl-10
            pr-4
            text-sm
            outline-none
            focus:border-blue-500
            "
          />

        </div>

      </div>

      {/* Right */}

      <div className="flex items-center gap-6">

        <button className="text-slate-400 hover:text-white transition-colors duration-300">
          <RefreshCw size={18} />
        </button>

        <button className="text-slate-400 hover:text-white transition-colors duration-300">
          <Settings size={18} />
        </button>

        <div
          className="
          w-11
          h-11
          rounded-full
          bg-blue-800
          flex
          items-center
          justify-center
          font-semibold
          "
        >
          OP
        </div>

      </div>

    </header>
  );
}

export default TopNavbar;