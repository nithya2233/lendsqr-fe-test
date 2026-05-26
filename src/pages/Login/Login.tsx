import { useState } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";
import logo from "../../assets/logo.svg";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    localStorage.setItem("auth", "true");

    navigate("/dashboard");
  }

  return (
    <main className="login">
      <section className="login__left">
        <img className="login__logo" src={logo} alt="Lendsqr logo" />

        <div className="login__illustration">
          <img src="/signin.svg" alt="Login illustration" />
        </div>
      </section>

      <section className="login__right">
        <form onSubmit={handleSubmit} className="login__form">
          <h2>Welcome!</h2>

          <p>Enter details to login.</p>

          {error && <span className="login__error">{error}</span>}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <button type="button" className="login__forgot">
            FORGOT PASSWORD?
          </button>

          <button type="submit" className="login__submit">
            LOG IN
          </button>
        </form>
      </section>
    </main>
  );
}

export default Login;