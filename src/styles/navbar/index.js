import { Box, List, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../theme";
import "@fontsource/montez";
import { lighten } from "polished";

// conatiner
export const NavbarContainer = styled(Box)(() => ({
  display: "flex",
  marginTop: 4,
  justifyContent: "center",
  alignItems: "center",
  padding: "2px 8px",
}));

// header

export const NavbarHeader = styled(Typography)(() => ({
  padding: "4px",
  flexGrow: 1,
  fontFamily: '"Montez", "cursive"',
  fontSize: "3em",
  color: Colors.secondary,
  cursor: "pointer",
}));

// list
export const NavbarList = styled(List)(({ type }) => ({
  display: type === "row" ? "flex" : "block",
  flexGrow: 3,
  justifyContent: "center",
  alignItems: "center",
}));

export const ActionsIconsContainerDesktop = styled(Box)(() => ({
  flexGrow: 0,
}));

export const ActionsIconsContainerMobile = styled(Box)(() => ({
  display: "flex",
  background: Colors.shaft,
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100%",
  alignItems: "center",
  zIndex: 99,
  borderTop: `1px solid ${Colors.border}`
}));
