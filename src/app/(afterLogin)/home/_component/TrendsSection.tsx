"use client";

import styled from "@emotion/styled";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const TrendItem = () => {
  return (
    <StyledTrendItem>
      <TrendInfo>
        <span>Trending in South Korea</span>
        <div>재결합 소식</div>
      </TrendInfo>
      <MoreHorizIcon />
    </StyledTrendItem>
  );
};

const StyledTrendItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
`;

const TrendInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  svg {
    font-size: 16px;
  }

  span {
    font-size: 13px;
    color: rgb(113, 118, 123);
  }

  div {
    font-size: 15px;
    font-weight: 700;
    color: rgb(231, 233, 234);
  }
`;

const TrendsSection = () => {
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
