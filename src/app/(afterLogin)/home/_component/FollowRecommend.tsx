"use client";

import Button from "@/components/common/Button";
import styled from "@emotion/styled";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const FollowItem = () => {
  return (
    <StyledFollowItem>
      <TrendInfo>
        <div>강까마</div>
        <span>@rkdrrkak</span>
      </TrendInfo>
      <Button sx={{width:'78px', height:'32px', minHeight:'32px'}}>Follow</Button>
    </StyledFollowItem>
  );
};

const StyledFollowItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
`;

const TrendInfo = styled.div`
width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
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

const FollowRecommend = () => {
  return (
    <StyledFollowRecommend>
      <h2>Who to follow</h2>
      <FollowItem />
      <FollowItem />
      <FollowItem />
      <FollowItem />
    </StyledFollowRecommend>
  );
};

const StyledFollowRecommend = styled.section`
  width: 100%;
  height: 100%;
  border-radius: 16px;
  border: 1px solid rgb(47, 51, 54);
  padding: 12px 16px;

  h2 {
    font-size: 20px;
  }
`;
export default FollowRecommend;
