"use client";

import PostContent from "@/components/home/PostContent";
import styled from "@emotion/styled";

const SearchContainer = () => {
  return (
    <SearchWrapper>
      <PostContent />
      <PostContent />
      <PostContent />
      <PostContent />
      <PostContent />
      <PostContent />
    </SearchWrapper>
  );
};

const SearchWrapper = styled.div`
  position: sticky;
  bottom: 0;
  width: 350px;
  height: 100%;
`;

export default SearchContainer;
