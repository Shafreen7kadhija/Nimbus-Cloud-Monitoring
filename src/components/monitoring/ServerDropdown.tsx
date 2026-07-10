import { useState } from "react";
import { ChevronDown } from "lucide-react";

type ServerDropdownProps = {
  selectedServer: string;
  setSelectedServer: React.Dispatch<React.SetStateAction<string>>;
};

function ServerDropdown({
  selectedServer,
  setSelectedServer,
}: ServerDropdownProps) {
  const [open, setOpen] = useState(false);
  const servers = [
    "All Servers",

    "api-gateway-01",
    "api-gateway-02",

    "web-frontend-01",

    "postgres-primary",
    "postgres-replica",

    "redis-cache-01",
    "redis-cache-02",

    "worker-queue-01",
    "worker-queue-02",

    "object-storage-01",

    "analytics-ingest",

    "search-indexer",
    ];

  return (
    <div className="relative w-44">

      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between
        bg-[#151c2d]
        border border-slate-700
        rounded-lg
        px-4
        py-2.5
        text-white"
      >

        <span>{selectedServer}</span>

        <ChevronDown size={18} />

      </button>
      {open && (
  <div
    className="
      absolute
      mt-2
      w-full
      bg-[#151c2d]
      border
      border-slate-700
      rounded-lg
      shadow-xl
      z-50
    "
  >

    {servers.map((server) => (
  <div
    key={server}
    onClick={() => {
        setSelectedServer(server);
        setOpen(false);
    }}
    className="px-4 py-3 text-white hover:bg-slate-700 cursor-pointer"
  >
    {server}
  </div>
))}
  </div>
)}

    </div>
  );
}

export default ServerDropdown;