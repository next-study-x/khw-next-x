"use client";

import React, { MouseEventHandler } from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "@emotion/styled";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import ActionButtons from "./ActionButtons";
import PostArticle from "./PostArticle";
import { faker } from "@faker-js/faker";
import PostImages from "./PostImages";

dayjs.locale("ko");
dayjs.extend(relativeTime);

type Props = {
  noImage?: boolean
}

const Post = ({ noImage }: Props) => {
  const stopPropagation: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.stopPropagation();
  };
  const target = {
    postId: 1,
    User: {
      id: 'elonmusk',
      nickname: 'Elon Musk',
      image: '/yRsRRjGO.jpg',
    },
    content: '클론코딩 라이브로 하니 너무 힘들어요 ㅠㅠ',
    createdAt: new Date(),
    Images: [] as any[],
  }
  if (Math.random() > 0.5 && !noImage) {
    target.Images.push(
      {imageId: 1, link: faker.image.urlLoremFlickr()},
      {imageId: 2, link: faker.image.urlLoremFlickr()},
      {imageId: 3, link: faker.image.urlLoremFlickr()},
      {imageId: 4, link: faker.image.urlLoremFlickr()},
    )
  }

  return (
    <PostArticle post={target}>
      <UserImage />
      <ContentsInfo>
        <Link href={`/${target.User.id}`} onClick={stopPropagation}>
          <UserId>{target.User.id}</UserId>
        </Link>
        <UserNickname>@{target.User.nickname}</UserNickname>
        <CreateAt>ㆍ{dayjs(target.createdAt).fromNow(true)}</CreateAt>
        <div>{target.content}</div>
        
            <PostImages post={target} />
        <ActionButtons />
      </ContentsInfo>
    </PostArticle>
  );
};

const UserImage = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background-color: skyblue;
`;

const ContentsInfo = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
`;

const UserId = styled.span`
  margin-bottom: 2px;
  font-size: 15px;
  font-weight: 700;
  margin-right: 5px;
`;

const UserNickname = styled.span`
  font-size: 15px;
  color: rgb(113, 118, 123);
  margin-right: 5px;
`;

const CreateAt = styled.span`
  font-size: 15px;
  color: rgb(113, 118, 123);
`;

export default Post;
