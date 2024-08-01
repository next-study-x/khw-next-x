import styled from "@emotion/styled";
import React, { ReactNode } from "react";

interface ButtonProps {
  type?: string;
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, type = "default" }) => {
  return (
    <>
      {type === "default" && <DefaultButton>{children}</DefaultButton>}
      {type === "fill" && <FillButton>{children}</FillButton>}
      {type === "border" && <BorderButton>{children}</BorderButton>}
    </>
  );
};

const DefaultButton = styled.button<ButtonProps>`
  max-width: 380px;
  width: 300px;
  height: 40px;
  min-height: 36px;

  padding-left: 16px;
  padding-right: 16px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  border: none;
  border-radius: 100px;
  cursor: pointer;
  transition-duration: 0.2s;

  span {
    font-size: 15px;
    font-weight: 700;
    line-height: 15px;
  }

  &:hover {
    background-color: rgb(230, 230, 230);
  }
`;

const FillButton = styled(DefaultButton)<ButtonProps>`
  background-color: rgb(29, 155, 240);
  color: rgb(255, 255, 255);

  &:hover {
    background-color: rgb(26, 140, 216);
  }
`;

const BorderButton = styled(DefaultButton)<ButtonProps>`
  background-color: transparent;
  color: rgb(29, 155, 240);
  border: 1px solid rgba(29, 100, 113);

  &:hover {
    background-color: rgb(83, 155, 240, 0.1);
  }
`;

export default Button;
