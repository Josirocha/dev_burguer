import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import React from "react";

const CardCardapio = ({ img, name, ingredientes, valor }) => {
    return (
        <Card
            sx={{
                maxWidth: 345
            }}
        >
            <CardMedia CardMedia component="img" height="280" image={img} />

            <CardContent>
                <Typography gutterBottom variante="h5" component="div">
                    {name}
                </Typography>

                <Typography variant="body2">{ingredientes}</Typography>
                <Typography variant="p">{valor}</Typography>
            </CardContent>
            <CardActions>
                <Button startIcon={<AddShoppingCartIcon />}>Comprar</Button>
            </CardActions>
        </Card>
    );
};

export default CardCardapio;
