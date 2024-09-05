"use client";

import Image from "next/image";
import styled from "@emotion/styled";
import { useRouter } from "next/navigation";
import { HOME_DATA } from "@/constants/home_data";

import MenuTab from "@/app/(afterLogin)/home/_component/MenuTab";
import Button from "@/components/common/Button";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const user = {
  id: "kanghyew0n",
  nickname: "rkdrrkak",
  image: "/images/example.jpg",
};

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
        <Button type="fill" onClick={() => handlePushRouter("/compose/tweet")}>
          Post
        </Button>
      </MenuWrapper>
      <UserInfoWrapper>
        <UserImage />
        <UserInfo>
          <UserName>{user.id}</UserName>
          <UserNickName>@{user.nickname}</UserNickName>
        </UserInfo>
        <MoreButton>
          <MoreHorizIcon />
        </MoreButton>
      </UserInfoWrapper>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  width: 275px;
  height: 100%;
  padding-right: 8px;
  padding-left: 8px;
  display: flex;
  flex-direction: column;
`;

const LogoWrapper = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuWrapper = styled.div`
  width: 230px;
  margin-bottom: 16px;
  flex: 1;

  ul {
    padding-top: 4px;
    padding-bottom: 4px;
  }
`;

const UserInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  margin-top: 12px;
  padding: 12px;
  border-radius: 50px;
  cursor: pointer;

  &:hover {
    background-color: rgba(231, 233, 234, 0.1);
  }
`;

const UserImage = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background-color: red;
`;

const UserInfo = styled.div`
  margin-left: 12px;
  margin-right: 12px;
  flex: 1;
`;

const UserName = styled.div`
  font-size: 15px;
  font-weight: 700;
`;

const UserNickName = styled.div`
  font-size: 15px;
  color: rgb(113, 118, 123);
`;

const MoreButton = styled.div``;

export default HeaderContainer;
