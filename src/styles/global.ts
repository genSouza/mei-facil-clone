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
      fontFamily: "HelveticaNeue25",
      src: `url('/fonts/HelveticaNeueLTStd-UltLt.woff2') format('woff2'),
            url('/fonts/HelveticaNeueLTStd-UltLt.woff') format('woff')`,
      fontWeight: 300,
      fontStyle: "normal",
      fontDisplay: "swap",
    },
    {
      fontFamily: "HelveticaNeue35",
      src: `url('/fonts/HelveticaNeueLTStd-Th.woff2') format('woff2'),
            url('/fonts/HelveticaNeueLTStd-Th.woff') format('woff')`,
      fontWeight: 300,
      fontStyle: "normal",
      fontDisplay: "swap",
    },
    {
      fontFamily: "HelveticaNeue37",
      src: `url('/fonts/HelveticaNeueLTStd-ThCn.woff2') format('woff2'),
            url('/fonts/HelveticaNeueLTStd-ThCn.woff') format('woff')`,
      fontWeight: 300,
      fontStyle: "normal",
      fontDisplay: "swap",
    },
    {
      fontFamily: "HelveticaNeue45",
      src: `url('/fonts/HelveticaNeueLTStd-Lt.woff2') format('woff2'),
            url('/fonts/HelveticaNeueLTStd-Lt.woff') format('woff')`,
      fontWeight: 300,
      fontStyle: "normal",
      fontDisplay: "swap",
    },

    {
      fontFamily: "HelveticaNeue46",
      src: `url('/fonts/HelveticaNeueLTStd-LtIt.woff2') format('woff2'),
            url('/fonts/HelveticaNeueLTStd-LtIt.woff') format('woff')`,
      fontWeight: 300,
      fontStyle: "italic",
      fontDisplay: "swap",
    },
    {
      fontFamily: "HelveticaNeue55",
      src: `url(/fonts/'HelveticaNeueLTStd-Roman.woff2') format('woff2'),
            url('/fonts/HelveticaNeueLTStd-Roman.woff') format('woff')`,
      fontWeight: "normal",
      fontStyle: "normal",
      fontDisplay: "swap",
    },
    {
      fontFamily: "HelveticaNeue65",
      src: `url('/fonts/HelveticaNeueLTStd-Md.woff2') format('woff2'),
          url('/fonts/HelveticaNeueLTStd-Md.woff') format('woff')`,
      fontWeight: 500,
      fontStyle: "normal",
      fontDisplay: "swap",
    },
    {
      fontFamily: "HelveticaNeue75",
      src: `url('/fonts/HelveticaNeueLTStd-Bd.woff2') format('woff2'),
            url('/fonts/HelveticaNeueLTStd-Bd.woff') format('woff')`,
      fontWeight: "bold",
      fontStyle: "normal",
      fontDisplay: "swap",
    },
  ],
});
