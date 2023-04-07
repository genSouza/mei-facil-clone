import { ComponentPropsWithoutRef } from "react";
import { ButtonMei } from "../Button/Index";
import * as s from "./Styles";
import { ArrowRight } from "phosphor-react";

// Define the props interface for the card component
export interface CardProps extends ComponentPropsWithoutRef<"div"> {
  title: string;
  text: string;
  buttonText: string;
  variant?: "primary" | "secondary";
  onClick: () => void;
}

export interface CardProps extends ComponentPropsWithoutRef<"div"> {}

export const CardMei = ({
  title,
  text,
  buttonText,
  variant,
  onClick,
  ...rest
}: CardProps) => {
  const modifiedTitle = checkAndUppercase(title);
  return (
    <s.CardWrapper variant={variant} {...rest}>
      <s.CardTitle
        dangerouslySetInnerHTML={{ __html: modifiedTitle }}
      ></s.CardTitle>
      <s.CardText>{text}</s.CardText>
      <ButtonMei
        icon={<ArrowRight size={32} weight="regular" />}
        shape="square"
        size="lg"
        variant="primary"
        onClick={onClick}
      >
        {buttonText}
      </ButtonMei>
    </s.CardWrapper>
  );
};

function checkAndUppercase(title: string) {
  const regex = new RegExp("mei", "gi");
  const match = title.match(regex);
  if (match) {
    title = title.replace(regex, (match) => {
      return `<span>${match.toUpperCase()}</span>`;
    });
  }
  return title;
}
