import React from 'react'
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const Deslogado = () => {
    const navigate = useNavigate()

    function handleLogin() {
        navigate('/login')
    }

    return (
        <>
            <Button color="secondary">Cadastre-se</Button>
            <Button color="secondary" onClick={handleLogin}>Entrar</Button>
        </>
    )
}

export default Deslogado