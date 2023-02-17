import { styled } from "@/styles/index";

export const FooterWrapper = styled("footer", {
  maxWidth: "90rem",
  margin: "0 auto",
  boxShadow: "0 0 25px 1px rgb(0 0 0 / 10%)",
  padding: "3.75rem 0 0",
  color: "$white",
  backgroundColor: "$black",
});

export const FooterContainer = styled("div", {
  maxWidth: "60rem",
  margin: "0 auto",
});

export const FooterDivider = styled("hr", {
  border: `0.5px solid ${"$gray600"}`,
  marginTop: "2.563rem",
  marginBottom: "2.438rem",
});

export const FooterSectionTop = styled("div", {
  display: "grid",
  alignItems: "center",
  gridTemplateColumns: "1fr 1fr 2fr",

  ul: {
    display: "flex",
    listStyleType: "none",
    "li:not(:first-of-type)": {
      marginLeft: "0.938rem",
    },
  },
});

export const DownloadContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  p: {
    marginRight: "0.5rem",
  },
});

export const NeonLogoContainer = styled("div", {
  marginRight: "10.625rem",
});

export const SocialMediaContainer = styled("div", {
  marginRight: "7.5rem",
});

export const FooterSectionMiddle = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  paddingBottom: "2rem",
});

export const SectionTitle = styled("h4", {
  fontSize: "$16",
  letterSpacing: "1.2px",
  lineHeight: "2.188rem",
  marginBottom: "0.938rem",
});

export const SectionTitleFather = styled("h4", {
  fontSize: "$16",
  letterSpacing: "1.2px",
  lineHeight: "2.188rem",
});

export const ListContainer = styled("ul", {
  listStyleType: "none",
});

export const ListItem = styled("li", {
  fontSize: "$13",
  fontWeight: "$regular",
  marginBottom: "0.625rem",
  opacity: ".8",
});

export const FooterSectionBottom = styled("div", {
  display: "grid",
  gridTemplateColumns: "2fr 2fr",
  gridGap: "3.125rem",
  padding: "1.875rem 15rem 1.875rem 14rem",
  fontSize: "$12",
  lineHeight: "1.25rem",
  backgroundColor: "$gray700",
});

export const TextCopyright = styled("p", {
  fontSize: "$12",
  lineHeight: "1.25rem",
});

export const WarningText = styled("p", {
  fontSize: "$12",
  lineHeight: ".9375rem",
  color: "$gray400",
  marginTop: "1.188rem",
  marginBottom: "1.25rem",
});

export const PrivacyContainer = styled("div", {
  paddingLeft: "9.375rem",
});
