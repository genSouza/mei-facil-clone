import { CaretDown, CaretRight, CaretUp } from "phosphor-react";
import { useEffect, useRef, useState } from "react";

import { Dropdown } from "../Dropdown/Index";
import * as s from "./Style";

export const MenuItems = ({ items, depthLevel }: any) => {
  const ref = useRef<HTMLLIElement>(null);
  const [dropdown, setDropdown] = useState<boolean>(false);
  const [icon, setIcon] = useState(
    <CaretDown size={16} weight="bold" style={{ marginLeft: "8px" }} />
  );

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
    setIcon(<CaretUp size={16} weight="bold" style={{ marginLeft: "8px" }} />);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
    setIcon(
      <CaretDown size={16} weight="bold" style={{ marginLeft: "8px" }} />
    );
  };

  useEffect(() => {
    const handler = (event: any) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  return (
    <s.ListItemWrapper
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {items.submenu ? (
        <>
          <s.LinkWrapper
            href="#"
            role={"button"}
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
            variant={items.type ? "menu" : "submenu"}
          >
            {items.title}{" "}
            {depthLevel > 0 ? (
              <CaretRight
                size={16}
                weight="bold"
                style={{ marginLeft: "2px" }}
              />
            ) : (
              icon
            )}
          </s.LinkWrapper>
          <Dropdown
            submenus={items.submenu}
            dropdown={dropdown}
            depthLevel={depthLevel}
          />
        </>
      ) : (
        <s.LinkWrapper href={items.url} variant={items.type ? "menu" : "submenu"}>{items.title}</s.LinkWrapper>
      )}
    </s.ListItemWrapper>
  );
};
