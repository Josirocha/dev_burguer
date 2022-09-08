import React from "react";
import CreateNewFolderOutlinedIcon from "@mui/icons-material/CreateNewFolderOutlined";
import { Paper, Typography } from "@mui/material";

const CreateProduct = () => {
    return (
        <Paper
            elevation={3}
            sx={{
                width: "180px",
                borderRadius: "16px",
                padding: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#f2310c",
                cursor: "pointer",
                height: "40px"
            }}
        >
            <CreateNewFolderOutlinedIcon color="secondary" size={50} />
            <Typography variant="p" sx={{ ml: 2 }} color="secondary">
                Novo Produto
            </Typography>
        </Paper>
    );
};

export default CreateProduct;