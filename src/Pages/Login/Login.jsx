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
import { useNavigate } from "react-router-dom";

const Login = () => {
  useEffect(() => {
    localStorage.clear("token");
  }, []);

  const navigate = useNavigate();

  return (
    <div className={S.container}>
      <div className={S.containerLogin}>
        <Card sx={{ maxWidth: 400, height: 450 }}>
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
          <CardActions
            sx={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: 2,
              paddingRight: 2,
            }}
          >
            <Button
              color="primary"
              variant="contained"
              fullWidth
              sx={{ marginBottom: 2 }}
              size="large"
            >
              Entrar
            </Button>
            <Button size="small" color="primary" sx={{ marginBottom: 2 }}>
              Esqueci meu email / senha
            </Button>
            <h4>Ainda não tem conta com a gente?</h4>
            <Button
              color="primary"
              variant="outlined"
              fullWidth
              size="large"
              sx={{ marginTop: 2 }}
              onClick={() => navigate("/cadastro")}
            >
              Cadastre-se aqui!
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
