import { useEffect, useState } from "react";

import ServerCard from "../components/servers/ServerCard";
import ServerSearch from "../components/servers/ServerSearch";
import StatusFilter from "../components/servers/StatusFilter";

import api from "../services/api";

function Servers() {
  const [status, setStatus] = useState("All Statuses");
  const [search, setSearch] = useState("");
  const [servers, setServers] = useState<any[]>([]);
  useEffect(() => {
  api.get("/api/servers")
    .then((response) => {
      setServers(response.data);
    })
    .catch((error) => {
      console.error("Error fetching servers:", error);
    });
}, []);
  const filteredServers = servers.filter((server) => {
  const matchesStatus =
    status === "All Statuses" || server.status === status;

  const matchesSearch =
    server.name.toLowerCase().includes(search.toLowerCase());

  return matchesStatus && matchesSearch;
});
  return (
    <div className="space-y-8">

      {/* Heading */}

      <div>
        <h1 className="text-3xl font-bold text-white">
          Servers
        </h1>

        <p className="text-slate-400 mt-2">
          Monitoring {filteredServers.length} servers across your infrastructure.
        </p>
      </div>

      {/* Search + Filter */}

      <div className="flex gap-4">

        <ServerSearch
          search={search}
          setSearch={setSearch}
        />

        <StatusFilter
            status={status}
            setStatus={setStatus}
        />

      </div>

      {/* Server Grid */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {filteredServers.map((server) => (
          <ServerCard
            key={server.id}
            server={server}
          />
        ))}

      </div>

    </div>
  );
}

export default Servers;