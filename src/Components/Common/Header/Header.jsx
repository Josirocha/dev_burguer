import { AppBar, Toolbar, Avatar } from "@mui/material";
import Burger from "../../../assets/images/burger.png";
import { Box } from "@mui/system";
import MobileMenuOption from "../MobileMenuOption/MobileMenuOption";
import MenuOptions from "../MenuOptions/MenuOptions";

const Header = () => {
    return (
        <AppBar>
            <Toolbar>
                <Box
                    sx={{
                        minWidth: "200px",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    <Avatar
                        src={Burger}
                        alt="logo"
                        variant="square"
                        sx={{
                            marginRight: "16px",
                        }}
                    />
                    <h3>Dev Burguer</h3>
                </Box>
                <Box
                    sx={{
                        justifyContent: "flex-end",
                        width: "100%",
                        display: { xs: "none", md: "flex" },
                    }}
                >
                    <MenuOptions color="secondary" />
                </Box>
                <Box
                    sx={{
                        justifyContent: "flex-end",
                        width: "100%",
                        display: { xs: "flex", md: "none" },
                    }}
                >
                    <MobileMenuOption />
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
