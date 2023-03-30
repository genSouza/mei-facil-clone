import { ComponentPropsWithoutRef, ReactNode } from "react";
import * as s from "./Styles";

/**
 * Button props
 */
export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  shape?: "square" | "rounded";
  size?: "md" | "lg" | "xg";
  variant?: "primary" | "secondary";
  children: ReactNode;
  icon: ReactNode;
}

/**
 * Default props
 */
export const Button = ({
  variant = "primary",
  shape = "square",
  size = "md",
  children,
  icon,
  ...rest
}: ButtonProps) => {
  return (
    <s.ButtonWrapper variant={variant} shape={shape} size={size} {...rest}>
      {children}
      {icon && icon}
    </s.ButtonWrapper>
  );
};
