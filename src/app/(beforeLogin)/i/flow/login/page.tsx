"use client";

import Link from "next/link";
import Image from "next/image";
import styled from "@emotion/styled";
import Modal from "@/components/common/Modal";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import { START_DATA } from "@/constants/start_data";

export default function Page() {
  return (
    <Modal title="X 가입하기">
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
        <Input label="휴대폰 번호, 이메일 주소 또는 사용자 아이디" />
        <Button type="default">
          <span>다음</span>
        </Button>
        <Button type="whiteBorder">
          <span>비밀번호를 잊으셨나요?</span>
        </Button>
      </ButtonGroup>
      <Notice>
        계정이 없으신가요?
        <Link href={START_DATA.articles.link} target="_blank">
          가입하기
        </Link>
      </Notice>
    </Modal>
  );
}

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;

  div {
    width: 300px;
  }

  button {
    margin-bottom: 14px;
  }
`;

const DividerGroup = styled.div`
  margin-bottom: 14px;
  display: flex;
  align-items: center;
  gap: 5px;

  span {
    font-size: 15px;
    word-break: keep-all;
  }
`;

const Notice = styled.div`
  margin-top: 40px;
  font-size: 15px;
  font-weight: 400;
  color: rgb(113, 118, 123);

  a {
    color: rgb(29, 155, 240);
  }
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgb(47, 51, 54);
`;
