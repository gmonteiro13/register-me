import React from "react";
import "../../App.css";

function Home() {
  return (
    <div className="Main-page">
      <div className="Title-area">
        <h1 className="Primary-title">Register.me</h1>
        <p className="Secondary-title">
          Bem-vindo ao Register-me, sua plataforma de cadastro.
          <br />
          Selecione uma opção abaixo:
        </p>
      </div>

      <div className="Links-container">
        <a className="Link" href="/products">Produtos</a>
        <a className="Link" href="/users">Usuários</a>
      </div>
    </div>
  );
}

export default Home;
