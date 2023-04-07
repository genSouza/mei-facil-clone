import { styled } from "../../styles/index";

// Define the styles for the card component
export const CardWrapper = styled("div", {
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  borderRadius: "6px",
  padding: "16px",
  height: "15.938rem",
  width: "28.75rem",

  button: {
    margin: "20px 0 0 50px",
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: "$blue400",
      },
      secondary: {
        backgroundColor: "$blue100",
      },
    },
  },

  //default variant
  defaultVariants: {
    variant: "primary",
  },
});

export const CardTitle = styled("h1", {
  fontSize: "$50",
  margin: "32px 0 18px 50px",
  color: "$white",
  fontFamily: "$HelveticaNeue25",
  lineHeight: "3.25rem",
  fontWeight: "$regular",

  span: {
    fontFamily: "$HelveticaNeue55",
    fontWeight: "$regular",
  },
});

export const CardText = styled("p", {
  fontSize: "16px",
  color: "$white",
  fontFamily: "$HelveticaNeue45",
  margin: "0 32px 0 50px",
});
