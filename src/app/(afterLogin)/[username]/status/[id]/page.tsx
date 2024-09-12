"use client";

import BackButton from "@/app/(afterLogin)/home/_component/BackButton";
import Post from "@/app/(afterLogin)/home/_component/Post";
import styled from "@emotion/styled";
import CommentForm from "./_component/CommentForm";

export default function SinglePost() {
  return (
    <BodyWrapper>
      <TopWrapper>
        <BackButton />
        <h3>게시하기</h3>
      </TopWrapper>
      <Post />
      <CommentForm/>
    </BodyWrapper>
  );
}

const BodyWrapper = styled.main`
  max-width: 600px;
  min-height: 100vh;
  width: 600px;
  border-left: 1px solid rgb(47, 51, 54);
  border-right: 1px solid rgb(47, 51, 54);
  padding-top: 12px;
`;

const TopWrapper = styled.nav`
  height: 53px;
  padding: 16px;

  display: flex;
  gap: 12px;
`;
