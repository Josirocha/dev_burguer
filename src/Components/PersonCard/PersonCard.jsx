import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  //   Icon,
  //   Typography,
} from "@mui/material";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import GitHubIcon from "@mui/icons-material/GitHub";
import React from "react";

const PersonCard = ({ img, name, description }) => {
  return (
    <>
      <Card>
        <CardMedia component="img" height="280" image={img} />

        <CardContent>
          <h3> {name}</h3>
          <p>{description}</p>
        </CardContent>

        <CardActions></CardActions>
      </Card>
    </>
  );
};

export default PersonCard;
