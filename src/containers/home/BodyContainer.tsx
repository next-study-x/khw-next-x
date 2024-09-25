"use client";

import Tab from "@/app/(afterLogin)/home/_component/Tab";
import TabProvider from "@/app/(afterLogin)/home/_component/TabProvider";
import Post from "@/app/(afterLogin)/home/_component/Post";
import styled from "@emotion/styled";
import PostForm from "@/app/(afterLogin)/home/_component/PostForm";

const BodyContainer = () => {
  return (
    <BodyWrapper>
      <TabProvider>
        <Tab />
        <PostForm />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </TabProvider>
    </BodyWrapper>
  );
};

const BodyWrapper = styled.div`
  max-width: 600px;
  width: 100%;
  border-left: 1px solid rgb(47, 51, 54);
  border-right: 1px solid rgb(47, 51, 54);
  margin-top: 53px;
`;

export default BodyContainer;
