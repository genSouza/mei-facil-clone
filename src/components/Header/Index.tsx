import Image from "next/image";
import logo from "/public/logo-menu.svg";

import { Navbar } from "../Navbar/Index";
import * as s from "./Styles";
import { Button } from "../Button/Index";
export const Header = () => {
  return (
    <s.HeaderContainer>
      <s.NavAreaContainer>
        <s.LogoContainer href="#">
          <Image
            src={logo}
            width={160}
            height={81}
            alt="logo"
            style={{ padding: "17px 10px" }}
          />
        </s.LogoContainer>
        <Navbar />
        <Button variant="primary">Abrir MEI</Button>
      </s.NavAreaContainer>
    </s.HeaderContainer>
  );
};
