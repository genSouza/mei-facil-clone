import React from "react";
import * as s from "./Styles";

export const Layout = (props: {
  children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => {
  return <s.LayoutWrapper>{props.children}</s.LayoutWrapper>;
};
