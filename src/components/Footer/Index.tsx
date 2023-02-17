import * as s from "./Styles";
import logo from "/public/logo_mf_neon_white.svg";
import googleLogo from "/public/logo_google-play_white.svg";
import Image from "next/image";
import { FacebookLogo, InstagramLogo, YoutubeLogo } from "phosphor-react";

export const Footer = () => {
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
            <p>Baixe o aplicativo</p>
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
            <s.SectionTitle>Abrir MEI</s.SectionTitle>
            <s.SectionTitle>Aplicativo</s.SectionTitle>
            <s.SectionTitleFather>Serviços</s.SectionTitleFather>
            <s.ListContainer>
              <s.ListItem>DAS</s.ListItem>
              <s.ListItem>DASN</s.ListItem>
              <s.ListItem>Documentos do MEI</s.ListItem>
              <s.ListItem>Nota Fiscal</s.ListItem>
              <s.ListItem>Cursos do MEI</s.ListItem>
            </s.ListContainer>
          </div>
          <div>
            <s.SectionTitle>Cartão de Crédito</s.SectionTitle>
            <s.SectionTitleFather>Meios de Pagamento</s.SectionTitleFather>
            <s.ListContainer>
              <s.ListItem>Boleto</s.ListItem>
              <s.ListItem>Maquininha</s.ListItem>
              <s.ListItem>Cobrar com o PIX</s.ListItem>
            </s.ListContainer>
            <s.SectionTitleFather>Contabilidade</s.SectionTitleFather>
            <s.ListContainer>
              <s.ListItem>Alterações de dados MEI</s.ListItem>
            </s.ListContainer>
          </div>
          <div>
            <s.SectionTitleFather>Conta Digital</s.SectionTitleFather>
            <s.ListContainer>
              <s.ListItem>Transferências</s.ListItem>
              <s.ListItem>Pix</s.ListItem>
              <s.ListItem>Pagar contas</s.ListItem>
            </s.ListContainer>
            <s.SectionTitleFather>SOBRE A MEI FACIL</s.SectionTitleFather>
            <s.ListContainer>
              <s.ListItem>Blog</s.ListItem>
              <s.ListItem>Dúvidas</s.ListItem>
              <s.ListItem>Quem é a MEI Fácil</s.ListItem>
            </s.ListContainer>
          </div>
          <div>
            <s.SectionTitle>FALE COM A MEI FÁCIL:</s.SectionTitle>
            <s.ListContainer>
              <s.ListItem>
                Para falar sobre contabilidade, DAS e outros impostos:
              </s.ListItem>
              <s.ListItem>
                <a href="mailto:contato@meifacil.com">contato@meifacil.com</a>
              </s.ListItem>
              <s.ListItem>
                Para atendimento sobre a conta MEI Fácil (login, cartão de
                crédito, transferências e outros serviços):
              </s.ListItem>
              <s.ListItem>
                <a href="mailto:contato@meifacil.com">contato@meifacil.com</a>
              </s.ListItem>
            </s.ListContainer>
          </div>
        </s.FooterSectionMiddle>
      </s.FooterContainer>
      <s.FooterSectionBottom>
        <div>
          <s.TextCopyright>
            Neon Pagamentos S.A. - Instituição de Pagamento © 2023.
          </s.TextCopyright>
          <s.TextCopyright>
            Todos os direitos reservados. CNPJ: nº 20.855.875/0001-82.
          </s.TextCopyright>
          <s.WarningText>
            A inscrição, alteração, regularização, baixa e demais itens
            relativos ao MEI podem ser solicitados sem o acompanhamento dos
            profissionais deste site e de forma gratuita nos órgãos públicos do
            Governo. Esse site não faz parte do Governo e oferece serviço
            privado e opcional.
          </s.WarningText>
        </div>
        <s.PrivacyContainer>
          <p>Política de Privacidade | Termos de Uso | Mapa do Site</p>
        </s.PrivacyContainer>
      </s.FooterSectionBottom>
    </s.FooterWrapper>
  );
};
