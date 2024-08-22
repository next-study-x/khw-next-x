import React from "react";
import styled from "@emotion/styled";
import { SvgIconComponent } from "@mui/icons-material";

interface Menu {
  name: string;
  icon: SvgIconComponent;
}

interface MenuTabProps {
  menu: Menu;
  onClick?: () => void;
}

const MenuTab: React.FC<MenuTabProps> = ({ menu, onClick }) => {
  const Icon: SvgIconComponent = menu.icon;
  return (
    <MenuTabWrapper onClick={onClick}>
      <Icon />
      <span>{menu.name}</span>
    </MenuTabWrapper>
  );
};

const MenuTabWrapper = styled.span`
  max-width: 100%;
  display: flex;
  align-items: center;
  padding: 12px;
  border-radius: 50px;
  transition-duration: 0.2s;
  cursor: pointer;

  span {
    margin-right: 16px;
    margin-left: 20px;
    font-weight: 700;
    font-size: 20px;
    word-wrap: break-word;
  }

  &:hover {
    background-color: rgba(231, 233, 234, 0.1);
  }
`;

export default MenuTab;
