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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reprehenderit explicabo illo in quaerat,
                    </p>
                    <p className={style.descrição}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quia eum quae quod, eius ad saepe quasi obcaecati
                        exercitationem error? Culpa rem aut libero fugiat id.
                        Animi reiciendis eaque omnis porro. Lorem ipsum dolor
                        sit amet, consectetur adipisicing elit. Veritatis beatae
                        facilis ullam incidunt minima quam sint aliquam
                        repudiandae, inventore recusandae. Voluptatem, quasi
                        sunt! Tenetur nisi officiis, facilis unde officia eos?
                    </p>
                </div>
                <div className={style.containerBg}>
                    <img
                        className={style.imagem}
                        src={bg}
                        alt="animação suave na vertical de um hambúrguer"
                    />
                </div>
            </div>
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
        </>
    );
};

export default TextHome;
