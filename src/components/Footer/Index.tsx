import * as s from "./Styles";
import logo from "/public/logo_mf_neon_white.svg";
import googleLogo from "/public/logo_google-play_white.svg";
import Image from "next/image";
import { FacebookLogo, InstagramLogo, YoutubeLogo } from "phosphor-react";
import { useTranslation } from "next-i18next";

export const Footer = () => {
  const { t } = useTranslation("footer");
  return (
    <s.FooterWrapper>
      <s.FooterContainer>
        <s.FooterSectionTop>
          <s.NeonLogoContainer>
            <Image src={logo} width={200} height={50} alt="logo da Neon" />
          </s.NeonLogoContainer>
          <s.SocialMediaContainer>
            <s.ListContainer>
              <s.ListItem>
                <FacebookLogo size={24} />
              </s.ListItem>
              <s.ListItem>
                <InstagramLogo size={24} />
              </s.ListItem>
              <s.ListItem>
                <YoutubeLogo size={24} />
              </s.ListItem>
            </s.ListContainer>
          </s.SocialMediaContainer>
          <s.DownloadContainer>
            <p>{t("footer:baixe-o-aplicativo")}</p>
            <Image
              src={googleLogo}
              width={210}
              height={50}
              alt="google playstore logo"
            />
          </s.DownloadContainer>
        </s.FooterSectionTop>
        <s.FooterDivider />
        <s.FooterSectionMiddle>
          <div>
            <s.SectionTitle>{t("footer:abrir-mei")}</s.SectionTitle>
            <s.SectionTitle>{t("footer:aplicativo")}</s.SectionTitle>
            <s.SectionTitleFather>{t("footer:servicos")}</s.SectionTitleFather>
            <s.ListContainer>
              <s.ListItem>{t("footer:das")}</s.ListItem>
              <s.ListItem>{t("footer:dasn")}</s.ListItem>
              <s.ListItem>{t("footer:documentos-do-mei")}</s.ListItem>
              <s.ListItem>{t("footer:nota-fiscal")}</s.ListItem>
              <s.ListItem>{t("footer:cursos-do-mei")}</s.ListItem>
            </s.ListContainer>
          </div>
          <div>
            <s.SectionTitle>{t("footer:cartao-de-credito")}</s.SectionTitle>
            <s.SectionTitleFather>
              {t("footer:meios-de-pagamento")}
            </s.SectionTitleFather>
            <s.ListContainer>
              <s.ListItem>{t("footer:boleto")}</s.ListItem>
              <s.ListItem>{t("footer:maquininha")}</s.ListItem>
              <s.ListItem>{t("footer:cobrar-com-o-pix")}</s.ListItem>
            </s.ListContainer>
            <s.SectionTitleFather>
              {t("footer:contabilidade")}
            </s.SectionTitleFather>
            <s.ListContainer>
              <s.ListItem>{t("footer:alteracoes-de-dados-mei")}</s.ListItem>
            </s.ListContainer>
          </div>
          <div>
            <s.SectionTitleFather>
              {t("footer:conta-digital")}
            </s.SectionTitleFather>
            <s.ListContainer>
              <s.ListItem>{t("footer:transferencias")}</s.ListItem>
              <s.ListItem>{t("footer:pix")}</s.ListItem>
              <s.ListItem>{t("footer:pagar-contas")}</s.ListItem>
            </s.ListContainer>
            <s.SectionTitleFather>
              {t("footer:sobre-a-mei-facil")}
            </s.SectionTitleFather>
            <s.ListContainer>
              <s.ListItem>{t("footer:blog")}</s.ListItem>
              <s.ListItem>{t("footer:duvidas")}</s.ListItem>
              <s.ListItem>{t("footer:quem-e-a-mei-facil")}</s.ListItem>
            </s.ListContainer>
          </div>
          <div>
            <s.SectionTitle>{t("footer:fale-com-a-mei-facil")}</s.SectionTitle>
            <s.ListContainer>
              <s.ListItem>{t("footer:outros-impostos")}</s.ListItem>
              <s.ListItem>
                <a href="mailto:contato@meifacil.com">contato@meifacil.com</a>
              </s.ListItem>
              <s.ListItem>{t("footer:atendimento")}</s.ListItem>
              <s.ListItem>
                <a href="mailto:contato@meifacil.com">contato@meifacil.com</a>
              </s.ListItem>
            </s.ListContainer>
          </div>
        </s.FooterSectionMiddle>
      </s.FooterContainer>
      <s.FooterSectionBottom>
        <div>
          <s.TextCopyright>{t("footer:copyright-texto-1")}</s.TextCopyright>
          <s.TextCopyright>{t("footer:copyright-texto-2")}</s.TextCopyright>
          <s.WarningText>{t("footer:warning-text")}</s.WarningText>
        </div>
        <s.PrivacyContainer>
          <p>{t("footer:privacy-text")}</p>
        </s.PrivacyContainer>
      </s.FooterSectionBottom>
    </s.FooterWrapper>
  );
};
