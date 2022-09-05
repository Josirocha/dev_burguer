import React from "react";
import Login from "./Pages/Login/Login";
import Cadastro from "./Pages/Cadastro/Cadastro";
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
        <Route path="cadastro" element={<Cadastro />}/>
        {/* cardapio */}
        <Route />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
