import { StoryObj, Meta } from "@storybook/react";
import { CardMei, CardProps } from "../Card/Index";

export default {
  tittle: "Components/Card",
  component: CardMei,
  args: {
    title: "Abrir um Mei",
    text: "Abra seu MEI grátis com ajuda de especialistas e tenha seu CNPJ em minutos!",
    buttonText: "Abrir agora",
  },
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: {
        type: "select",
      },
    },
  },
} as Meta<CardProps>;

export const Primary: StoryObj<CardProps> = {};

export const Secondary: StoryObj<CardProps> = {
  args: {
    variant: "secondary",
    title: "Já tenho mei",
    text: "Precisa de ajuda com burocracia ou quer saber como vender mais?",
    buttonText: "Conheça agora",
  },
};
