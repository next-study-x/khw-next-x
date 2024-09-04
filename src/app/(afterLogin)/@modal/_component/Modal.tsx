import React, { ReactNode } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styled from "@emotion/styled";
import IconClose from "../../../../../public/icons/close.svg";

interface ModalProps {
  children?: ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  children,
}) => {
  const router = useRouter();

  const handleCloseModal = () => {
    router.back();
  };

  return (
    <StyledModalBg onClick={handleCloseModal}>
      <StyledModal onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <CloseWrapper onClick={handleCloseModal}>
            <IconClose />
          </CloseWrapper>
        </ModalHeader>
        <ModalBody>
          {children}
        </ModalBody>
      </StyledModal>
    </StyledModalBg>
  );
};

const StyledModalBg = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(91, 112, 131, 0.4);
`;

const StyledModal = styled.div`
  width: 600px;
  max-width: 80vw;
  max-height: 90vh;

  display: flex;
  flex-direction: column;
  justify-content: start;

  position: absolute;
  left: 50%;
  top: 5%;
  transform: translate(-50%, 0);

  overflow: hidden;
  border-radius: 16px;
  background-color: rgba(0, 0, 0, 1);
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

const ModalBody = styled.div<ModalProps>`

  h1 {
    margin-top: 20px;
    margin-bottom: 12px;
  }

  button {
    margin-bottom: 12px;
    margin-top: 12px;
  }
`;


export default Modal;
