"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import styled from "@emotion/styled";

interface TabProps {
  current?: string;
  color?: string;
}

export default function Tab() {
  const [current, setCurrent] = useState("top"); // top || latest

  const router = useRouter();
  const searchParams = useSearchParams();
  console.log('searchParams',searchParams.toString())

  const handleClickTop = () => {
    setCurrent("top");
    router.replace(`/search?q=${searchParams.get("q")}`);
  };

  const handleClickLatest = () => {
    setCurrent("latest");
    router.replace(`/search?${searchParams.toString()}&f=live`);
  };

  return (
    <TabWrapper>
      <TabActiveBar current={current} />
      <TabItem
        onClick={handleClickTop}
        color={current === "top" ? "rgb(231, 233, 234)" : "rgb(113, 118, 123)"}
      >
        Top
      </TabItem>
      <TabItem
        onClick={handleClickLatest}
        color={
          current === "latest" ? "rgb(231, 233, 234)" : "rgb(113, 118, 123)"
        }
      >
        Latest
      </TabItem>
    </TabWrapper>
  );
}

const TabWrapper = styled.div`
  width: 598px;
  height: 53px;
  display: flex;
  border-bottom: 1px solid rgb(47, 51, 54);
  
`;

const TabItem = styled.div<TabProps>`
  width: calc(100% / 2);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  color: ${({ color }) => color};

  &:hover {
    color: rgb(231, 233, 234);
    background-color: rgba(231, 233, 234, 0.1);
  }
`;

const TabActiveBar = styled.div<TabProps>`
  position: absolute;
  bottom: 0px;
  right: 115px;
  left: ${({ current }) => (current === "top" ? "115px" : "auto")};
  right: ${({ current }) => (current === "latest" ? "115px" : "auto")};

  width: 70px;
  height: 2px;
  background-color: rgb(29, 155, 240);
  border-radius: 10px;
`;
