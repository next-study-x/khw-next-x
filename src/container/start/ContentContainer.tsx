"use client";

import Link from "next/link";
import Image from "next/image";
import styled from "@emotion/styled";
import Button from "@/components/common/Button";
import { START_DATA } from "@/constants/start_data";

const ContentContainer = () => {
  return (
    <ContentWrapper>
      <h1>지금 일어나고 있는 일</h1>
      <h3>지금 가입하세요.</h3>
      <ButtonGroup>
        <Button>
          <Image
            src={"/images/googleLogo.png"}
            alt="google logo"
            width={15}
            height={15}
          />
          <span>Google 계정으로 가입하기</span>
        </Button>
        <Button>
          <span> Apple에서 가입하기</span>
        </Button>
        <DividerGroup>
          <Line />
          <span>또는</span>
          <Line />
        </DividerGroup>
        <Button type="fill">
          <span>계정 만들기</span>
        </Button>
        <Notice>
          가입하시려면{" "}
          <Link href={START_DATA.articles.link} target="_blank">
            쿠키 사용
          </Link>
          을 포함해{" "}
          <Link href={START_DATA.tos.link} target="_blank">
            이용약관
          </Link>
          과{" "}
          <Link href={START_DATA.privacy.link} target="_blank">
            개인정보 처리방침
          </Link>
          에 동의해야 합니다.
        </Notice>
        <AlreadyMember>
          <h4>이미 트위터에 가입하셨나요?</h4>
          <Button type="border">
            <span>로그인</span>
          </Button>
        </AlreadyMember>
      </ButtonGroup>
    </ContentWrapper>
  );
};

const ContentWrapper = styled.div`
  min-width: 45vw;
  padding: 20px;
  flex: 1;

  h1 {
    margin-bottom: 48px;
    margin-top: 48px;

    font-size: 64px;
    letter-spacing: -1.2px;
    line-height: 84px;
    font-weight: 700;
  }

  h3 {
    margin-bottom: 32px;
    font-size: 31px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;

  div {
    width: 300px;
  }

  button {
    margin-bottom: 8px;
  }
`;

const DividerGroup = styled.div`
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 5px;

  span {
    font-size: 15px;
    word-break: keep-all;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgb(47, 51, 54);
`;

const Notice = styled.div`
  margin-bottom: 20px;
  font-size: 11px;
  color: rgb(113, 118, 123);

  a {
    color: rgb(29, 155, 240);
  }
`;
const AlreadyMember = styled.div`
  margin-top: 40px;
  h4 {
    margin-bottom: 20px;
  }
`;

export default ContentContainer;
