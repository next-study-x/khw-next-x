"use client";

import { useContext } from "react";
import styled from "@emotion/styled";
import { TabContext } from "./TabProvider";

interface TabProps {
  tab?: string;
  color?: string;
}

export default function Tab() {
  const { tab, setTab } = useContext(TabContext);

  const handleClickRec = () => {
    setTab("rec");
  };

  const handleClickFol = () => {
    setTab("fol");
  };

  return (
    <StyledTab>
      <TabActiveBar tab={tab} />
      <TabItem
        onClick={handleClickRec}
        color={tab === "rec" ? "rgb(231, 233, 234)" : "rgb(113, 118, 123)"}
      >
        For you
      </TabItem>
      <TabItem
        onClick={handleClickFol}
        color={tab === "fol" ? "rgb(231, 233, 234)" : "rgb(113, 118, 123)"}
      >
        Following
      </TabItem>
    </StyledTab>
  );
}

const StyledTab = styled.div`
  position: fixed;
  top: 0;
  width: 598px;
  height: 53px;
  display: flex;
  background-color: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(12px);
  border: 1px solid rgb(47, 51, 54);
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
  top: 50px;
  right: 115px;
  left: ${({ tab }) => (tab === "rec" ? "115px" : "auto")};
  right: ${({ tab }) => (tab === "fol" ? "115px" : "auto")};

  width: 70px;
  height: 2px;
  background-color: rgb(29, 155, 240);
  border-radius: 10px;
`;
