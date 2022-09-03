import React from "react";
import Login from "./Pages/Login/Login";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Header from "./Components/Common/Header/Header";
import { createTheme, ThemeProvider } from '@mui/material';
import Cardapio from "./Pages/Cardapio/Cardapio";

const theme = createTheme({
  palette: {
    primary: {
      main: '#004643'
    },
    secondary: {
      main: '#ffffff'
    },
  },
});

const Routes = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          {/* home */}
          <Route />
          {/* login */}
          <Route path="login" exact element={<Login />} />
          {/* cadastro */}
          <Route />
          {/* cardapio */}
          <Route path="cardapio" exact element={<Cardapio />} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default Routes;
