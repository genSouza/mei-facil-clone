import Link from "next/link";
import { styled } from "../../styles/index";
export const DropdownMenu = styled("ul", {
  position: "absolute",
  //right: 0,
  //left: "auto",
  boxShadow:
    "0 10px 15px -3px rgba(46, 41, 51, 0.08), 0 4px 6px -2px rgba(71, 63, 79, 0.16)",
  fontSize: "0.875rem",
  zIndex: 9999,
  minWidth: "11.875rem",
  padding: ".5rem 0",
  listStyle: "none",
  backgroundColor: "$white",
  borderRadius: ".5rem",
  variants: {
    variant: {
      hide: {
        display: "none",
      },
      show: {
        display: "block",
      },
    },
    type: {
      menu: {
        left: "auto",
      },
      submenu: {
        left: "100%",
        top: "-7px",
      },
    },
  },
  defaultVariants: {
    variant: "hide",
    type: "menu",
  },
});

export const DropdownMenuItem = styled("li", {
  position: "relative",
  fontSize: "$14",
});

export const LinkWrapper = styled(Link, {
  display: "block",
  fontSize: "$14",
  padding: ".7rem 1rem",
  textDecoration: "none",
  color: "$black",
});
