import React from "react";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from "@mui/material";
import img from "../../assets/images/cadastro.svg";
import S from './Cadastro.module.css'
function Cadastro() {
    return (
        <div className={S.container}>
                <h2>Cadastre-se aqui</h2>
            <div className={S.form}>
                <Card
                    sx={{
                        width: "280",
                        height: "80",
                        padding: "100px 16px",
                        margin: "16px",
                        marginTop: "20px",
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <CardContent
                        sx={{ display: "flex", flexDirection: "column" }}
                    >
                        <TextField
                            id="Nome"
                            label="Nome"
                            variant="outlined"
                            type="text"
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            id="cpf"
                            label="CPF"
                            variant="outlined"
                            type="text"
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            id="cep"
                            label="CEP"
                            variant="outlined"
                            type="text"
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            id="tel"
                            label="Telefone"
                            variant="outlined"
                            type="text"
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            id="email"
                            label="E-mail"
                            variant="outlined"
                            type="text"
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            id="senha"
                            label="Senha"
                            variant="outlined"
                            type="password"
                            fullWidth
                            margin="normal"
                        />
                        <CardActions>
                            <Button variant="contained">Cadastrar</Button>
                        </CardActions>
                    </CardContent>
                </Card>
            </div>
            <div className={S.svg}>
                <img src={img} alt="" />
            </div>
        </div>
    );
}

export default Cadastro;
