"use client";

import BodyContainer from "@/containers/home/BodyContainer";
import HeaderContainer from "@/containers/home/HeaderContainer";
import SearchContainer from "@/containers/home/SearchContainer";
import styled from "@emotion/styled";

export default function Home() {
  return (
    <LayoutStyled>
      <HeaderFixed>
        <HeaderContainer />
      </HeaderFixed>
      <BodyStyled>
        <BodyContainer />
        <SearchContainer />
      </BodyStyled>
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
`;

// const SearchSticky = styled.div`
//   position: relative;
//   width: 350px;
//   height: 100vh;
// `;
