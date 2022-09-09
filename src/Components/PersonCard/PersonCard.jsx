import {
    Box,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    IconButton,
    Typography,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import React from "react";

const PersonCard = ({ img, name, description, urlLinkedIn, urlGithub }) => {
    return (
        <>
            <Card
                sx={{
                    width: 290,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                }}
            >
                <Box>
                    <CardMedia component="img" height="200" image={img} />
                    <CardContent heigth="50">
                        <Typography variant="h5" fontWeight={700} mb={2}>
                            {name}
                        </Typography>
                        <Typography variant="body2">{description}</Typography>
                    </CardContent>
                </Box>

                <CardActions
                    sx={{ display: "flex", justifyContent: "space-around" }}
                >
                    <IconButton
                        color="primary"
                        onClick={() => window.location.replace(urlLinkedIn)}
                    >
                        <LinkedInIcon />
                    </IconButton>
                    <IconButton
                        color="primary"
                        onClick={() => window.location.replace(urlGithub)}
                    >
                        <GitHubIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </>
    );
};

export default PersonCard;
