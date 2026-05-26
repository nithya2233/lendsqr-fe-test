import "./Navbar.scss";
import logo from "../../assets/logo.svg";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__left">
        <img
          src={logo}
          alt="Lendsqr"
          className="navbar__logo"
        />

        <div className="navbar__search">
          <input
            type="text"
            placeholder="Search for anything"
          />

          <button>
            Search
          </button>
        </div>
      </div>

      <div className="navbar__right">
        <a href="/">Docs</a>

        <button className="navbar__notification">
          🔔
        </button>

        <div className="navbar__profile">
          <span>Adedeji</span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;