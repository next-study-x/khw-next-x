"use client";

import React, { ReactNode } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styled from "@emotion/styled";
import IconClose from "../../../public/icons/close.svg";

interface ModalProps {
  children?: ReactNode;
  title?: string;
  onClose?: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, title, onClose }) => {
  const router = useRouter();

  const handleCloseModal = () => {
    router.back();
  };

  return (
    <StyledModalBg onClick={handleCloseModal}>
      <StyledModal onClick={(e) => e.stopPropagation()}>
        <Image
          src={"/images/xLogo.png"}
          alt="google logo"
          width={32}
          height={32}
        />
        <ModalHeader>
          <CloseWrapper onClick={handleCloseModal}>
            <IconClose />
          </CloseWrapper>
        </ModalHeader>
        <ModalBody>
          <h1>{title}</h1>
          {children}
        </ModalBody>
      </StyledModal>
    </StyledModalBg>
  );
};

const StyledModalBg = styled.div<ModalProps>`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(91, 112, 131, 0.4);
`;

const StyledModal = styled.div<ModalProps>`
  width: 600px;
  height: 650px;
  max-width: 80vw;
  max-height: 90vh;
  padding-left: 16px;
  padding-right: 16px;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  overflow: hidden;
  border-radius: 16px;
  background-color: rgba(0, 0, 0, 1);

  // x logo
  > img {
    position: absolute;
    top: 12px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const CloseWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 34px;
  height: 34px;
  border-radius: 100px;
  cursor: pointer;
  transition-duration: 0.2s;

  svg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  &:hover {
    background-color: rgba(239, 243, 244, 0.1);
  }
`;

const ModalHeader = styled.div`
  height: 53px;
  display: flex;
  align-items: center;
`;

const ModalBody = styled.div`
  max-width: 364px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 48px;
  margin: auto;

  h1 {
    margin-bottom: 20px;
    margin-top: 20px;
  }

  button {
    margin-bottom: 12px;
    margin-top: 12px;
  }
`;

export default Modal;
