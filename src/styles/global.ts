import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    // background: "rgb(0 100 0 /0.1)",
  },

  body: {
    "-webkit-font-smoothing": "antialiased",
    fontFamily: "Inter, sans-serif",
    fontWeight: 400,
  },
});
