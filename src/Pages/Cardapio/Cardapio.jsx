import { Box, Button, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import CardCardapio from "../../Components/CardCardapio/CardCardapio";
import { getProdutos } from "../../services/api.js";
import Search from "../../Components/Search/Search";
import CreateProduct from "../../Components/CreateProduct/CreateProduct";
import ModalDelete from "../../Components/ModalDelete/ModalDelete";
import ModalProduct from "../../Components/ModalProduct/ModalProduct";

const Cardapio = () => {
    const [produtos, setProdutos] = useState([]);
    const [produtosFiltrados, setProdutosFiltrados] = useState([]);
    const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
    const [isModalProductOpen, setIsModalProductOpen] = useState(false);
    const [activeId, setActiveId] = useState();

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

    function handleProductDelete(id) {
        setActiveId(id);
        setIsModalDeleteOpen(true);
    }

    return (
        <>
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

                        <CreateProduct onClick={() => setIsModalProductOpen(true)} />
                    </Grid>

                    {produtosFiltrados.map((item, index) => {
                        return (
                            <CardCardapio
                                key={index}
                                id={item._id}
                                img={item.url}
                                name={item.nome}
                                ingredientes={item.ingredientes}
                                valor={item.preço}
                                onDeleteClick={handleProductDelete}
                            />
                        );
                    })}
                </Box>
            </Box>

            <ModalDelete
                id={activeId}
                open={isModalDeleteOpen}
                onClose={() => setIsModalDeleteOpen(false)}
                onDelete={() => requisicao()}
            />

            <ModalProduct
                id={activeId}
                open={isModalProductOpen}
                onClose={() => setIsModalProductOpen(false)}
            />
        </>
    );
};

export default Cardapio;
