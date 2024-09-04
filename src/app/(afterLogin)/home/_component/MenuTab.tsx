import React from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import styled from "@emotion/styled";
import { SvgIconComponent } from "@mui/icons-material";

interface Menu {
  name: string;
  icon: SvgIconComponent;
}

interface MenuTabProps {
  menu: Menu;
}

interface MenuTabWrapper {
  isActive: boolean;
}

const MenuTab: React.FC<MenuTabProps> = ({ menu }) => {
  const Icon: SvgIconComponent = menu.icon;

  console.log(menu);
  const segment = useSelectedLayoutSegment();

  return (
    <MenuTabWrapper isActive={segment === menu.name.toLowerCase()}>
      <Link href={`/${menu.name.toLowerCase()}`}>
        <Icon />
        <span>{menu.name}</span>
      </Link>
    </MenuTabWrapper>
  );
};

const MenuTabWrapper = styled.li<MenuTabWrapper>`
  list-style: none;
  a {
    display: flex;
    align-items: center;
    padding: 12px;
    border-radius: 50px;
    transition-duration: 0.2s;
  }

  span {
    margin-right: 16px;
    margin-left: 20px;
    font-weight: ${({ isActive }) => (isActive ? 700 : 400)};
    font-size: 20px;
    word-wrap: break-word;
  }

  &:hover {
    a {
      background-color: rgba(231, 233, 234, 0.1);
    }
  }
`;

export default MenuTab;
