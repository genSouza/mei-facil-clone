import { styled } from "../../styles/index";

export const ButtonWrapper = styled("button", {
  // Common styles for all shapes and sizes
  fontWeight: "$bold",
  textDecoration: "none",
  cursor: "pointer",
  border: 0,
  fontFamily: "Inter, sans-serif",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",

  // Styles for the icon
  "> svg": {
    marginLeft: "8px",
  },

  //Styles for variants
  variants: {
    variant: {
      primary: {
        backgroundColor: "$yellow100",
        color: "$black",
        margin: 0,
        "&:hover": {
          backgroundColor: "$yellow200",
        },
      },
      secondary: {
        backgroundColor: "$blue400",
        color: "$white",
        outline: 0,
        boxShadow: "inset 0px 0px 0px 3px #FFC800",
      },
    },

    //Size variants
    size: {
      md: {
        fontSize: "$14",
        padding: "10px 35px",
      },
      lg: {
        padding: "12px 30px",
        textTransform: "uppercase",
        fontFamily: "$HelveticaNeue75",
        fontSize: "$15",
        fontWeight: "$bold",
        lineHeight: "normal",
        letterSpacing: "2.3px",
      },
      xg: {
        padding: "12px 30px",
        textTransform: "uppercase",
        fontFamily: "$HelveticaNeue75",
        fontSize: "$18",
        fontWeight: "$bold",
        lineHeight: "normal",
        minWidth: "285px",
        letterSpacing: "2.3px",
      },
    },

    //Shape variants
    shape: {
      square: {
        borderRadius: "$xs",
      },
      rounded: {
        borderRadius: "$xg",
      },
    },
  },

  //Default values
  defaultVariants: {
    variant: "primary",
    shape: "square",
    size: "md",
  },
});
