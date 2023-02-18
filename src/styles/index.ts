import { createStitches } from "@stitches/react";

export const {
  config,
  styled,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  css,
} = createStitches({
  theme: {
    colors: {
      white: "#FFF",
      gray100: "#F7F9F9",
      gray200: "#F0F5F5",
      gray300: "#E5E5E5",
      gray400: "#999999",
      gray500: "#4D4D4D",
      gray600: "#333333",
      gray700: "#191919",
      black: "#000000",
      blue100: "#00A5F0",
      blue200: "#0074d1",
      blue300: "#1374DE",
      blue400: "#0046a0",
      blue500: "#0000EE",
      yellow100: "#FFC800",
      yellow200: "#ffc900",
      purple: "#551A8B",
    },
    fontSizes: {
      12: "0.75rem",
      13: "0.813rem",
      14: "0.875rem",
      16: "1rem",
      18: "1.125rem",
      20: "1.25rem",
      22: "1.375rem",
      24: "1.5rem",
      26: "1.625rem",
      28: "1.75rem",
      30: "1.875rem",
      32: "2rem",
      34: "2.125rem",
      36: "2.25rem",
      46: "2.875rem",
      48: "3rem",
      50: "3.125rem",
      52: "3.25rem",
      56: "3.5rem",
      62: "3.875rem",
      72: "4.5rem",
      76: "4.75rem",
      82: "5.125rem",
      86: "5.375rem",
      94: "5.875rem",
    },
    radii: {
      px: "1px",
      xs: "4px",
      sm: "6px",
      md: "8px",
      lg: "16px",
      xg: "60px",
      full: "99999px",
    },
    fontWeights: {
      regular: "400",
      medium: "500",
      bold: "700",
    },
    fonts: {
      default: "Inter, sans-serif",
      moranga: "moranga",
      inter: "Inter",
      helvetica: "'HelveticaNeueLT Std Lt', sans-serif",
    },
    space: {
      1: "0.25rem",
      2: "0.5rem",
      3: "0.75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      10: "2.5rem",
      12: "3rem",
      16: "4rem",
      20: "5rem",
      22: "5.875rem",
      40: "10rem",
      64: "16rem",
      80: "20rem",
    },
    lineHeights: {
      shorter: "125%",
      short: "140%",
      base: "160%",
      tall: "180%",
    },
  },
});
