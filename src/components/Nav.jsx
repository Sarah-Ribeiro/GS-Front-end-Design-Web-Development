import { useState } from "react";
import { Link } from "react-router-dom";

export function Nav() {
  const [userLogado] = useState(
    JSON.parse(sessionStorage.getItem("usuarioLogado"))
  );

  const handleLogout = () => {
    sessionStorage.removeItem("usuarioLogado");
    window.location.reload();
  };

  return (
    <nav className="nav">
      <div
        style={userLogado == null ? { display: "none" } : { display: "block" }}
        className="nav--user"
      >
        <p className="nav--name">
          {userLogado != null ? `Usuário logado: ${userLogado.usuario}` : ""}
        </p>
        <button onClick={handleLogout} className="nav--button">
          Logout
        </button>
      </div>
      <h1>ClinicScheduler</h1>
      <Link to="/login" className="nav--link">
        Login
      </Link>
    </nav>
  );
}
