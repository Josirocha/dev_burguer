import {
    Modal,
    Card,
    CardContent,
    Typography,
    CardActions,
    Button,
    TextField,
    Box,
} from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { atualizaProdutos, postProdutos } from "../../services/api";

const ModalProduct = ({ open, onClose, onSuccess, values, id }) => {
    const [nome, setNome] = useState('');
    const [ingredientes, setIngredientes] = useState('');
    const [url, setUrl] = useState('');
    const [preço, setPreço] = useState('');

    function handleSubmit() {
        if (values) saveProduct();
        else createProduct();
    }

    async function saveProduct() {
        try {
            toast.success("produto atualizado com sucesso");
            await atualizaProdutos(id, {
                nome,
                ingredientes,
                url,
                preço,
            });
            onSuccess();
            onClose();
        } catch (error) {
            toast.error("deu ruim");
        }
    }

    async function createProduct() {
        try {
            toast.success("produto criado com sucesso");
            await postProdutos({
                nome,
                ingredientes,
                url,
                preço,
            });
            onSuccess();
            onClose();
        } catch (error) {
            toast.error("deu ruim");
        }
    }

    useEffect(() => {
        setNome(values?.name);
        setIngredientes(values?.ingredientes);
        setUrl(values?.img);
        setPreço(values?.valor);
    }, [values]);

    return (
        <Modal
            disableEnforceFocus
            disableAutoFocus
            open={open}
            sx={{
                display: "flex",
                p: 1,
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Card
                sx={{
                    maxWidth: 345,
                    width: "100%",
                    backgroundColor: "#eff0f3",
                }}
            >
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        mb={3}
                    >
                        {values ? "Atualizar Produto" : "Cadastrar Produto"}
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 2,
                        }}
                    >
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="url da imagem"
                            color="primary"
                            value={url}
                            onChange={(event) => setUrl(event.target.value)}
                        />
                        <TextField
                            fullWidth
                            variant="outlined"
                            label="nome do produto"
                            color="primary"
                            value={nome}
                            onChange={(event) => setNome(event.target.value)}
                        />
                        <TextField
                            fullWidth
                            multiline
                            rows={4}
                            variant="outlined"
                            label="descrição"
                            color="primary"
                            value={ingredientes}
                            onChange={(event) =>
                                setIngredientes(event.target.value)
                            }
                        />

                        <TextField
                            fullWidth
                            variant="outlined"
                            label="preço"
                            color="primary"
                            value={preço}
                            onChange={(event) => setPreço(event.target.value)}
                        />
                    </Box>
                </CardContent>

                <CardActions
                    sx={{
                        justifyContent: "space-between",
                    }}
                >
                    <Button color="primary" onClick={() => onClose()}>
                        Fechar
                    </Button>

                    <Button
                        color="primary"
                        variant="contained"
                        sx={{ color: "#eff0f3" }}
                        onClick={handleSubmit}
                    >
                        {values ? "Atualizar" : "Cadastrar"}
                    </Button>
                </CardActions>
            </Card>
        </Modal>
    );
};

export default ModalProduct;
