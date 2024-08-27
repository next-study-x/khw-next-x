"use client";

import SearchBar from "@/components/common/SearchBar";
import PostContent from "@/app/(afterLogin)/home/_component/PostContent";
import TrendsSection from "@/app/(afterLogin)/home/_component/TrendsSection";
import styled from "@emotion/styled";

const SearchContainer = () => {
  return (
    <SearchContainerWrapper>
      <SearchWrapper>
        <SearchBar />
      </SearchWrapper>

      <ContentsWrapper>
      <TrendsSection/>
      <TrendsSection/>
      </ContentsWrapper>
    </SearchContainerWrapper>
  );
};

const SearchContainerWrapper = styled.div`
  position: sticky;
  top: 0;
  width: 350px;
  height: 100%;
`;

const SearchWrapper = styled.div`
  position: fixed;
  width: 350px;
  height: 44px;
  background-color: #000;
`;

const ContentsWrapper = styled.div`
  padding-top: 56px; // 44(search bar) + 12
  > section + section {
    margin-top: 16px;
  }
`;


export default SearchContainer;
