import { StoryObj, Meta } from "@storybook/react";
import { CardMei, CardProps } from "../Card/Index";

export default {
  tittle: "Components/Card",
  component: CardMei,
  args: {
    title: "Abrir um Mei",
    text: "Abra seu MEI grátis com ajuda de especialistas e tenha seu CNPJ em minutos!",
    buttonText: "Abrir agora ->",
  },
  // argTypes: {
  //   variant: {
  //     options: ["primary", "secondary"],
  //     control: {
  //       type: "select",
  //     },
  //   },
  //   shape: {
  //     options: ["square", "rounded"],
  //     control: {
  //       type: "select",
  //     },
  //   },
  //   size: {
  //     options: ["md", "lg", "xg"],
  //     control: {
  //       type: "select",
  //     },
  //   },
  //},
} as Meta<CardProps>;

export const Primary: StoryObj<CardProps> = {
  // args: {
  //   variant: "primary",
  //   children: "Abrir Mei",
  //   shape: "rounded",
  //   size: "md",
  // },
};


