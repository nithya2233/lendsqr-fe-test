import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import "./AppLayout.scss";

function AppLayout() {
  return (
    <div className="app-layout">
      <Navbar />
      <div className="app-layout__body">
        <Sidebar />
        <main className="app-layout__content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;