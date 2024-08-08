"use client";

import styled from "@emotion/styled";
import Modal from "@/components/common/Modal";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import Select from "@/components/common/Select";

const ACCOUNT_TYPE = {
  email: "이메일",
  phone: "휴대폰",
};

export default function Page() {
  return (
    <Modal
      title="계정을 생성하세요"
      bodySize="md"
      footerChildren={
        <Button>
          <span>다음</span>
        </Button>
      }
    >
      <FlexBox>
        <Input label="이름" />
        <Input label="이메일" />
        <ChangeAccountType>대신 이메일 사용하기</ChangeAccountType>
      </FlexBox>
      <BirthInfoBox>
        <h3>생년월일</h3>
        <span>
          이 정보는 공개적으로 표시되지 않습니다. 비즈니스, 반려동물 등 계정
          주제에 상관없이 나의 연령을 확인하세요.
        </span>
        <SelectBox>
          <Select label="월" type="month" />
          <Select label="일" type="day" />
          <Select label="년" type="year" />
        </SelectBox>
      </BirthInfoBox>
    </Modal>
  );
}

const FlexBox = styled.div`
  // input
  > div {
    margin-top: 12px;
    margin-bottom: 12px;
  }
`;

const ChangeAccountType = styled.span`
  display: block;
  color: rgb(29, 155, 240);
  font-size: 15px;
  cursor: pointer;
  text-align: right;

  &:hover {
    text-decoration: underline;
  }
`;

const BirthInfoBox = styled.div`
  h3 {
    margin-bottom: 8px;
    font-size: 15px;
    font-weight: 700;
  }

  span {
    display: block;
    margin-bottom: 20px;
    font-size: 14px;
    color: rgb(113, 118, 123);
  }
`;

const SelectBox = styled.div`
  display: flex;
  gap: 12px;

  > div {
    flex: 2;
  }

  > div:first-child {
    flex: 3;
  }
  > div:last-child {
    flex: 2;
  }
`;
