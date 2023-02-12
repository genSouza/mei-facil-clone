import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },

  body: {
    backgroundColor: "$gray200",
    "-webkit-font-smoothing": "antialiased",
    fontFamily: "Inter, sans-serif",
    fontWeight: 400,
  },
});
