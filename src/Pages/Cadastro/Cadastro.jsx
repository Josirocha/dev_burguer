
import React from 'react'
import Header from '../../Components/Common/Header/Header'
import {Button, TextField} from '@mui/material'
import S from './Cadastro.module.css'
function Cadastro() {
  return (
    <form action="" classname={S.form}>
      <TextField id="outlined-basic" label="Nome" variant="outlined" />
      <TextField id="outlined-basic" label="CPF" variant="outlined" />
      <TextField id="outlined-basic" label="CEP" variant="outlined" />
      <TextField id="outlined-basic" label="Telefone" variant="outlined" />
      <TextField id="outlined-basic" label="E-mail" variant="outlined" />
      <TextField id="outlined-basic" label="Senha" variant="outlined" type="password"/>
      <Button variant="contained">Cadastrar</Button>
    </form>
  )
}

export default Cadastro;
