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
import {validate} from "../../Utils/validacao"

function Cadastro() {
    const [usuario, setUsuario]= useState({
        nome:'',
        cpf: '',
        senha:'',
        email:'',
        validaSenha: ''
    })

    const[status, setStatus] = useState({
        type:'',
        msg: ''
    });

    const valueInput = e=>{
        setUsuario({...usuario, [e.target.nome]: [e.target.value] })
    }
    const addUser = async e => {
        e.preventDefault();
    
        if(validate() != true) return;
    
        const saveDataForm = true;

        if (saveDataForm) {
          setStatus({
            type: 'success',
            msg: "Usuário cadastrado com sucesso!"
          });
        } else {
          setStatus({
            type: 'error',
            msg: "Erro: Usuário não cadastrado com sucesso!"
          });
        }
      }
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
                    {status.type === 'success' ?<p style={{ color: "green" }}>{status.msg}</p> : ""}
                    {status.type === 'error' ?<p style={{ color: "red" }}>{status.msg}</p> : ""}
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
                            onSubmit={valueInput}
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
                            onSubmit={valueInput}
                        />
                        <TextField
                            id="senha"
                            label="Senha"
                            variant="outlined"
                            type="password"
                            fullWidth
                            margin="normal"
                            placeholder="Digite uma senha entre 8 e 15 caracteres"
                            onSubmit={valueInput}
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
                            <Button variant="contained" type="submit" onClick={validate}>Cadastrar</Button>
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
