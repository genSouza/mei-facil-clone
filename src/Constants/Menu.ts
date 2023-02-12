export const mainMenuItems = [
  {
    title: "Serviços",
    type: "menu",
    submenu: [
      {
        title: "DAS",
        url: "emitir-das",
      },
      {
        title: "DASN",
        url: "declaracao-anual-do-mei-dasn",
      },
      {
        title: "Cursos do MEI",
        url: "/cursos-para-o-mei",
      },
      {
        title: "Documentos do MEI",
        submenu: [
          {
            title: "Cartão CNPJ",
            url: "/cartao-cnpj",
          },
          {
            title: "CCMEI",
            url: "/emitir-ccmei",
          },
          {
            title: "Documentos do MEI",
            url: "/documentos-do-mei",
          },
        ],
      },
      {
        title: "Nota Fiscal",
        url: "/nota-fiscal",
      },
      {
        title: "Serviços para MEI",
        url: "/servicos-para-o-mei",
      },
    ],
  },
  {
    title: "Meios de pagamento",
    type: "menu",
    submenu: [
      {
        title: "Comprar com boletos",
        url: "/emitir-boleto",
      },
      {
        title: "Maquininha",
        url: "/maquininha",
      },
      {
        title: "Meios de pagamento",
        url: "/meios-de-pagamento",
      },
    ],
  },
  {
    title: "Conta Digital",
    type: "menu",
    submenu: [
      {
        title: "Conta Digital",
        url: "/contamei",
      },
      {
        title: "Pagar Contas",
        url: "/pagar-contas",
      },
      {
        title: "Pix",
        url: "/pix",
      },
      {
        title: "Transferências",
        url: "/transferencias-bancarias",
      },
    ],
  },
  {
    title: "Contabilidade",
    type: "menu",
    submenu: [
      {
        title: "Alteração de dados MEI",
        url: "/alteracao-dados-mei",
      },
      {
        title: "Serviço de contabilidade",
        url: "/contabilidade",
      },
    ],
  },
  {
    title: "Cartão de Crédito",
    type: "menu",
    url: "/cartao-de-credito",
  },
  {
    title: "Dúvidas",
    type: "menu",
    url: "/duvidas",
  },
  {
    title: "Blog",
    type: "menu",
    url: "https://blog.meifacil.com/",
  },
];
