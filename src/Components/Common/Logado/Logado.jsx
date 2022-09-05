import React from 'react'
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const Logado = () => {

    const navigate = useNavigate()

    function handleLogoff() {
        localStorage.clear('token')
        navigate('/login')
    }
    return (
        <>
            <Button color="secondary">Cardápio</Button>
            <Button color="secondary" onClick={handleLogoff}>Sair</Button>
        </>

    )
}

export default Logado