import { StoryObj, Meta } from "@storybook/react";
import { Button, ButtonProps } from "../Button/Index";

export default {
  tittle: "Components/Button",
  component: Button,
  args: {
    children: "Abrir Mei",
    variant: "primary",
    disabled: false,
  },
  argTypes: {
    variant: {
      options: ["primary", "outline"],
      control: {
        type: "select",
      },
    },
  },
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {};

export const Outline: StoryObj<ButtonProps> = {
  args: {
    variant: "outline",
    children: "Já tenho um MEI"
  },
};
