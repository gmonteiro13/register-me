import React from 'react';
import { Form } from '@unform/web';
import { Scope } from '@unform/core';
import './App.css';
import Input from './components/Form/input';

function App() {
  function handleSubmit(data) {
    console.log(data);
  }
  return (
    <div className="App">
      <h1>Hello World</h1>

      <Form onSubmit={handleSubmit}>
        <Input name="fullName" />
        <Input name="email" type="email" />
        <Input name="cpf" />
        <Scope path="address">
          <Input name ="street" />
          <Input name ="number" />
          <Input name ="district" />
          <Input name ="city" />
          <Input name ="state" />
        </Scope>

        <button type="submit">Enviar</button>
      </Form>
    </div>
  );
}

export default App;
