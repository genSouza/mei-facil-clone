import { styled } from "../../styles/index";

// Define the styles for the card component
export const CardWrapper = styled("div", {
  backgroundColor: "$white",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  borderRadius: "4px",
  padding: "16px",
  width: "300px",
});

export const CardTitle = styled("h2", {
  fontSize: "24px",
  margin: "0 0 16px",
});

export const CardText = styled("p", {
  fontSize: "16px",
  margin: "0 0 16px",
});

export const CardButton = styled("button", {
  backgroundColor: "$blue500",
  color: "$white",
  borderRadius: "4px",
  padding: "8px 16px",
  fontSize: "16px",
  cursor: "pointer",
  border: "none",
});
