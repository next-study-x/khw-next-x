"use client";

import styled from "@emotion/styled";
import LogoContainer from "@/containers/start/LogoContainer";
import ContentContainer from "@/containers/start/ContentContainer";
import FooterContainer from "@/containers/start/FooterContainer";

export default function Home() {
  return (
    <MainWrapper>
      <div>
        <LogoContainer />
        <ContentContainer />
      </div>
      <FooterContainer />
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
  min-height: 100vh;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;

  > div {
    width: 100%;
    height: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
