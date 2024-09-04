"use client";

import styled from "@emotion/styled";
import FixedSearchBar from "@/app/(afterLogin)/home/_component/FixedSearchBar";
import TrendsSection from "@/app/(afterLogin)/home/_component/TrendsSection";
import FollowRecommend from "@/app/(afterLogin)/home/_component/FollowRecommend";


const RightContainer = () => {
  return (
    <RightContainerWrapper>
      <FixedSearchBar />
      <ContentsWrapper>
        <TrendsSection />
        <FollowRecommend />
      </ContentsWrapper>
    </RightContainerWrapper>
  );
};

const RightContainerWrapper = styled.div`
  position: sticky;
  top: 0;
  width: 350px;
  height: 100%;
`;

const ContentsWrapper = styled.div`
  padding-top: 56px; // 44(search bar) + 12
  > section + section {
    margin-top: 16px;
  }
`;

export default RightContainer;
