import React from "react";
import Image from "next/image";
import styled from "@emotion/styled";

const PostContent = () => {
  return (
    <StyledPostContent>
      <UserImage />
      <ContentsInfo>
        <h3>강혜원입니다</h3>
        <span>안뇽하세요</span>
        <div>
          <Image
            src={"/images/example.jpg"}
            alt="contents image"
            width={516}
            height={638}
          />
        </div>
      </ContentsInfo>
    </StyledPostContent>
  );
};

const StyledPostContent = styled.article`
  width: 100%;
  padding: 12px 16px;
  display: flex;
  gap: 8px;
  border: 1px solid rgb(47, 51, 54);
`;

const UserImage = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background-color: skyblue;
`;

const ContentsInfo = styled.div`
  h3 {
    margin-bottom: 2px;
    font-size: 15px;
    font-weight: 700;
  }

  span {
    font-size: 15px;
    font-weight: 400;
  }

  div {
    width: 100%;
    height: 432px;
    margin-top: 12px;
    border-radius: 16px;
    overflow: hidden;
  }
`;

export default PostContent;
