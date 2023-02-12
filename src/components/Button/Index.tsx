import { ButtonHTMLAttributes, ReactNode } from "react";
import * as s from "./Styles";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | undefined;
  children: ReactNode;
}

export const Button = ({
  variant = "primary",
  children,
  onClick,
}: ButtonProps) => {
  return (
    <s.ButtonWrapper variant={variant} onClick={onClick}>
      {children}
    </s.ButtonWrapper>
  );
};
