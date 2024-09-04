"use client";

import SearchBar from "@/components/common/SearchBar";
import styled from "@emotion/styled";
import TrendItem from "../home/_component/TrendItem";

export default function Page() {
  return (
    <BodyWrapper>
      <SearchWrapper>
        <SearchBar width="568px" />
      </SearchWrapper>

      <h1>나를 위한 트렌드</h1>
      <TrendItem />
      <TrendItem />
      <TrendItem />
    </BodyWrapper>
  );
}

const BodyWrapper = styled.div`
  max-width: 600px;
  min-height: 100vh;
  width: 600px;
  padding: 16px;
  border-left: 1px solid rgb(47, 51, 54);
  border-right: 1px solid rgb(47, 51, 54);
  padding-top: 53px;

  h1 {
    margin-top: 24px;
  }
`;

const SearchWrapper = styled.div`
  position: fixed;
  top: 12px;
  /* width: 350px; */
  height: 44px;
  background-color: #000;
`;
