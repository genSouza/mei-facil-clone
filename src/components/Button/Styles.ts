import { styled } from "../../styles/index";

export const ButtonWrapper = styled("button", {
  fontWeight: "$bold",
  textDecoration: "none",
  cursor: "pointer",
  border: 0,
  fontFamily: "Inter, sans-serif",

  variants: {
    variant: {
      primary: {
        backgroundColor: "$yellow100",
        color: "$black",
        padding: "10px 35px",
        borderRadius: "$xg",
        margin: 0,
        fontSize: "$14",
        "&:hover": {
          backgroundColor: "$yellow200",
        },
      },
      outline: {
        backgroundColor: "$blue400",
        color: "$white",
        padding: "12px 30px",
        borderRadius: "$xs",
        outline: 0,
        boxShadow: "inset 0px 0px 0px 3px #FFC800",
        textTransform: "uppercase",
        fontSize: "$18",
      },
    },
  },

  defaultVariants: {
    variant: "primary",
  },
});
