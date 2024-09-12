"use client";

import HeaderContainer from "@/containers/home/HeaderContainer";
import RightContainer from "@/containers/home/RightContainer";
import styled from "@emotion/styled";

export default function AfterLoginLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <LayoutStyled>
      <HeaderFixed>
        <HeaderContainer />
      </HeaderFixed>
      <BodyStyled>
        <main>{children}</main>
        <RightContainer />
      </BodyStyled>
      {modal}
    </LayoutStyled>
  );
}

const LayoutStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderFixed = styled.div`
  width: 275px;
  height: 100%;
`;

const BodyStyled = styled.main`
  position: relative;
  width: 990px;
  height: 100%;
  display: flex;
  justify-content: space-between;

  > main {
    width: 100%;
  }
`;
