"use client";

import styled from "@emotion/styled";
import Logo from "../../../public/x.jpeg";
import Image from "next/image";
import Button from "@/components/common/Button";
import Link from "next/link";

export default function Home() {
  return (
    <MainWrapper>
      <Image src={Logo} alt="x logo" width={500} height={500} />
      <MainContent>
        <h1>지금 일어나고 있는 일</h1>
        <h3>지금 가입하세요.</h3>
        <ButtonGroup>
          <Button>google</Button>
          <Button>apple</Button>
          <DividerGroup>
            <Line />
            <span>또는</span>
            <Line />
          </DividerGroup>
          <Button>계정 만들기</Button>
          <Notice>
            가입하시려면{" "}
            <Link
              href={"https://help.x.com/rules-and-policies/twitter-cookies"}
            >
              쿠키 사용
            </Link>
            을 포함해 <Link href={"https://x.com/tos"}>이용약관</Link>과{" "}
            <Link href={"https://x.com/privacy"}>개인정보 처리방침</Link>에
            동의해야 합니다.
          </Notice>
          <AlreadyMember>
            <h4>이미 트위터에 가입하셨나요?</h4>
            <Button>로그인</Button>
          </AlreadyMember>
        </ButtonGroup>
      </MainContent>
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
  /* min-height: 100vh; */
  display: flex;
`;

const MainContent = styled.div`
  min-width: 437px;
  padding: 20px;

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
