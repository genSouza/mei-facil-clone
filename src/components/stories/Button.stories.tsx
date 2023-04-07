import { StoryObj, Meta } from "@storybook/react";
import { ArrowRight } from "phosphor-react";
import { ButtonMei, ButtonProps } from "../Button/Index";

export default {
  tittle: "Components/Button",
  component: ButtonMei,
  args: {
    children: "Abrir Mei",
    variant: "primary",
    disabled: false,
  },
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: {
        type: "select",
      },
    },
    shape: {
      options: ["square", "rounded"],
      control: {
        type: "select",
      },
    },
    size: {
      options: ["md", "lg", "xg"],
      control: {
        type: "select",
      },
    },
  },
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {
  args: {
    variant: "primary",
    children: "Abrir Mei",
    shape: "rounded",
    size: "md",
  },
};

export const PrimaryLarge: StoryObj<ButtonProps> = {
  args: {
    variant: "primary",
    children: "emitir das agora",
    shape: "square",
    size: "lg",
  },
};

export const SecondaryLarge: StoryObj<ButtonProps> = {
  args: {
    variant: "secondary",
    children: "já tenho um mei",
    shape: "square",
    size: "lg",
  },
};

export const PrimaryExtraLarge: StoryObj<ButtonProps> = {
  args: {
    variant: "primary",
    children: "abrir um mei",
    shape: "square",
    size: "xg",
  },
};

export const SecondaryExtraLarge: StoryObj<ButtonProps> = {
  args: {
    variant: "secondary",
    children: "já tenho um mei",
    shape: "square",
    size: "xg",
  },
};

export const PrimaryExtraLargeWithIcon: StoryObj<ButtonProps> = {
  args: {
    variant: "primary",
    children: "abrir agora",
    icon: <ArrowRight size={32} weight={"regular"}/>,
    shape: "square",
    size: "xg",
  },
};
