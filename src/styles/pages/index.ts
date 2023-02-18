import { styled } from "@/styles/index";

export const SiteHeader = styled("div", {
  minHeight: "40rem",

  background: "$gray200",
  display: "grid",
  gridTemplateColumns: "1fr 2fr 2fr",
  alignItems: "center",
});

export const HeaderContentFirst = styled("div", {
  marginTop: "auto",
});

export const HeaderContentMiddle = styled("div", {
  marginBottom: "100px",
  h1: {
    fontSize: "$82",
    color: "$blue100",
    fontFamily: "$helveticaLightUltra",
    lineHeight: "5.5rem",
    fontWeight: "$regular",
    strong: {
      fontFamily: "$helveticaLight",
    },
  },
  p: {
    fontFamily: "$helvetica",
    fontWeight: "$regular",
    marginTop: "65px",
    lineHeight: "19px",
    fontSize: "$16",
    color: "$blue100",
  },
});

export const HeaderContentLast = styled("div", {
  marginLeft: "auto",
});
