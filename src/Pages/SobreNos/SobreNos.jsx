import React from "react";
import Box from "@mui/material/Box";
import PersonCard from "../../Components/PersonCard/PersonCard";
import alonso from "../../assets/images/alonso.jpg";
import jiu from "../../assets/images/jiulie.jpg";
import josi from "../../assets/images/josi.jpg";
import will from "../../assets/images/will.jpg";
import S from "./SobreNos.module.css";

const SobreNos = () => {
    return (
        <>
            <h2 className={S.title}>Conheça nossos burguer developers:</h2>
            <Box
                sx={{
                    py: 2,
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: 3,
                    marginTop: 5,
                }}
            >
                <PersonCard
                    img={alonso}
                    name={"Alonso Estevam"}
                    description={
                        "Tem a mesma idade e megalomania que o JavaScript, por isso, está em migração de carreira da Antropologia e teimou que quer ser Desenvolvedor Full Stack. É cearense e ama tomar sol enquanto anda de bicicleta."
                    }
                    urlLinkedIn={"https://www.linkedin.com/in/alonso-estevam"}
                    urlGithub={"https://github.com/alonso-estevam"}
                />
                <PersonCard
                    img={jiu}
                    name={"Jiulie Vitória"}
                    description={
                        "22 anos, Desenvolvedora FrontEnd, mãe e futura pedagoga. Apaixonada em descobrir coisas novas, encontrou na programação um desafio contínuo. Em seu momento de lazer, gosta de ler romances e ouvir músicas sobre amor não correspondido."
                    }
                    urlLinkedIn={"https://www.linkedin.com/in/jiulie-vitoria/"}
                    urlGithub={"https://github.com/JiulieVitoria"}
                />
                <PersonCard
                    img={josi}
                    name={"Josiane Rocha"}
                    description={
                        "29 anos, Desenvolvedora Frontend, mãe de gatos. Curiosa desde sempre, ama grandes desafios, aprender coisas novas e compartilhar conhecimento. Nas horas vagas tenta se arriscar nas artes, ler um bom livro e ver filmes da Disney."
                    }
                    urlLinkedIn={
                        "https://www.linkedin.com/in/josiane-r-s-lima-santos-10202971/"
                    }
                    urlGithub={"https://github.com/Josirocha"}
                />
                <PersonCard
                    img={will}
                    name={"Willian Carvalho"}
                    description={
                        "22 anos, ex-concurseiro, fera em raciocínio lógico e regra de três composta. É graduando em Química, mas prefere o lado back-end da força."
                    }
                    urlLinkedIn={"https://www.linkedin.com/in/willcrvlh/"}
                    urlGithub={"https://github.com/willcrvlh"}
                />
            </Box>
        </>
    );
};

export default SobreNos;
