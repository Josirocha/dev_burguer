import { Box, Button, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import CardCardapio from "../../Components/CardCardapio/CardCardapio";
import { getProdutos } from "../../services/api.js";
import Search from "../../Components/Search/Search";
import CreateNewFolderOutlinedIcon from "@mui/icons-material/CreateNewFolderOutlined";
import CreateProduct from "../../Components/CreateProduct/CreateProduct";

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
                        <Search />
                    </Grid>

                    <CreateProduct />

                </Grid>

                {produtos.map((item, index) => {
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
