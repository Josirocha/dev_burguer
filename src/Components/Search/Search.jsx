import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { TextField, InputAdornment } from "@mui/material";
import { styled } from "@mui/system";

const StyledMuiTextField = styled(TextField)`
    .MuiInputBase-formControl {
        border-radius: 50px;
        padding-left: 20px;
    }
`;

const Search = ({ onChange }) => {
    return (
        <StyledMuiTextField
            fullWidth
            onChange={onChange}
            color="primary"
            size="small"
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
    );
};

export default Search;
