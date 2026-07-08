import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="flex h-screen bg-[#0B1120] text-white">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <TopNavbar />

        <main className="flex-1 overflow-auto px-6 py-5 bg-[#0B1120]">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;