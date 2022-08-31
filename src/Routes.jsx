import React from "react";
import Login from "./Pages/Login/Login";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* home */}
        <Route />
        {/* login */}
        <Route path="login" element={<Login />} />
        {/* cadastro */}
        <Route />
        {/* cardapio */}
        <Route />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
