import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../../services/userService";
import type { User } from "../../types/user.types";
import { saveUser } from "../../utils/storage";
import "./Users.scss";

function Users() {
  const navigate = useNavigate();
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const pageSize = 10;

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const keyword = search.toLowerCase();

      return (
        user.username.toLowerCase().includes(keyword) ||
        user.email.toLowerCase().includes(keyword) ||
        user.organization.toLowerCase().includes(keyword)
      );
    });
  }, [users, search]);

  const paginatedUsers = filteredUsers.slice((page - 1) * pageSize, page * pageSize);
  const totalPages = Math.ceil(filteredUsers.length / pageSize);

  function openUser(user: User) {
    saveUser(user);
    navigate(`/users/${user.id}`);
  }

  return (
    <section className="users">
      <h1>Users</h1>

      <div className="users__stats">
        <div>
          <span>Users</span>
          <strong>2,453</strong>
        </div>
        <div>
          <span>Active Users</span>
          <strong>2,453</strong>
        </div>
        <div>
          <span>Users with Loans</span>
          <strong>12,453</strong>
        </div>
        <div>
          <span>Users with Savings</span>
          <strong>102,453</strong>
        </div>
      </div>

      <div className="users__toolbar">
        <input
          placeholder="Search users"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
            setPage(1);
          }}
        />
      </div>

      <div className="users__table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Organization</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Date Joined</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {paginatedUsers.map((user) => (
              <tr key={user.id} onClick={() => openUser(user)}>
                <td>{user.organization}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{new Date(user.dateJoined).toLocaleDateString()}</td>
                <td>
                  <span className={`users__status users__status--${user.status.toLowerCase()}`}>
                    {user.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="users__pagination">
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Prev
        </button>

        <span>
          Page {page} of {totalPages}
        </span>

        <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
    </section>
  );
}

export default Users;