import React from 'react'
import {Button, TextField} from '@mui/material'
import S from './Cadastro.module.css'
function Cadastro() {
  return (
    <form action="" className={S.form}>
      <TextField id="Nome" label="Nome" variant="outlined" />
      <TextField id="cpf" label="CPF" variant="outlined" />
      <TextField id="cep" label="CEP" variant="outlined" />
      <TextField id="tel" label="Telefone" variant="outlined" />
      <TextField id="email" label="E-mail" variant="outlined" />
      <TextField id="senha" label="Senha" variant="outlined" type="password"/>
      <Button variant="contained">Cadastrar</Button>
    </form>
  )
}

export default Cadastro;