import React from "react";
import Box from "@mui/material/Box";

import S from "./SobreNos.module.css";

const SobreNos = () => {
  return (
    <>
      <h3 className={S.title}>Conheça nossos burguer developers:</h3>
      <Box
        sx={{
          width: 300,
          height: 300,
          backgroundColor: "primary",
          "&:hover": {
            backgroundColor: "secondary",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      />
    </>
  );
};

export default SobreNos;
