import {
    Modal,
    Card,
    CardContent,
    Typography,
    CardActions,
    Button,
} from "@mui/material";
import React from "react";
import { toast } from "react-toastify";
import { deleteProduto } from "../../services/api";

const ModalDelete = ({ open, onClose, id, onDelete }) => {
    function handleSubmit() {
        const result = deleteCategory();
        onClose(result);
    }

    async function deleteCategory() {
        console.log(id);
        try {
            await deleteProduto('id');
            onDelete();
            toast.success('Deletado com sucesso')
        } catch (error) {
            toast.error('não foi possivel deletar o produto, tente novamente mais tarde')
        }
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
                        Excluir Produto
                    </Typography>

                    <Typography gutterBottom variant="p" component="div" mb={3}>
                        Você tem certeza que deseja excluir esse produto? 
                    </Typography>
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
                        Excluir
                    </Button>
                </CardActions>
            </Card>
        </Modal>
    );
};

export default ModalDelete;
