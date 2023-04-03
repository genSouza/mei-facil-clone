import { ComponentPropsWithoutRef } from "react";
import * as s from "./Styles";

// Define the props interface for the card component
export interface CardProps extends ComponentPropsWithoutRef<"div"> {
  title: string;
  text: string;
  buttonText: string;
  onClick?: () => void;
}

export interface CardProps extends ComponentPropsWithoutRef<"div"> {}

export const CardMei = ({ title, text, buttonText, onClick }: CardProps) => {
  return (
    <s.CardWrapper>
      <s.CardTitle>{title}</s.CardTitle>
      <s.CardText>{text}</s.CardText>
      <s.CardButton onClick={onClick}>{buttonText}</s.CardButton>
    </s.CardWrapper>
  );
};
