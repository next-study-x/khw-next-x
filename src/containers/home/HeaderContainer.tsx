"use client";

import MenuTab from "@/app/(afterLogin)/home/_component/MenuTab";
import Button from "@/components/common/Button";
import { HOME_DATA } from "@/constants/home_data";
import { useRouter } from "next/navigation";

import styled from "@emotion/styled";
import Image from "next/image";

const HeaderContainer = () => {
  const router = useRouter();

  const handlePushRouter = (path: string) => {
    router.push(path);
  };


  return (
    <HeaderWrapper>
      <LogoWrapper>
        <Image src={"/images/xLogo.png"} alt="x logo" width={30} height={30} />
      </LogoWrapper>
      <MenuWrapper>
        <ul>
          {Object.keys(HOME_DATA).map((key) => (
            <MenuTab key={key} menu={HOME_DATA[key]} />
          ))}
        </ul>
      </MenuWrapper>
      <Button type='fill' onClick={() => handlePushRouter('/compose/tweet')}>Post</Button>
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
  margin-bottom: 16px;

  ul {
    padding-top: 4px;
    padding-bottom: 4px;
  }
`;

const UserInfoWrapper = styled.div`
  width: 100%;
`;

export default HeaderContainer;
