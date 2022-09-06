import { Box } from "@mui/material";
import React from "react";
import CardCardapio from "../../Components/CardCardapio/CardCardapio";

const Cardapio = () => {
    return (
        <Box
            sx={{
                py: 2,
                display: "flex",
                flexWrap: "wrap",
                gap: 3,
                padding: "80px 16px",
            }}
        >
            <CardCardapio
                name={"Java Burguer"}
                ingredientes={
                    "5 carnes, 4 ovos, alface, muito bacon, calabresa, tomate, milho, ervilha, cheddar"
                }
            />

            <CardCardapio
                name={"Java Burguer"}
                ingredientes={
                    "5 carnes, 4 ovos, alface, muito bacon, calabresa, tomate, milho, ervilha, cheddar"
                }
            />
        </Box>
    );
};

export default Cardapio;
