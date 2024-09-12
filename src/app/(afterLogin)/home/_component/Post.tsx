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

dayjs.locale("ko");
dayjs.extend(relativeTime);

const target = {
  postId: 1,
  user: {
    id: "kanghyew0n",
    nickname: "rkdrrkak",
    image: "/images/example.jpg",
  },
  content: "안뇽하세용",
  createAt: new Date(),
  images: [] as any[],
};

type Props = {
  noImage?: boolean;
};

const Post = ({ noImage }: Props) => {
  const stopPropagation: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.stopPropagation();
  };

  if (Math.random() > 0.5 && !noImage) {
    target.images.push(
      { imageId: 1, link: faker.image.urlLoremFlickr() },
      { imageId: 2, link: faker.image.urlLoremFlickr() },
      { imageId: 3, link: faker.image.urlLoremFlickr() },
      { imageId: 4, link: faker.image.urlLoremFlickr() }
    );
  }

  return (
    <PostArticle post={target}>
      <UserImage />
      <ContentsInfo>
        <Link href={`/${target.user.id}`} onClick={stopPropagation}>
          <UserId>{target.user.id}</UserId>
        </Link>
        <UserNickname>@{target.user.nickname}</UserNickname>
        <CreateAt>ㆍ{dayjs(target.createAt).fromNow(true)}</CreateAt>
        <div>{target.content}</div>
        {target.images && target.images.length > 0 && (
          <Link
            href={`/${target.user.id}/status/${target.postId}/photo/${target.images[0].imageId}`}
          >
            <ImageWrapper>
              <img
                src={target.images[0]?.link || "/images/example.jpg"}
                alt="contents image"
              />
            </ImageWrapper>
          </Link>
        )}

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

const ImageWrapper = styled.div`
  width: 100%;
  margin-top: 12px;
  border-radius: 16px;
  overflow: hidden;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

export default Post;
