import { Box, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import CardCardapio from "../../Components/CardCardapio/CardCardapio";
import { atualizaProdutos, getProdutos } from "../../services/api.js";
import Search from "../../Components/Search/Search";
import CreateProduct from "../../Components/CreateProduct/CreateProduct";
import ModalDelete from "../../Components/ModalDelete/ModalDelete";
import ModalProduct from "../../Components/ModalProduct/ModalProduct";
import { toast } from "react-toastify";

const Cardapio = () => {
    const [produtos, setProdutos] = useState([]);
    const [produtosFiltrados, setProdutosFiltrados] = useState([]);
    const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
    const [isModalProductOpen, setIsModalProductOpen] = useState(false);
    const [activeId, setActiveId] = useState();
    const [activeValues, setActiveValues] = useState();

    async function requisicao() {
        try {
            const response = await getProdutos();
            setProdutos(response);
            setProdutosFiltrados(response);
        } catch (error) {
            toast.error("Não foi possivel obter a lista de produtos");
        }
    }

    useEffect(() => {
        requisicao();
    }, []);

    useEffect(() => {
        if (!isModalDeleteOpen) {
            setActiveId(undefined);
            setActiveValues(undefined);
        }
    }, [isModalProductOpen]);

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

    function handleProductEdit(values) {
        setActiveId(values.id);
        setActiveValues(values);
        setIsModalProductOpen(true);
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

                        <CreateProduct
                            onClick={() => setIsModalProductOpen(true)}
                        />
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
                                onEditClick={handleProductEdit}
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
                values={activeValues}
                open={isModalProductOpen}
                onClose={() => setIsModalProductOpen(false)}
                onSuccess={() => {
                    console.log("sdfsdfsdf");
                    requisicao();
                }}
            />
        </>
    );
};

export default Cardapio;
