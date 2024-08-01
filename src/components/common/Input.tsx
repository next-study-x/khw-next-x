import styled from "@emotion/styled";
import React, { ReactNode } from "react";

interface InputProps {}

const Input: React.FC<InputProps> = ({}) => {
  return (
    <StyledInput>
      <input
        onChange={(e) => console.log(e.target.value)}
        placeholder="휴대폰 번호, 이메일 주소 또는 사용자 아이디"
      />
    </StyledInput>
  );
};

const StyledInput = styled.div`
  height: 56px;
  width: 300px;

  input {
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: 1px solid rgb(51, 54, 57);
    border-radius: 4px;
    color: rgb(113, 118, 123);
    font-size: 17px;
    padding-left: 12px;

    &:focus, &:hover {
      outline: none;
      border: 1px solid rgb(51, 54, 57);
    }

    &::placeholder {
    }
  }
`;

export default Input;
