import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logado from "../Logado/Logado";
import Deslogado from "../Deslogado/Deslogado";
import  { useEffect, useState } from "react";
import { Button } from "@mui/material";

const MenuOptions = ({color }) => {
    const navigate = useNavigate();
    const [token, setToken] = useState();
    const location = useLocation();

    useEffect(() => {
        setToken(localStorage.getItem("token"));
    }, [location]);

    function handleHome() {
        navigate("/");
    }
    function handleSobre() {
        navigate("/sobre");
    }

    return (
        <>
            <Button color={color} onClick={handleHome}>
                Home
            </Button>
            <Button color={color} onClick={handleSobre}>
                Sobre nós
            </Button>
            {token ? <Logado color={color} /> : <Deslogado color={color} />}
        </>
    );
};

export default MenuOptions;
