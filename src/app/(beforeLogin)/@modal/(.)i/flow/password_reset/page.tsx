"use client";

import styled from "@emotion/styled";
import Modal from "@/components/common/Modal";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

export default function Page() {
  return (
    <Modal
      title="내 X 계정 찾기"
      bodySize="md"
      footerChildren={
        <Button size='full'>
          <span>다음</span>
        </Button>
      }
    >
      <SubTitle>
        비밀번호를 변경하려면 계정에 연결된 이메일, 전화번호 또는 사용자
        아이디를 입력해 주세요.
      </SubTitle>
      <Input label="이메일, 전화번호 또는 사용자 아이디" />
    </Modal>
  );
}
const SubTitle = styled.span`
  padding-bottom: 32px;
  display: block;
  font-size: 15px;
  color: rgb(113, 118, 123);
`;
