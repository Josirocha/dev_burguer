import React,{useState} from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Header from "./Components/Common/Header/Header";
import { createTheme, ThemeProvider } from "@mui/material";
import Loader from './Components/Loader/Loader'
import Home from "./Pages/Home/Home";
import Cardapio from "./Pages/Cardapio/Cardapio";
import SobreNos from "./Pages/SobreNos/SobreNos";
import Login from "./Pages/Login/Login";
import Cadastro from "./Pages/Cadastro/Cadastro";
import { useEffect } from "react";
import Footer from "./Components/Common/Footer/Footer";

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
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 4000);
    });
    return (
        <div>
            {isLoading == true ? (
                <Loader />
            ) : (
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                        <Header />
                        <Switch>
                            <Route path="" exact element={<Home />} />
                            <Route path="sobre" exact element={<SobreNos />} />
                            <Route path="login" exact element={<Login />} />
                            <Route
                                path="cadastro"
                                exact
                                element={<Cadastro />}
                            />
                            <Route
                                path="cardapio"
                                exact
                                element={<Cardapio />}
                            />
                        </Switch>
                    <Footer/>
                    </BrowserRouter>
                </ThemeProvider>
            )}
        </div>
    );
};

export default Routes;
