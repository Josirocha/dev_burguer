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
} from "@mui/material";
import img from "../../assets/images/cadastro.svg";
import S from "./Cadastro.module.css";
import { useState } from "react";
import {
    validaCampoVazio,
    validaEmail,
    validaSenha,
    validaSenhaIgual,
} from "../../Utils/validacao";
import { toast } from "react-toastify";


function Cadastro() {
    const [usuario, setUsuario] = useState({
        nome: "",
        cpf: "",
        cep: "",
        telefone: "",
        email: "",
        senha: "",
        confirmaSenha: "",
    });

    const [status, setStatus] = useState({
        type: "",
        msg: "",
    });

    const valueInput = (target, key) => {
        setUsuario({ ...usuario, [key]: target.value });
    };
    const addUser = async (e) => {
        e.preventDefault();
        console.log(usuario);
        if (
            !validaCampoVazio(usuario) &&
            validaEmail(usuario.email) &&
            validaSenha(usuario.senha) &&
            validaSenhaIgual(usuario.senha, usuario.confirmaSenha)
        ) {
            toast.success("usuário cadastrado com sucesso");
        } else {
            toast.error("usuário não cadastrado");
        }
    };
    return (
        <div className={S.container}>
            <div className={S.form}>
                <Card
                    sx={{
                        width: "350",
                        padding: "10px 16px",
                        height: "80",
                        margin: "16px",
                        marginTop: "90px",
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <CardContent
                        onSubmit={addUser}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            width: "300",
                            height: "800",
                        }}
                    >
                        <h2 className={S.titulo}>Cadastre-se aqui</h2>
                        <TextField
                            id="Nome"
                            label="Nome"
                            variant="outlined"
                            type="text"
                            fullWidth
                            margin="normal"
                            onChange={({ target }) =>
                                valueInput(target, "nome")
                            }
                        />
                        <TextField
                            id="cpf"
                            label="CPF"
                            variant="outlined"
                            type="text"
                            fullWidth
                            margin="normal"
                            onChange={({ target }) => valueInput(target, "cpf")}
                        />
                        <TextField
                            id="cep"
                            label="CEP"
                            variant="outlined"
                            type="text"
                            fullWidth
                            margin="normal"
                            onChange={({ target }) => valueInput(target, "cep")}
                        />
                        <TextField
                            id="tel"
                            label="Telefone"
                            variant="outlined"
                            type="text"
                            fullWidth
                            margin="normal"
                            onChange={({ target }) =>
                                valueInput(target, "telefone")
                            }
                        />
                        <TextField
                            id="email"
                            label="E-mail"
                            variant="outlined"
                            type="text"
                            fullWidth
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
                            fullWidth
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
                            fullWidth
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
            </div>
            <div className={S.svg}>
                <img src={img} />
            </div>
        </div>
    );
}

export default Cadastro;
