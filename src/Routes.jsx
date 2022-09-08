import React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Header from "./Components/Common/Header/Header";
import { createTheme, ThemeProvider } from "@mui/material";
import Cardapio from "./Pages/Cardapio/Cardapio";
import SobreNos from "./Pages/SobreNos/SobreNos";
import Login from "./Pages/Login/Login";
import Cadastro from "./Pages/Cadastro/Cadastro";
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const theme = createTheme({
    palette: {
        primary: {
            main: "#f2310c",
        },
        secondary: {
            main: "#f8f8f8",
        },
    },
    typography: {
        fontFamily: ["Mulish,sans-serif"],
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
                    <Route path="sobre" exact element={<SobreNos />} />
                    {/* login */}
                    <Route path="login" exact element={<Login />} />
                    {/* cadastro */}
                    <Route path="cadastro" exact element={<Cadastro />} />
                    {/* cardapio */}
                    <Route path="cardapio" exact element={<Cardapio />} />
                </Switch>
            </BrowserRouter>

            <ToastContainer/>
        </ThemeProvider>
    );
};

export default Routes;