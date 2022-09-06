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
        }}
      >
        <PersonCard
          img={alonso}
          name={"Alonso Estevam"}
          description={"Fã de pastel"}
        />
        <PersonCard
          img={jiu}
          name={"Jiulie Vitória"}
          description={"Franja retinha"}
        />
        <PersonCard
          img={josi}
          name={"Josiane Rocha"}
          description={"Salvadora de api"}
        />
        <PersonCard
          img={will}
          name={"Willian Carvalho"}
          description={"Irmão gêmeo"}
        />
      </Box>
    </>
  );
};

export default SobreNos;
