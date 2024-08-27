"use client";

import styled from "@emotion/styled";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

interface SearchBarProps {
  isActive: boolean;
}

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isActive, setIsActive] = useState(false);

  return (
    <StyledSearchBar isActive={isActive}>
      <SearchIcon />
      <input
        placeholder="search"
        value={searchValue}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </StyledSearchBar>
  );
};

const StyledSearchBar = styled.div<SearchBarProps>`
  width: 350px;
  height: 44px;
  display: flex;
  align-items: center;
  border-radius: 50px;
  padding-left: 12px;

  background-color: ${({ isActive }) =>
    isActive ? "transparent" : "rgb(32, 35, 39)"};
  border: 1px solid rgb(32, 35, 39);

  border-color: ${({ isActive }) =>
    isActive ? "rgb(29, 155, 240)" : "rgb(32, 35, 39)"};

  svg path {
    fill: ${({ isActive }) =>
      isActive ? "rgb(29, 155, 240)" : "rgb(113, 118, 123)"};
  }

  input {
    width: 100%;
    padding: 12px;
    background-color: transparent;
    border: none;
    color: #fff;

    &:focus {
      outline: none;
    }
  }
`;

export default SearchBar;
