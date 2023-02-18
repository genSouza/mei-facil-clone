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

  "@font-face": [
    {
      fontFamily: "HelveticaNeueLT Std",
      src: `url('/fonts/HelveticaNeueLTStd-Th.woff2') format('woff2'),
            url('/fonts/HelveticaNeueLTStd-Th.woff') format('woff')`,
      fontWeight: "300",
      fontStyle: "normal",
      fontDisplay: "swap",
    },

    {
      fontFamily: "HelveticaNeueLT Std Lt",
      src: `url('/fonts/HelveticaNeueLTStd-Lt.woff2') format('woff2'),
            url('/fonts/HelveticaNeueLTStd-Lt.woff') format('woff')`,
      fontWeight: "300",
      fontStyle: "normal",
      fontDisplay: "swap",
    },

    {
      fontFamily: "HelveticaNeueLT Std UltLt",
      src: `url('/fonts/HelveticaNeueLTStd-UltLt.woff2') format('woff2'),
            url('/fonts/HelveticaNeueLTStd-UltLt.woff') format('woff')`,
      fontWeight: "300",
      fontStyle: "normal",
      fontDisplay: "swap",
    },

    {
      fontFamily: "HelveticaNeueLT Std",
      src: `url('/fonts/HelveticaNeueLTStd-Bd.woff2') format('woff2'),
            url('/fonts/HelveticaNeueLTStd-Bd.woff') format('woff')`,
      fontWeight: "bold",
      fontStyle: "normal",
      fontDisplay: "swap",
    },

    {
      fontFamily: "HelveticaNeueLT Std Lt",
      src: `url('/fonts/HelveticaNeueLTStd-LtIt.woff2') format('woff2'),
            url('/fonts/HelveticaNeueLTStd-LtIt.woff') format('woff')`,
      fontWeight: "300",
      fontStyle: "italic",
      fontDisplay: "swap",
    },

    {
      fontFamily: "HelveticaNeueLT Std",
      src: `url('/fonts/HelveticaNeueLTStd-Roman.woff2') format('woff2'),
            url('/fonts/HelveticaNeueLTStd-Roman.woff') format('woff')`,
      fontWeight: "normal",
      fontStyle: "normal",
      fontDisplay: "swap",
    },
  ],
});
