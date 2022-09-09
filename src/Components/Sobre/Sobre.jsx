import React from "react";
import style from "./Sobre.module.css";
import hamburgueria from "../../assets/images/hamburgueria.jpg";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Sobre = () => {
    return (
        <div className={style.sobreContainer}>
            <div className={style.textContainer}>
                <div className={style.textBox}>
                    <p className={style.title}> Quem somos? </p>
                    <p className={style.descricao}>
                        Tudo o que você queria era apenas gerenciar seu humilde
                        - mas imbatível - cardápio de hambúgueres com facilidade
                        e segurança.
                        <br />
                        <br />
                        Mas, quando você, dono ou dona de hamburgueria,
                        finalmente adere aos aplicativos, se depara com um mundo
                        novo e assustador, com funcionalidades complexas e
                        difíceis de entender.
                        <br />
                        <br /> Entretanto, nós da DevBurguer temos uma excelente
                        notícia para você, pessoa empreendedora. Porque se você
                        reconheceu na história acima, também vai se identificar
                        com o nosso maravilhoso gerenciador de cardápios.
                        <br />
                        <br />
                        Tenha à mão um cardápio personalizado on-line, com as
                        fotos e as descrições dos produtos da sua hamburgueria!
                    </p>
                    <div className={style.botao}>
                        <Link to="/Sobre" style={{ border: "none" }}>
                            <Button variant="contained">Saiba mais!</Button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={style.hamburguerContainer}>
                <img src={hamburgueria} className={style.hamburguer} />
            </div>
        </div>
    );
};

export default Sobre;
