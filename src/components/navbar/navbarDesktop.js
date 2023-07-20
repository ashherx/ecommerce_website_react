import {
  Box,
  Button,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  ActionsIconsContainerDesktop,
  ActionsIconsContainerMobile,
  NavbarContainer,
  NavbarHeader,
  NavbarList,
} from "../../styles/navbar";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./actions";

import { NavLink } from "react-router-dom";
import { Colors } from "../../styles/theme";
import { useNavigate } from "react-router-dom";

export default function NavbarDesktop({ matches }) {
  const navigate = useNavigate();
  return (
    <NavbarContainer>
      <NavbarHeader onClick={() => navigate("/")}>QuickKart</NavbarHeader>

      <NavbarList type="row">
        <ListItemText
          primary="Home"
          sx={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
        />
        <ListItemText
          primary="Catalog"
          sx={{ cursor: "pointer" }}
          onClick={() => navigate("/catalog")}
        />
        <ListItemText
          primary="About us"
          sx={{ cursor: "pointer" }}
          onClick={() => navigate("/about")}
        />
        <ListItemText
          primary="Contact us"
          sx={{ cursor: "pointer" }}
          onClick={() => navigate("/contact")}
        />
        {/* <ListItemButton>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
        </ListItemButton> */}
      </NavbarList>
      <Actions matches={matches} />
    </NavbarContainer>
  );
}
