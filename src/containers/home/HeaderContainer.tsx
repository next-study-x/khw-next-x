"use client";

import MenuTab from "@/app/(afterLogin)/home/_component/MenuTab";
import { HOME_DATA } from "@/constants/home_data";

import styled from "@emotion/styled";
import Image from "next/image";

const HeaderContainer = () => {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <Image src={"/images/xLogo.png"} alt="x logo" width={30} height={30} />
      </LogoWrapper>
      <MenuWrapper>
        <ul>
          {Object.keys(HOME_DATA).map((key) => (
            <MenuTab menu={HOME_DATA[key]} />
          ))}
        </ul>
      </MenuWrapper>
      <UserInfoWrapper></UserInfoWrapper>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  height: 100%;
  padding-right: 8px;
  padding-left: 8px;
`;

const LogoWrapper = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuWrapper = styled.div`
  width: 100%;

  ul {
    padding-top: 4px;
    padding-bottom: 4px;
  }
`;

const UserInfoWrapper = styled.div`
  width: 100%;
`;

export default HeaderContainer;
