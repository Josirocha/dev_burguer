import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
} from "@mui/material";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import React from "react";

const CardCardapio = ({ img, name, ingredientes, valor, onDeleteClick, id }) => {
    return (
        <Card
            sx={{
                maxWidth: 345,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
            }}
        >
            <div>
                <CardMedia component="img" height="280" image={img} />

                <CardContent>
                    <Typography gutterBottom variante="h5" component="div">
                        {name}
                    </Typography>

                    <Typography variant="body2">{ingredientes}</Typography>
                    <Typography variant="p">{valor}</Typography>
                </CardContent>
            </div>

            <CardActions
                sx={{ display: "flex", justifyContent: "space-between" }}
            >
                <Button startIcon={<CreateOutlinedIcon />}>Editar</Button>
                <Button
                    onClick={() => onDeleteClick(id)}
                    startIcon={<DeleteOutlineOutlinedIcon />}
                >
                    Deletar
                </Button>
            </CardActions>
        </Card>
    );
};

export default CardCardapio;
