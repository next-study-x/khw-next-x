"use client";

import styled from "@emotion/styled";
import { faker } from "@faker-js/faker";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import dayjs from "dayjs";
import BackButton from "../../home/_component/BackButton";

dayjs.locale("ko");
dayjs.extend(relativeTime);

export default function ChatRoom() {
  const user = {
    id: "hero",
    nickname: "영웅",
    image: faker.image.avatar(),
  };
  const messages = [
    {
      messageId: 1,
      roomId: 123,
      id: "zerohch0",
      content: "안녕하세요.",
      createdAt: new Date(),
    },
    {
      messageId: 2,
      roomId: 123,
      id: "hero",
      content: "안녕히가세요.",
      createdAt: new Date(),
    },
  ];

  return (
    <BodyWrapper>
      <TopWrapper>
        <BackButton />
        <h3>{user.nickname}</h3>
      </TopWrapper>
      <UserInfo href={user.nickname}>
        <img src={user.image} alt={user.id} />
        <div>
          <b>{user.nickname}</b>
        </div>
        <div>@{user.id}</div>
      </UserInfo>
      <Content>
        {messages.map((m) => {
          if (m.id === "zerohch0") {
            // 내 메시지면
            return (
              <MyMessage key={m.messageId}>
                <MyMessageContent>{m.content}</MyMessageContent>
                <Data>
                  {dayjs(m.createdAt).format("YYYY년 MM월 DD일 A HH시 mm분")}
                </Data>
              </MyMessage>
            );
          }
          return (
            <YourMessage key={m.messageId}>
              <YourMessageContent>{m.content}</YourMessageContent>
              <Data>
                {dayjs(m.createdAt).format("YYYY년 MM월 DD일 A HH시 mm분")}
              </Data>
            </YourMessage>
          );
        })}
      </Content>
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

const UserInfo = styled.a`
  padding: 20px 16px 60px;
  display: flex;
  align-items: center;
  flex-direction: column;
  transition-property: background-color;
  transition-duration: 0.2s;
  border-color: rgb(239, 243, 244);
  cursor: pointer;
  border-bottom: 1px solid rgb(47, 51, 54);
  margin-bottom: 20px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }

  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }
`;

const Content = styled.div`
  padding: 0 20px;
`;

const MyMessage = styled.div`
  padding-bottom: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const YourMessage = styled.div`
  padding-bottom: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Data = styled.div`
  margin-top: 8px;
  color: #536471;
  font-size: 13px;
`;

const MyMessageContent = styled.div`
  padding: 12px 16px;
  background-color: #0083eb;
  border-top-left-radius: 22px;
  border-top-right-radius: 22px;
  border-bottom-left-radius: 22px;
  color: white;
`;
const YourMessageContent = styled.div`
  padding: 12px 16px;
  background-color: #eff3f4;
  border-top-left-radius: 22px;
  border-top-right-radius: 22px;
  border-bottom-right-radius: 22px;
  color: black;
`;
