"use client";

import { usePathname } from "next/navigation";
import styled from "@emotion/styled";
import SearchBar from "@/components/common/SearchBar";
import TrendsSection from "@/app/(afterLogin)/home/_component/TrendsSection";
import FollowRecommend from "@/app/(afterLogin)/home/_component/FollowRecommend";

const SearchContainer = () => {
  const pathname = usePathname()
  return (
    <SearchContainerWrapper>
      <SearchWrapper>
        <SearchBar />
      </SearchWrapper>

      <ContentsWrapper>
      <TrendsSection/>
      <FollowRecommend/>
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
