import { IconButton } from "@mui/material";
import { NavbarContainer, NavbarHeader } from "../../styles/navbar";
import MenuIcon from "@mui/icons-material/Menu"
import SearchIcon from "@mui/icons-material/Search"
import Actions from "./actions";

export default function NavbarMobile({matches}) {
    return (
        <NavbarContainer>
            <IconButton>
                <MenuIcon/>
            </IconButton>
            <NavbarHeader textAlign={"center"} variant="h4">
                QuickKart
            </NavbarHeader>
            <IconButton>
                <SearchIcon/>
            </IconButton>
            <Actions matches={matches}/>
        </NavbarContainer>
    )
}
