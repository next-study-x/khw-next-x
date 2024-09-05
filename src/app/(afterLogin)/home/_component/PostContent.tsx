import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";
import ActionButtons from "./ActionButtons";

dayjs.locale("ko");
dayjs.extend(relativeTime);

const PostContent = () => {
  const target = {
    user: {
      id: "kanghyew0n",
      nickname: "rkdrrkak",
      image: "/images/example.jpg",
    },
    content: "안뇽하세용",
    createAt: new Date(),
    images: ["/images/example.jpg"],
  };

  return (
    <StyledPostContent>
      <UserImage />
      <ContentsInfo>
        <UserId>{target.user.id}</UserId>
        <UserNickname>@{target.user.nickname}</UserNickname>
        <CreateAt>ㆍ{dayjs(target.createAt).fromNow(true)}</CreateAt>
        <div>{target.content}</div>
        <ImageWrapper>
          <Image
            src={target.images[0]}
            alt="contents image"
            width={516}
            height={638}
          />
        </ImageWrapper>
        <ActionButtons />
      </ContentsInfo>
    </StyledPostContent>
  );
};

const StyledPostContent = styled.article`
  width: 100%;
  padding: 12px 16px;
  display: flex;
  gap: 8px;
  border-top: 1px solid rgb(47, 51, 54);
`;

const UserImage = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background-color: skyblue;
`;

const ContentsInfo = styled.div`
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
  height: 432px;
  margin-top: 12px;
  border-radius: 16px;
  overflow: hidden;
`;

export default PostContent;
