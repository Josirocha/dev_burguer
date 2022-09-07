import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { TextField, Grid, InputAdornment } from "@mui/material";
import { styled } from "@mui/system";

const StyledMuiTextField = styled(TextField)`
    .MuiInputBase-formControl {
        border-radius: 50px;
        padding-left: 20px;
    }
`;

const Search = () => {
    return (
        <Grid container justifyContent="center">
            <Grid xs={12} md={6}>
                <StyledMuiTextField
                    fullWidth
                    color="primary"
                    focused
                    placeholder="Pesquise aqui"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />
            </Grid>
        </Grid>
    );
};

export default Search;
