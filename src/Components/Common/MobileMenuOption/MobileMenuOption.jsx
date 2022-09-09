import { IconButton, Menu, Box } from "@mui/material";
import React, { useState } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MenuOptions from "../MenuOptions/MenuOptions";

const MobileMenuOption = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const [open, setOpen] = useState();

    function handleClose() {
        setOpen(false);
    }

    function handleClick(event) {
        setAnchorEl(event.currentTarget);

        setOpen(!open);
    }

    return (
        <>
            <IconButton
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
            >
                <MenuOutlinedIcon color='secondary' />
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                }}
            >
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <MenuOptions color="primary"/>
                </Box>
            </Menu>
        </>
    );
};

export default MobileMenuOption;
