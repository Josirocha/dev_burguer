import React from 'react'
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const Deslogado = ({color}) => {
    const navigate = useNavigate()

    function handleLogin() {
        navigate('/login')
    }
    function handleCadastro() {
        navigate('/cadastro')
    }

    return (
        <>
            <Button color={color} onClick={handleCadastro}>Cadastre-se</Button>
            <Button color={color} onClick={handleLogin}>Entrar</Button>
        </>
    )
}

export default Deslogado