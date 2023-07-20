import {
  Avatar,
  Badge,
  Divider,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import {
  ActionsIconsContainerDesktop,
  ActionsIconsContainerMobile,
  NavbarList,
} from "../../styles/navbar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Colors } from "../../styles/theme";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router-dom";

export default function Actions({ matches }) {
  const Component = matches
    ? ActionsIconsContainerMobile
    : ActionsIconsContainerDesktop;

  const navigate = useNavigate();

  return (
    <Component>
      <NavbarList type="row">
        <ListItemButton sx={{ justifyContent: "center" }}>
          <ListItemIcon
            onClick={() => navigate("/cart")}
            sx={{
              display: "flex",
              justifyContent: "center",
              color: matches ? "white" : Colors.dim_grey,
            }}
          >
            <Badge
              badgeContent={useSelector((state) => state.user.cart.length)}
              max={999}
              color="primary"
              sx={{
                ".MuiBadge-badge": { color: Colors.white },
              }}
            >
              <ShoppingCartIcon />
            </Badge>
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
        <ListItemButton sx={{ justifyContent: "center" }}>
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: matches ? "white" : Colors.dim_grey,
            }}
          >
            <FavoriteIcon />
          </ListItemIcon>
        </ListItemButton>
        <Divider orientation="vertical" flexItem />
        <ListItemButton sx={{ justifyContent: "center" }}>
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: matches ? "white" : Colors.dim_grey,
            }}
          >
            <Avatar src="../../../images/profile/profile_pic.jpg" />
            {/* <PersonIcon /> */}
          </ListItemIcon>
        </ListItemButton>
      </NavbarList>
    </Component>
  );
}
