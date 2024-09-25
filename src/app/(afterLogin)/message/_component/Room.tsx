"use client";

import { useRouter } from "next/navigation";
import styled from "@emotion/styled";

import { faker } from "@faker-js/faker";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";

dayjs.locale("ko");
dayjs.extend(relativeTime);

export default function Room() {
  const router = useRouter();
  const user = {
    id: "hero",
    nickname: "영웅",
    Messages: [
      { roomId: 123, content: "안녕하세요.", createdAt: new Date() },
      { roomId: 123, content: "안녕히가세요.", createdAt: new Date() },
    ],
  };

  const onClick = () => {
    router.push(`/message/${user.Messages.at(-1)?.roomId}`);
  };

  return (
    <RoomContainer onClickCapture={onClick}>
      <RoomUserImage>
        <img src={faker.image.avatar()} alt="" />
      </RoomUserImage>
      <RoomChatInfo>
        <RoomUserInfo>
          <b>{user.nickname}</b>
          &nbsp;
          <span>@{user.id}</span>
          &nbsp; · &nbsp;
          <PostDate>
            {dayjs(user.Messages?.at(-1)?.createdAt).fromNow(true)}
          </PostDate>
        </RoomUserInfo>
        <RoomLastChat>{user.Messages?.at(-1)?.content}</RoomLastChat>
      </RoomChatInfo>
    </RoomContainer>
  );
}

const RoomContainer = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: row;
  transition-duration: 0.2s;
  border-color: rgb(239, 243, 244);
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.03);
  }
`;

const RoomUserImage = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 16px;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;

const RoomChatInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: #536471;
  font-size: 15px;
`;

const RoomUserInfo = styled.div``;

const PostDate = styled.span``;

const RoomLastChat = styled.div``;
