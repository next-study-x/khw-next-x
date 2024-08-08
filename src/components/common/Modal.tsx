import React, { ReactNode } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styled from "@emotion/styled";
import IconClose from "../../../public/icons/close.svg";

interface ModalProps {
  children?: ReactNode;
  footerChildren?: ReactNode;
  title?: string;
  bodySize?: "sm" | "md";
}

const Modal: React.FC<ModalProps> = ({
  children,
  footerChildren,
  title,
  bodySize = "sm",
}) => {
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
        <ModalBody bodySize={bodySize}>
          <h1>{title}</h1>
          {children}
        </ModalBody>
        {footerChildren && (
          <ModalFooter bodySize={bodySize}>{footerChildren}</ModalFooter>
        )}
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
  height: 650px;
  max-width: 80vw;
  max-height: 90vh;
  padding-left: 16px;
  padding-right: 16px;

  display: flex;
  flex-direction: column;
  justify-content: start;

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

const ModalBody = styled.div<ModalProps>`
  max-width: ${(props) => (props.bodySize === "sm" ? "364px" : "440px")};
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 48px;
  margin: 0 auto;

  h1 {
    margin-top: 20px;
    margin-bottom: 12px;
  }

  button {
    margin-bottom: 12px;
    margin-top: 12px;
  }
`;

const ModalFooter = styled.div<ModalProps>`
  max-width: ${(props) => (props.bodySize === "sm" ? "364px" : "440px")};
  width: 100%;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  margin: 0 auto;

  flex: 1;
  display: flex;
  align-items: flex-end;
`;

export default Modal;
