import { styled } from "../../styles/index";
import Link from "next/link";

export const ListItemWrapper = styled("li", {
  position: "relative",
  fontSize: "$14",
});

export const LinkWrapper = styled(Link, {
  display: "flex",
  alignItems: "center",
  fontSize: "$14",
  padding: ".7rem 1rem",
  textDecoration: "none",
  fontFamily: "Inter, sans-serif",

  variants: {
    variant: {
      menu: {
        color: "$blue300",
        fontWeight: "$bold",
      },
      submenu: {
        color: "$black",
      },
    },
  },
  defaultVariants: {
    variant: "menu",
  },
});
