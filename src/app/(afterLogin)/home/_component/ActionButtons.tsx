"use client";

import styled from "@emotion/styled";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BarChartIcon from "@mui/icons-material/BarChart";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

interface ActiveProps {
  active?: boolean;
}

export default function ActionButtons() {
  const commented = false;
  const liked = true;
  const rePosted = true;

  return (
    <ActionButtonWrapper>
      <ActinonButton active={commented}>
        <IconWrapper>
          <ChatBubbleOutlineIcon />
        </IconWrapper>
        <Count>{0 || ""}</Count>
      </ActinonButton>

      <ActinonButton active={rePosted}>
        <IconWrapper>
          <RepeatIcon />
        </IconWrapper>
        <Count>{1 || ""}</Count>
      </ActinonButton>

      <ActinonButton active={liked}>
        <IconWrapper>
          <FavoriteBorderIcon />
        </IconWrapper>
        <Count>{1 || ""}</Count>
      </ActinonButton>

      <ActinonButton>
        <IconWrapper>
          <BarChartIcon />
        </IconWrapper>
        <Count>{0 || ""}</Count>
      </ActinonButton>

      <ActinonButton>
        <IconWrapper>
          <BookmarkBorderIcon />
        </IconWrapper>
        <Count>{0 || ""}</Count>
      </ActinonButton>
    </ActionButtonWrapper>
  );
}

const ActionButtonWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
`;

const ActinonButton = styled.div<ActiveProps>`
  display: flex;
  align-items: center;
  gap: 5px;

  span,
  svg {
    color: ${({ active }) =>
      active ? "rgb(29, 155, 240) " : "rgb(113, 118, 123)"};
  }

  &:hover {
    svg,
    span {
      color: rgb(29, 155, 240);
    }
  }
`;

const IconWrapper = styled.button`
  background-color: transparent;
  cursor: pointer;
  border: none;

  svg {
    font-size: 20px;
  }
`;

const Count = styled.span``;
