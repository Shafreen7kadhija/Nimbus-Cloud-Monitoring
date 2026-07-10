import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";

import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Servers from "../pages/Servers";
import Monitoring from "../pages/Monitoring";
import Alerts from "../pages/Alerts";
import Logs from "../pages/Logs";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Landing Page */}
        <Route path="/" element={<Home />} />

        {/* Dashboard Layout */}
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/servers" element={<Servers />} />
          <Route path="/monitoring" element={<Monitoring />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/logs" element={<Logs />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;