import React from "react";
import { Form } from "@unform/web";
import { Scope } from "@unform/core";
import "../../App.css";
import CurrencyInput from "react-currency-input-field";
import Input from "../../components/Form/input";

function ProductHandling() {
  function handleSubmit(data) {
    let productType = document.getElementById("type-select").value;
    let productPrice = document.getElementById("price-input").value;
    let product = {
      productName: data.productName,
      type: productType,
      inventory: {
        amount: data.inventory.amount,
        code: data.inventory.code,
        price: productPrice,
      },
    };
    console.log(product);
    localStorage.setItem("product", JSON.stringify(product));
  }
  return (
    <div className="App">
      <h1 className="Primary-title">Cadastro de Produtos</h1>

      <Form onSubmit={handleSubmit} className="Form-container">
        <p className="Secondary-title">Descrição do Produto</p>

        <label className="Field-container">
          <p className="Field-description">Nome</p>
          <Input
            className="Input"
            name="productName"
            placeholder="Insira o nome do produto"
          />
        </label>

        <label className="Field-container">
          <p className="Field-description">Tipo</p>
          <select id="type-select" setValue="productType" name="productType">
            <option value="eletronic">Eletrônico</option>
            <option value="food">Alimentício</option>
            <option value="utility">Utilidades</option>
            <option value="cleaning">Limpeza</option>
          </select>
        </label>

        <Scope path="inventory">
          <p className="Secondary-title">Dados de Estoque</p>
          <label className="Field-container">
            <p className="Field-description">Quantidade</p>
            <Input
              className="Input"
              name="amount"
              type="number"
              placeholder="Insira a quantidade"
            />
          </label>

          <label className="Field-container">
            <p className="Field-description">Código do Produto</p>
            <Input
              className="Input"
              name="code"
              type="number"
              placeholder="Insira o código do produto"
            />
          </label>

          <label className="Field-container">
            <p className="Field-description">Valor</p>
            <CurrencyInput
              id="price-input"
              prefix="R$"
              decimalSeparator=","
              groupSeparator="."
              name="price"
              placeholder="Insira o preço"
              defaultValue={10}
              decimalsLimit={2}
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

export default ProductHandling;
