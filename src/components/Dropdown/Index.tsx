
import { MenuItems } from "../MenuItem/Index";
import * as s from "./Styles";
export const Dropdown = ({ submenus, dropdown, depthLevel }: any) => {
  depthLevel = depthLevel + 1;
  return (
    <s.DropdownMenu
      variant={dropdown ? "show" : "hide"}
      type={depthLevel > 1 ? "submenu" : "menu"}
    >
      {submenus.map((submenu: any) => {
        return (
          <MenuItems
            items={submenu}
            key={submenu.title}
            depthLevel={depthLevel}
          />
        );
      })}
    </s.DropdownMenu>
  );
};

/** 
 * return (
    <s.DropdownMenu variant={dropdown ? "show" : "hide"}>
      {submenus.map((submenu: any) => {
        return (
          <s.DropdownMenuItem key={submenu.title}>
            <s.LinkWrapper href={submenu.url}>{submenu.title}</s.LinkWrapper>
          </s.DropdownMenuItem>
        );
      })}
    </s.DropdownMenu>
  );
*/
