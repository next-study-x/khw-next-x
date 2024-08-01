import styled from "@emotion/styled";
import React, { ReactNode } from "react";

/** color / children / round 정도만 관리하고
 * 내부에 이미지나 글자는 children으로 일괄 관리 */

interface ButtonProps {
  color?: string;
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

const StyledButton = styled.button<ButtonProps>`
    max-width: 380px;
    width: 300px;
    height: 40px;
    min-height: 36px;

    padding-left: 16px;
    padding-right: 16px;

    border: none;
    border-radius: 100px;


`;


export default Button;
