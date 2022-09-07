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
    FormLabel,
    RadioGroup,
} from "@mui/material";
import img from "../../assets/images/cadastro.svg";
import S from "./Cadastro.module.css";
function Cadastro() {
    return (
        <div className={S.container}>
            <div className={S.form}>
                <Card
                    sx={{
                        width: "350",
                        height: "80",
                        padding: "10px 16px",
                        margin: "16px",
                        marginTop: "90px",
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <CardContent

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
                        <TextField
                            id="validaSenha"
                            label="Confirme sua senha"
                            variant="outlined"
                            type="password"
                            fullWidth
                            margin="normal"
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
