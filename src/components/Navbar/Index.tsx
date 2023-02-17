import { mainMenuItems } from "@/constants/Menu";
import { MenuItems } from "../MenuItem/Index";
import * as s from "./Styles";

export const Navbar = () => {
  return (
    <nav>
      <s.MenuWrapper>
        {mainMenuItems.map((menu, index) => {
          const depthLevel = 0;
          return <MenuItems items={menu} key={index} depthLevel={depthLevel}/>;
        })}
      </s.MenuWrapper>
    </nav>
  );
};
