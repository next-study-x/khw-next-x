"use client";

import PostContent from "@/components/home/PostContent";
import styled from "@emotion/styled";
import Image from "next/image";

const BodyContainer = () => {
  return (
    <BodyWrapper>
      <PostContent />
      <PostContent /> 
      <PostContent /> 
      <PostContent /> 
      <PostContent />
      <PostContent /> 
      <PostContent />
    </BodyWrapper>
  );
};

const BodyWrapper = styled.div`
  max-width: 600px;
  width: 100%;
  /* height: 100%; */
  border-left: 1px solid rgb(47, 51, 54);
  border-right: 1px solid rgb(47, 51, 54);
`;

export default BodyContainer;
