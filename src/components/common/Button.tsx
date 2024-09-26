import styled from "@emotion/styled";
import React, { ReactNode } from "react";
import { SerializedStyles } from "@emotion/react";

interface ButtonProps {
  type?: "default" | "fill" | "border" | "whiteBorder";
  children: ReactNode;
  size?: "full";
  sx?: React.CSSProperties;
  onClick?: () => void;
}

interface ButtonSizeProps {
  size?: "full";
}

const Button: React.FC<ButtonProps> = ({
  children,
  type = "default",
  size,
  sx,
  onClick,
}) => {
  return (
    <Box onClick={onClick} size={size}>
      {type === "default" && (
        <DefaultButton style={sx}>{children}</DefaultButton>
      )}
      {type === "fill" && <FillButton style={sx}>{children}</FillButton>}
      {type === "border" && <BorderButton style={sx}>{children}</BorderButton>}
      {type === "whiteBorder" && (
        <WhiteBorderButton style={sx}>{children}</WhiteBorderButton>
      )}
    </Box>
  );
};

const Box = styled.div<ButtonSizeProps>`
  width: ${({ size }) => (size === "full" ? "100%" : "auto")};
`;

const DefaultButton = styled.button<ButtonProps>`
  max-width: 100%;
  width: 100%;
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

const WhiteBorderButton = styled(DefaultButton)<ButtonProps>`
  background-color: transparent;
  color: #fff;
  border: 1px solid rgb(83, 100, 113);

  &:hover {
    background-color: rgba(239, 243, 244, 0.1);
  }
`;

export default Button;
