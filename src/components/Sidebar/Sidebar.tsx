import { NavLink } from "react-router-dom";
import "./Sidebar.scss";

function Sidebar() {
  return (
    <aside className="sidebar">
      <p className="sidebar__switch">Switch Organization</p>

      <nav>
        <NavLink to="/dashboard">Dashboard</NavLink>

        <h4>Customers</h4>
        <NavLink to="/users">Users</NavLink>
        <a>Guarantors</a>
        <a>Loans</a>
        <a>Decision Models</a>
        <a>Savings</a>

        <h4>Businesses</h4>
        <a>Organization</a>
        <a>Loan Products</a>
        <a>Fees and Charges</a>

        <h4>Settings</h4>
        <a>Preferences</a>
        <a>Fees and Pricing</a>
        <a>Audit Logs</a>
      </nav>
    </aside>
  );
}

export default Sidebar;