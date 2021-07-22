import React from 'react';
import { Form } from '@unform/web';
import { Scope } from '@unform/core';
import './App.css';
import Input from './components/Form/input';

function App() {
  function handleSubmit(data) {
    // localStorage.setItem('fullName', data.fullName);
    // localStorage.setItem('email', data.email);
    // localStorage.setItem('cpf', data.cpf);
    // localStorage.setItem('address.street', data.address.street);
    // localStorage.setItem('address.number', data.address.number);
    // localStorage.setItem('address.district', data.address.district);
    // localStorage.setItem('address.city', data.address.city);
    // localStorage.setItem('address.state', data.address.state);
    
    let user = {
      name: data.fullName,
      email: data.email,
      cpf: data.cpf,
      address: {
        street: data.address.street,
        number: data.address.number,
        district: data.address.district,
        city: data.address.city,
        state: data.address.state
      }
    }
    console.log(user);
    localStorage.setItem('user', JSON.stringify(user));
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
