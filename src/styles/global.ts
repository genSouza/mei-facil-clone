import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },

  // main: {
  //   // marginLeft: "14.5rem",
  //   // marginRight: "15.5rem",
  //   backgroundColor: "$white",
  //   //border: "2px solid red",
  //   height: "100vh",
  //   maxWidth: "90rem",
  //   position: "relative",
  //   margin: "0 auto",
  //   boxShadow: "0 0 25px 1px rgb(0 0 0 / 10%)",
  // },

  body: {
    backgroundColor: "$gray200",
    "-webkit-font-smoothing": "antialiased",
    fontFamily: "Inter, sans-serif",
    fontWeight: 400,
  },
});
