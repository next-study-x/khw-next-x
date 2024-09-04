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

// item
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

export default TrendItem;
