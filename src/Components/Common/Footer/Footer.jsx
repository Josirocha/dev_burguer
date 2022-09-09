import React from "react";
import style from "./Footer.module.css";
import logo from "../../../assets/icons/burguer-icon.ico";
import wpp from "../../../assets/icons/whatsapp.svg";
import fb from "../../../assets/icons/facebook.svg";
import tt from "../../../assets/icons/twitter.svg";
import insta from "../../../assets/icons/instagram.svg";

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.logoBox}>
                <img src={logo} className={style.logo} />
            </div>
            <br />
            <hr />
            <div className={style.flex}>
                <div className={style.cepContainer}>
                    <p className={style.linhaUm}>
                        DevBurguer, 2022 - Todos os direitos reservados -
                        Política de privacidade
                    </p>
                    <p className={style.linhaDois}>
                        Rua Coronel Paulo Malta Rezende, 121 - Barra da Tijuca -
                        Rio de Janeiro - RJ
                    </p>
                </div>

                <div className={style.redesContainer}>
                    <div className={style.divImg}>
                        <img
                            src={wpp}
                            alt="Logo do Whatsapp"
                            className={style.icon}
                        />
                        (21)99634-8694
                    </div>
                    <div className={style.divImg}>
                        <img
                            src={insta}
                            alt="Logo do Instagram"
                            className={style.icon}
                        />
                        @DevBurguer
                    </div>
                    <div className={style.divImg}>
                        <img
                            src={tt}
                            alt="Logo do Twitter"
                            className={style.icon}
                        />
                        @DevBurguer
                    </div>
                    <div className={style.divImg}>
                        <img
                            src={fb}
                            alt="Logo do Facebook"
                            className={style.icon}
                        />
                        Dev Burguer
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
