import {
  Menu,
  Search,
  RefreshCw,
  Settings,
  User,
  LogOut,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function TopNavbar({
  collapsed,
  setCollapsed,
}: {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [refreshing, setRefreshing] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [showProfileCard, setShowProfileCard] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const [darkMode, setDarkMode] = useState(true);
  const [liveUpdates, setLiveUpdates] = useState(true);
  const [notifications, setNotifications] = useState(false);

  const profileRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setProfileOpen(false);
        setShowProfileCard(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="relative h-[64px] border-b border-slate-800 bg-[#0B1120] flex items-center justify-between px-6">

      {/* Left */}

      <div className="flex items-center gap-4">

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-slate-400 hover:text-white transition-colors duration-300"
        >
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

        <button
          onClick={handleRefresh}
          className="text-slate-400 hover:text-white transition-colors duration-300"
        >
          <RefreshCw
            size={18}
            className={refreshing ? "animate-spin" : ""}
          />
        </button>

        <button className="text-slate-400 hover:text-white transition-colors duration-300">
          <Settings size={18} />
        </button>

        <div className="relative" ref={profileRef}>

          <button
            onClick={() => setProfileOpen(!profileOpen)}
            className="
              w-11
              h-11
              rounded-full
              bg-blue-800
              flex
              items-center
              justify-center
              font-semibold
              hover:bg-blue-700
              transition
            "
          >
            OP
          </button>

          {profileOpen && (

            <div
              className="
                absolute
                right-0
                mt-3
                w-56
                rounded-xl
                border
                border-slate-700
                bg-[#151c2d]
                shadow-2xl
                overflow-hidden
                z-50
              "
            >

              <button
                onClick={() => {
                  setShowProfileCard(true);
                  setProfileOpen(false);
                }}
                className="
                  w-full
                  flex
                  items-center
                  gap-3
                  px-4
                  py-3
                  text-left
                  hover:bg-slate-700
                  transition
                "
              >
                <User size={18} />
                Profile
              </button>

              <button
                onClick={() => {
                  setProfileOpen(false);
                  setShowSettings(true);
                }}
                className="
                  w-full
                  flex
                  items-center
                  gap-3
                  px-4
                  py-3
                  text-left
                  hover:bg-slate-700
                  transition
                "
              >
                <Settings size={18} />
                Settings
              </button>

              <button
                  onClick={() => {
                    setProfileOpen(false);
                    navigate("/");
                  }}
                  className="
                    w-full
                    flex
                    items-center
                    gap-3
                    px-4
                    py-3
                    text-left
                    text-red-400
                    hover:bg-red-900/20
                    transition
                  "
                >
                <LogOut size={18} />
                Logout
              </button>

            </div>

          )}

          {showProfileCard && (

            <div
              className="
                absolute
                right-0
                mt-3
                w-72
                rounded-2xl
                bg-[#151c2d]
                border
                border-slate-700
                shadow-2xl
                p-6
                z-50
              "
            >

              <div className="flex flex-col items-center">

                <div className="w-20 h-20 rounded-full bg-blue-700 flex items-center justify-center text-2xl font-bold">
                  OP
                </div>

                <h2 className="mt-4 text-xl font-semibold text-white">
                  Shahnaz Shafreen
                </h2>

                <p className="text-slate-400 text-sm mt-1">
                  Java Full Stack Developer
                </p>

                <p className="text-slate-500 text-xs mt-2">
                  shahnazshafreen.cs23@bitsathy.ac.in
                </p>

                <div className="flex items-center gap-2 mt-4 text-green-400 text-sm">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  Online
                </div>

                <button
                  onClick={() => setShowProfileCard(false)}
                  className="
                    mt-6
                    w-full
                    bg-blue-600
                    hover:bg-blue-700
                    rounded-lg
                    py-2
                    transition
                  "
                >
                  Close
                </button>

              </div>

            </div>

          )}

        </div>

      </div>

      {refreshing && (
        <div className="absolute top-16 right-6 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg text-sm">
          Refreshing...
        </div>
      )}

    </header>
  );
}

export default TopNavbar;