import React from "react";
import style from "./Cardapio.module.css";
import hamburguer from "../../assets/images/hamburguer.png";
import { Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Cardapio = () => {
    return (
        <div className={style.cardapioContainer}>
            <div className={style.hamburguerContainer}>
                <img src={hamburguer} className={style.hamburguer} />
            </div>
            <div className={style.textContainter}>
                <div className={style.textBox}>
                    <p className={style.title}>Cardápio</p>
                    <p className={style.descricao}>
                        Nossos hambúrgueres são feitos de forma artesanal,
                        produzidos em nossas próprias hamburguerias, com carne
                        100% angus e com um tempero que só nós temos!
                    </p>
                    <div className={style.botao}>
                        <Stack
                            spacing={2}
                            direction="row"
                            className={style.containerButtons}
                        >
                            <Link to="/Cardapio" style={{ border: "none" }}>
                                <Button variant="contained">Acesse nosso cardápio!</Button>
                            </Link>
                            <Link to="/Cadastro" style={{ border: "none" }}>
                                <Button variant="contained">Gerencie seu próprio cardápio!</Button>
                            </Link>
                        </Stack>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cardapio;
