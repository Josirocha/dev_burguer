import React from "react";
import {
  Button,
  TextField,
  CardContent,
  CardActions,
  Card,
  Container,
} from "@mui/material";

import S from "./Login.module.css";
import bg from "../../assets/images/hamburguerLogin.svg";
import { useEffect } from "react";

const Login = () => {
  useEffect(() => {
    localStorage.clear("token");
  }, []);

  return (
    <div className={S.container}>
      <div className={S.containerLogin}>
        <Card sx={{ maxWidth: 400 }}>
          <CardContent>
            <h2>Login</h2>
            <form>
              <TextField
                id="email"
                required
                label="Email"
                variant="outlined"
                type="text"
                fullWidth
                margin="normal"
              />
              <TextField
                id="password"
                required
                label="Senha:"
                variant="outlined"
                type="password"
                fullWidth
                margin="normal"
              />
            </form>
          </CardContent>
          <CardActions>
            <Button color="primary" variant="contained">
              Entrar
            </Button>
            <Button size="small" color="primary">
              Esqueci meu email / senha
            </Button>
          </CardActions>
        </Card>
      </div>
      <div className={S.containerBg}>
        <img
          src={bg}
          alt="animação suave na vertical de duas mãos segurando um hambúrguer"
        />
      </div>
    </div>
  );
};

export default Login;
