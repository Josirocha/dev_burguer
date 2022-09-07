import React from "react";
import style from "./TextHome.module.css";
import bg from "../../assets/images/hamburger-animate.svg";

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
                        Animi reiciendis eaque omnis porro.
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
        </>
    );
};

export default TextHome;
