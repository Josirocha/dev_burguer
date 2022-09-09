import React from "react";
import style from "./Cardapio.module.css";
import hamburguer from "../../assets/images/hamburguer.png";
import { Button } from "@mui/material";
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
                        <Link to="/Login" style={{ border: "none" }}>
                            <Button variant="contained">
                                Acesse nosso cardápio
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cardapio;
