import * as s from "@/styles/pages/index";
import Image from "next/image";
import HeaderPartOne from "/public/bg_index_header_part-1.png";
import HeaderPartTwo from "/public/home-hero-700x653.png";
import { CardMei } from "@/components/Card/Index";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

// get static props
export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["index", "navbar", "footer"])),
    },
  };
}

export default function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <s.SiteHeader>
        <s.HeaderContentFirst>
          <Image
            src={HeaderPartOne}
            width={120}
            height={410}
            alt="balão azul"
          ></Image>
        </s.HeaderContentFirst>
        <s.HeaderContentMiddle>
          <h1>
            {t("index:ser")} <strong>{t("index:mei")}</strong>
            <br />
            {t("index:ficou-muito")} <br />
            {t("index:mais-facil")}
          </h1>
          <p>
            {t("index:paragrafo-1")}
            <br />
            {t("index:paragrafo-2")}
            <br />
            {t("index:paragrafo-3")}
          </p>
        </s.HeaderContentMiddle>
        <s.HeaderContentLast>
          <Image
            src={HeaderPartTwo}
            width={700}
            height={653}
            alt="homem escrevendo"
            loading="eager"
            priority={true}
          ></Image>
        </s.HeaderContentLast>
      </s.SiteHeader>
      <s.SectionCardTop>
        <CardMei
          buttonText={t("index:texto-botao-1")}
          onClick={() => {}}
          text={t("index:texto-card-1")}
          title={t("index:titulo-card-1")}
        />
        <CardMei
          buttonText={t("index:texto-botao-1")}
          onClick={() => {}}
          text={t("index:texto-card-1")}
          title={t("index:titulo-card-1")}
          variant="secondary"
        />
      </s.SectionCardTop>
    </div>
  );
}
