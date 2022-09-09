import React from "react";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
    FormControlLabel,
    FormControl,
    Radio,
    RadioGroup,
    Box,
    Typography,
    CardMedia,
    Grid,
    Container,
} from "@mui/material";
import img from "../../assets/images/cadastro.svg";
import { useState } from "react";
import {
    validaCampoVazio,
    validaEmail,
    validaSenha,
    validaSenhaIgual,
} from "../../Utils/validacao";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Cadastro() {
    const navigate = useNavigate();

    const [usuario, setUsuario] = useState({
        nome: "",
        cpf: "",
        cep: "",
        telefone: "",
        email: "",
        senha: "",
        confirmaSenha: "",
    });

    const valueInput = (target, key) => {
        setUsuario({ ...usuario, [key]: target.value });
    };
    const addUser = async (e) => {
        e.preventDefault();
        if (
            !validaCampoVazio(usuario) &&
            validaEmail(usuario.email) &&
            validaSenha(usuario.senha) &&
            validaSenhaIgual(usuario.senha, usuario.confirmaSenha)
        ) {
            localStorage.setItem("cadastro", JSON.stringify(usuario));
            toast.success("usuário cadastrado com sucesso");
            navigate("/login");
        } else {
            toast.error("usuário não cadastrado");
        }
    };
    return (
        <Container>
            <Grid
                sx={{
                    py: 2,
                    marginTop: "80px",
                }}
                container
            >
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent
                            onSubmit={addUser}
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                width: "300",
                                height: "800",
                            }}
                        >
                            <Box justifyContent="center" display={"flex"}>
                                <Typography fontWeight={800} variante="h2">
                                    Cadastre-se aqui
                                </Typography>
                            </Box>

                            <Grid container flexDirection={"row"} spacing={2}>
                                <Grid item xs={12} md={6} fullWidth>
                                    <TextField
                                        id="Nome"
                                        fullWidth
                                        label="Nome"
                                        variant="outlined"
                                        type="text"
                                        margin="normal"
                                        onChange={({ target }) =>
                                            valueInput(target, "nome")
                                        }
                                    />
                                </Grid>
                                <Grid item xs={12} md={6} fullWidth>
                                    <TextField
                                        id="cpf"
                                        fullWidth
                                        label="CPF"
                                        variant="outlined"
                                        type="text"
                                        margin="normal"
                                        onChange={({ target }) =>
                                            valueInput(target, "cpf")
                                        }
                                    />
                                </Grid>
                            </Grid>

                            <Grid container flexDirection={"row"} spacing={2}>
                                <Grid item xs={12} md={6} fullWidth>
                                    <TextField
                                        fullWidth
                                        id="cep"
                                        label="CEP"
                                        variant="outlined"
                                        type="text"
                                        margin="normal"
                                        onChange={({ target }) =>
                                            valueInput(target, "cep")
                                        }
                                    />
                                </Grid>
                                <Grid item xs={12} md={6} fullWidth>
                                    <TextField
                                        fullWidth
                                        id="tel"
                                        label="Telefone"
                                        variant="outlined"
                                        type="text"
                                        margin="normal"
                                        onChange={({ target }) =>
                                            valueInput(target, "telefone")
                                        }
                                    />
                                </Grid>
                            </Grid>

                            <TextField
                                id="email"
                                label="E-mail"
                                variant="outlined"
                                type="text"
                                margin="normal"
                                onChange={({ target }) =>
                                    valueInput(target, "email")
                                }
                            />
                            <TextField
                                id="senha"
                                label="Senha"
                                variant="outlined"
                                type="password"
                                margin="normal"
                                placeholder="Digite uma senha entre 8 e 15 caracteres"
                                onChange={({ target }) =>
                                    valueInput(target, "senha")
                                }
                            />
                            <TextField
                                id="validaSenha"
                                label="Confirme sua senha"
                                variant="outlined"
                                type="password"
                                margin="normal"
                                onChange={({ target }) =>
                                    valueInput(target, "confirmaSenha")
                                }
                            />
                            <CardActions>
                                <FormControl>
                                    <RadioGroup
                                        aria-labelledby="demo-controlled-radio-buttons-group"
                                        name="controlled-radio-buttons-group"
                                    >
                                        <FormControlLabel
                                            control={<Radio />}
                                            label="Aceito os termos de uso e politica de privacidade"
                                        />
                                    </RadioGroup>
                                </FormControl>
                                <Button
                                    variant="contained"
                                    type="submit"
                                    onClick={addUser}
                                >
                                    Cadastrar
                                </Button>
                            </CardActions>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <CardMedia component="img" width={100} image={img} />
                </Grid>
            </Grid>
        </Container>
    );
}

export default Cadastro;
