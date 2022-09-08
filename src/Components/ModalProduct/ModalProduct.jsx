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

const ModalProduct = ({ open, onClose, values, title, id }) => {
    const [nome, setNome] = useState(values?.nome);
    const [ingredientes, setIngredientes] = useState(values?.ingredientes);
    const [url, setUrl] = useState(values?.url);
    const [preço, setPreço] = useState(values?.preço);

    function handleSubmit() {
        const result = saveCategory();
        onClose(result);
    }

    function saveCategory() {
        console.log("asdfghj");
    }

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
                        {title}
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
