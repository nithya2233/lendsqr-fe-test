import {
  FaUsers,
  FaUserCheck,
  FaMoneyBill,
  FaPiggyBank
} from "react-icons/fa";

import "./Dashboard.scss";

function Dashboard() {
  return (
    <section className="dashboard">

      <h1>Dashboard</h1>

      <div className="dashboard__cards">

        <div className="card">
          <FaUsers />
          <p>Users</p>
          <h2>2,453</h2>
        </div>

        <div className="card">
          <FaUserCheck />
          <p>Active Users</p>
          <h2>2,453</h2>
        </div>

        <div className="card">
          <FaMoneyBill />
          <p>Users with Loans</p>
          <h2>12,453</h2>
        </div>

        <div className="card">
          <FaPiggyBank />
          <p>Users with Savings</p>
          <h2>102,453</h2>
        </div>

      </div>

    </section>
  );
}

export default Dashboard;