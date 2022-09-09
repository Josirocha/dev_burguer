import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Logado = ({ color = "secondary" }) => {
    const navigate = useNavigate();

    function handleLogoff() {
        localStorage.removeItem("token");
        navigate("/login");
    }

    function handleCardapio() {
        navigate("/cardapio");
    }
    return (
        <>
            <Button color={color} onClick={handleCardapio}>
                Cardápio
            </Button>
            <Button color={color} onClick={handleLogoff}>

            <Button color="secondary" onClick={handleCardapio}>
                Cardápio
            </Button>
            <Button color="secondary" onClick={handleLogoff}
                Sair
            </Button>
        </>
    );
};

export default Logado;
