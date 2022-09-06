import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import CardCardapio from "../../Components/CardCardapio/CardCardapio";
import { getProdutos } from "../../services/api.js";

const Cardapio = () => {
    const [produtos, setProdutos] = useState([]);

    async function requisicao() {
        const response = await getProdutos();
        setProdutos(response);
    }

    useEffect(() => {
        requisicao();
    }, []);

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
            {produtos.map((item, index) => {
                return (
                    <CardCardapio
                        key={index}
                        img={item.url}
                        name={item.nome} 
                        ingredientes={item.ingredientes}
                        valor={item.preço}/>
                );
            })}
        </Box>
    );
};

export default Cardapio;
