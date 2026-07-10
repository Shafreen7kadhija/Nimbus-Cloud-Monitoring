import { useState } from "react";
import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";
import { Outlet } from "react-router-dom";

function MainLayout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-[#0B1120] text-white">

      <Sidebar collapsed={collapsed} />

      <div className="flex flex-col flex-1">

        <TopNavbar
          collapsed={collapsed}
          setCollapsed={setCollapsed}
        />

        <main className="flex-1 overflow-auto px-6 py-5 bg-[#0B1120]">
          <Outlet />
        </main>

      </div>

    </div>
  );
}

export default MainLayout;