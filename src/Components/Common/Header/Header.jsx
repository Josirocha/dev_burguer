import { AppBar, Toolbar, Button, Avatar } from "@mui/material";
import Burger from "../../../assets/images/burger.png"
import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import Logado from "../Logado/Logado";
import Deslogado from "../Deslogado/Deslogado";
import { useLocation } from "react-router-dom";

const Header = () => {

  const [token, setToken] = useState()
  const location = useLocation();

  useEffect(() => {
    setToken(localStorage.getItem('token'))
  }, [location])

  return (
    <AppBar>
      <Toolbar>
        <Box sx={{ minWidth: '200px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <Avatar src={Burger} alt="logo" variant="square" sx={{
            marginRight: "16px"
          }} />
          <h3>Dev Burguer</h3>
        </Box>
        <Box sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          width: '100%'
        }}>
          <Button color="secondary">Home</Button>
          <Button color="secondary">Sobre nós</Button>
          {token ? <Logado /> : <Deslogado />}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
