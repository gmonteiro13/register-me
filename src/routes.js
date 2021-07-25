import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Users from "./Pages/Users";
import Home from "./Pages/Home";
import Products from "./Pages/Products"

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path="/users" component={Users} />
        <Route path="/products" component={Products} />
      </Switch>
    </BrowserRouter>
  );
}
