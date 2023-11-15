import { useState } from "react";

export function Login() {
  // Hook - UseState
  const [usuario, setUsuario] = useState({
    usuario: "",
    senha: "",
  });

  // Função HandleChange
  const handleChange = async (e) => {
    const { name, value } = e.target;

    setUsuario({ ...usuario, [name]: value });
  };

  // Função HandleSubmit
  const handleSubmit = async (e) => {
    // Previne que o form faça qualquer coisa antes de executar
    e.preventDefault();

    let user;

    try {
      const response = await fetch("http://localhost:3000/usuarios");
      if (response.ok) {
        const users = await response.json();

        for (let i = 0; i < users.length; i++) {
          const use = users[i];
          user = use;
          if (use.usuario == usuario.usuario && use.senha == usuario.senha) {
            user = use;
            break;
          }
        }

        if (user) {
          sessionStorage.setItem("usuarioLogado", JSON.stringify(user));

          setTimeout(() => {
            window.location = "/home";
          }, 5000);
        } else {
          alert("Usuário/Senha inválidos");
          setUsuario({
            usuario: "",
            senha: "",
          });
          window.location = <Login />;
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form--page">
      <h1 className="form--title">Login</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="form--user">
          <label htmlFor="idUsuario" className="form--user--label">
            Usuário:
          </label>
          <input
            type="text"
            name="usuario"
            value={usuario.usuario}
            placeholder="Digite o seu usuário"
            onChange={handleChange}
            className="form--user--input"
          />
        </div>
        <div className="form--password">
          <label htmlFor="idSenha" className="form--password--label">
            Senha:
          </label>
          <input
            type="password"
            name="senha"
            value={usuario.senha}
            placeholder="Digite a sua senha"
            onChange={handleChange}
            className="form--password--input"
          />
        </div>

        <button type="submit" className="form--button">
          Login
        </button>
      </form>
    </div>
  );
}
