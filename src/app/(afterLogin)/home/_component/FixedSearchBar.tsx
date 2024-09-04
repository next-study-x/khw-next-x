"use client";

import { usePathname } from "next/navigation";
import styled from "@emotion/styled";
import SearchBar from "@/components/common/SearchBar";

const FixedSearchBar = () => {
  const pathname = usePathname();
  if (pathname === "/explore") return null;

  return (
    <SearchWrapper>
      <SearchBar />
    </SearchWrapper>
  );
};

const SearchWrapper = styled.div`
  position: fixed;
  width: 350px;
  height: 44px;
  background-color: #000;
`;

export default FixedSearchBar;
