import React from "react";
import {
    Button,
    TextField,
    CardContent,
    CardActions,
    Card,
} from "@mui/material";

import S from "./Login.module.css";
import bg from "../../assets/images/hamburguerLogin.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
    const [dadosLogin, setDadosLogin] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const handleChange = (e, nomeDaChave) => {
        setDadosLogin({
            ...dadosLogin,

            [nomeDaChave]: e.target.value,
        });
    };

    const handleClick = (e) => {
        e.preventDefault();
        const users = localStorage.getItem("cadastro");
        const usersJson = JSON.parse(users);
        console.log(dadosLogin);
        if (!usersJson) {
            toast.error("Email não cadastrado", {
                position: "top-center",
                autoClose: 1300,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else if (
            usersJson.email === dadosLogin.email &&
            usersJson.senha === dadosLogin.password
        ) {
            localStorage.setItem("token", "true");
            navigate("/");
        } else {
            toast.error("Usuário ou senha inválidos!", {
                position: "top-center",
                autoClose: 1300,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    useEffect(() => {
        localStorage.removeItem("token");
    }, []);

    return (
        <div className={S.container}>
            <div className={S.containerLogin}>
                <Card sx={{ maxWidth: 400, height: 450 }}>
                    <CardContent>
                        <h2>Login</h2>
                        <form>
                            <TextField
                                id="email"
                                name="email"
                                required
                                label="Email"
                                variant="outlined"
                                type="text"
                                fullWidth
                                margin="normal"
                                onChange={(e) => handleChange(e, "email")}
                            />
                            <TextField
                                id="password"
                                name="password"
                                required
                                label="Senha:"
                                variant="outlined"
                                type="password"
                                fullWidth
                                margin="normal"
                                onChange={(e) => handleChange(e, "password")}
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
                            onClick={handleClick}
                        >
                            Entrar
                        </Button>
                        <Button
                            size="small"
                            color="primary"
                            sx={{ marginBottom: 2 }}
                        >
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
