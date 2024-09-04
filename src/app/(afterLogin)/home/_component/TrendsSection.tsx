"use client";

import { usePathname } from "next/navigation";
import styled from "@emotion/styled";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import TrendItem from "./TrendItem";

const TrendsSection = () => {
  const pathname = usePathname();
  if (pathname === "/explore") return null;

  return (
    <StyledTrendsSection>
      <h2>Trends for you</h2>
      <TrendItem />
      <TrendItem />
      <TrendItem />
      <TrendItem />
      <TrendItem />
      <TrendItem />
      <TrendItem />
      <TrendItem />
    </StyledTrendsSection>
  );
};


// section
const StyledTrendsSection = styled.section`
  width: 100%;
  height: 100%;
  border-radius: 16px;
  border: 1px solid rgb(47, 51, 54);
  padding: 12px 16px;

  h2 {
    font-size: 20px;
  }
`;

export default TrendsSection;
