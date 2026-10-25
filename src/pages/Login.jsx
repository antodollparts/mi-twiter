import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username);
    navigate("/");
  };

  return (
    <main className="auth-page">
      <form className="auth-card" onSubmit={handleSubmit}>
        <div className="auth-card__icon" aria-hidden="true">✦</div>
        <span className="page-intro__eyebrow">Mi-twiter</span>
        <h2>Inicia sesión</h2>
        <p className="auth-card__description">Entra a tu espacio para compartir lo que piensas.</p>
        <label htmlFor="username">Nombre de usuario</label>
        <input
          id="username"
          className="form-input"
          type="text"
          placeholder="Ej. ana_garcia"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <button className="button button--primary button--full" type="submit">Iniciar sesión</button>
      </form>
    </main>
  );
};

export default Login;