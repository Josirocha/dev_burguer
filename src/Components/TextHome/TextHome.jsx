import React from "react";
import style from "./TextHome.module.css";
import bg from "../../assets/images/hamburger-animate.svg";
import { Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";

const TextHome = () => {
    return (
        <>
            <div className={style.container}>
                <div className={style.containerText}>
                    <p className={style.textPrincipal}>
                        O cardápio tá bugado? Usa o DevBurguer!
                    </p>
                    <p className={style.descrição}>
                        Imagine que você faz hambúgueres deliciosos e de tanto
                        receber elogios sobre suas habilidades culinárias você
                        resolve abrir um negócio.
                        <br /> <br />
                        Porém, a pandemia mudou a forma como a gente se
                        alimenta, e os aplicativos de comida que existem por aí
                        aos montes são a prova disso.
                        <br />
                        <br />
                        Não adianta fazer o melhor hambúguer do mundo se sua
                        clientela não tiver fácil acesso a ele através da tela
                        de um computador ou smartphone, não é mesmo?
                        <br />
                        <br />
                        Então, diante do mar de concorrência batendo à sua
                        porta, você sente sua batata assar e procura rapidamente
                        algum software pomposo que te prometeu mundos e fundos
                        para alavancar suas vendas.
                    </p>
                    <Stack
                        spacing={2}
                        direction="row"
                        className={style.containerButtons}
                    >
                        <Link to="/Cadastro" style={{ border: "none" }}>
                            <Button variant="contained">Cadastre-se</Button>
                        </Link>
                        <Link to="/Login" style={{ border: "none" }}>
                            <Button variant="outlined">Entrar</Button>
                        </Link>
                    </Stack>
                </div>
                <div className={style.containerBg}>
                    <img
                        className={style.imagem}
                        src={bg}
                        alt="animação suave na vertical de um hambúrguer"
                    />
                </div>
            </div>
        </>
    );
};

export default TextHome;
