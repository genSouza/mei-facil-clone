import Link from "next/link";
import { styled } from "../../styles/index";

export const HeaderContainer = styled("header", {
  boxShadow: "0 2px 4px 0 rgb(0 0 0 / 10%)",
  display: "flex",
  position: "fixed",
  zIndex: "9999",
  backgroundColor: "$white",
  width: "100vw",
});

export const NavAreaContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  margin: "0 auto",
  height: "5rem",
});

export const LogoContainer = styled(Link, {
  marginRight: "$22",
});
