import React from "react";
import { Form } from "@unform/web";
import { Scope } from "@unform/core";
import "../../App.css";
import Input from "../../components/Form/input";

function UsersHandling() {
  function handleSubmit(data) {
    let user = {
      name: data.fullName,
      email: data.email,
      cpf: data.cpf,
      address: {
        street: data.address.street,
        number: data.address.number,
        district: data.address.district,
        city: data.address.city,
        state: data.address.state,
      },
    };
    console.log(user);
    localStorage.setItem("user", JSON.stringify(user));
  }
  return (
    <div className="App">
      <h1 className="Primary-title">Cadastro de Usuário</h1>

      <Form onSubmit={handleSubmit} className="Form-container">
        <p className="Secondary-title">Dados Pessoais</p>

        <label className="Field-container">
          <p className="Field-description">Nome completo</p>
          <Input
            className="Input"
            name="fullName"
            placeholder="Insira seu nome completo"
          />
        </label>

        <label className="Field-container">
          <p className="Field-description">E-mail</p>
          <Input
            className="Input"
            name="email"
            type="email"
            placeholder="Insira seu e-mail"
          />
        </label>

        <label className="Field-container">
          <p className="Field-description">CPF</p>
          <Input className="Input" name="cpf" placeholder="Insira seu CPF" />
        </label>

        <Scope path="address">
          <p className="Secondary-title">Endereço</p>
          <label className="Field-container">
            <p className="Field-description">Rua</p>
            <Input className="Input" name="street" placeholder="Insira a rua" />
          </label>

          <label className="Field-container">
            <p className="Field-description">Número</p>
            <Input
              className="Input"
              name="number"
              placeholder="Insira o número e o complemento (se houver)"
            />
          </label>

          <label className="Field-container">
            <p className="Field-description">Bairro</p>
            <Input
              className="Input"
              name="district"
              placeholder="Insira o bairro"
            />
          </label>

          <label className="Field-container">
            <p className="Field-description">Cidade</p>
            <Input
              className="Input"
              name="city"
              placeholder="Insira a cidade"
            />
          </label>

          <label className="Field-container">
            <p className="Field-description">Estado</p>
            <Input
              className="Input"
              name="state"
              placeholder="Insira o estado"
            />
          </label>
        </Scope>

        <div className="Buttons-container">
          <a className="Link" href="/">
            Voltar ao início
          </a>
          <button className="Button" type="submit">
            Enviar
          </button>
        </div>
      </Form>
    </div>
  );
}

export default UsersHandling;
