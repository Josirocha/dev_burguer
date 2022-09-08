import { Box, Button, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import CardCardapio from "../../Components/CardCardapio/CardCardapio";
import { getProdutos } from "../../services/api.js";
import Search from "../../Components/Search/Search";
import CreateProduct from "../../Components/CreateProduct/CreateProduct";

const Cardapio = () => {
    const [produtos, setProdutos] = useState([]);
    const [produtosFiltrados, setProdutosFiltrados] = useState([]);

    async function requisicao() {
        const response = await getProdutos();
        setProdutos(response);
        setProdutosFiltrados(response);
    }

    useEffect(() => {
        requisicao();
    }, []);

    function handleSearch(data) {
        const termo = data.target.value;
        const itemsFiltrados = produtos.filter((produtos) =>
            produtos.nome.toLowerCase().includes(termo)
        );
        setProdutosFiltrados(itemsFiltrados);
    }

    return (
        <Box
            sx={{
                py: 2,
                gap: 3,
                padding: "120px 16px",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 3,
                    justifyContent: "center",
                }}
            >
                <Grid container justifyContent="center" gap="15px">
                    <Grid xs={12} md={6} item>
                        <Search onChange={handleSearch} />
                    </Grid>

                    <CreateProduct />
                </Grid>

                {produtosFiltrados.map((item, index) => {
                    return (
                        <CardCardapio
                            key={index}
                            img={item.url}
                            name={item.nome}
                            ingredientes={item.ingredientes}
                            valor={item.preço}
                        />
                    );
                })}
            </Box>
        </Box>
    );
};

export default Cardapio;
