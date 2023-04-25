import { MenuItems } from "../MenuItem/Index";
import * as s from "./Styles";
import { useTranslation } from "next-i18next";

export const Navbar = () => {
  const { t } = useTranslation();

  const mainMenuItems = [
    {
      title: t("navbar:servicos"),
      type: "menu",
      submenu: [
        {
          title: t("navbar:das"),
          url: "emitir-das",
        },
        {
          title: t("navbar:dasn"),
          url: "declaracao-anual-do-mei-dasn",
        },
        {
          title: t("navbar:cursos-do-mei"),
          url: "/cursos-para-o-mei",
        },
        {
          title: t("navbar:documentos-do-mei"),
          submenu: [
            {
              title: t("navbar:cartao-cnpj"),
              url: "/cartao-cnpj",
            },
            {
              title: t("navbar:ccmei"),
              url: "/emitir-ccmei",
            },
            {
              title: t("navbar:documentos-do-mei"),
              url: "/documentos-do-mei",
            },
          ],
        },
        {
          title: t("navbar:nota-fiscal"),
          url: "/nota-fiscal",
        },
        {
          title: t("navbar:servicos-para-mei"),
          url: "/servicos-para-o-mei",
        },
      ],
    },
    {
      title: t("navbar:meios-de-pagamento"),
      type: "menu",
      submenu: [
        {
          title: t("navbar:comprar-com-boletos"),
          url: "/emitir-boleto",
        },
        {
          title: t("navbar:maquininha"),
          url: "/maquininha",
        },
        {
          title: t("navbar:meios-de-pagamento"),
          url: "/meios-de-pagamento",
        },
      ],
    },
    {
      title: t("navbar:conta-digital"),
      type: "menu",
      submenu: [
        {
          title: t("navbar:conta-digital"),
          url: "/contamei",
        },
        {
          title: t("navbar:pagar-contas"),
          url: "/pagar-contas",
        },
        {
          title: t("navbar:pix"),
          url: "/pix",
        },
        {
          title: t("navbar:transferencias"),
          url: "/transferencias-bancarias",
        },
      ],
    },
    {
      title: t("navbar:contabilidade"),
      type: "menu",
      submenu: [
        {
          title: t("navbar:alteracao-de-dados-mei"),
          url: "/alteracao-dados-mei",
        },
        {
          title: t("navbar:servico-de-contabilidade"),
          url: "/contabilidade",
        },
      ],
    },
    {
      title: t("navbar:cartao-de-credito"),
      type: "menu",
      url: "/cartao-de-credito",
    },
    {
      title: t("navbar:duvidas"),
      type: "menu",
      url: "/duvidas",
    },
    {
      title: t("navbar:blog"),
      type: "menu",
      url: "https://blog.meifacil.com/",
    },
  ];
  return (
    <nav>
      <s.MenuWrapper>
        {mainMenuItems.map((menu, index) => {
          const depthLevel = 0;
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
        })}
      </s.MenuWrapper>
    </nav>
  );
};
