"use client";

import styled from "@emotion/styled";
import { useRouter } from "next/navigation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function BackButton() {
  const router = useRouter();

  const onClick = () => {
    router.back();
  };

  return (
    <StyledBackButton onClick={onClick}>
      <ArrowBackIcon />
    </StyledBackButton>
  );
}

const StyledBackButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  svg {
    color: #fff;
  }
`;
