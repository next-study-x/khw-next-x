"use client";

import styled from "@emotion/styled";
import Room from "./_component/Room";

export default function Page() {
  return (
    <BodyWrapper>
      <TopWrapper>
        <h3>Message</h3>
      </TopWrapper>
      <Room />
      <Room /> 
      <Room />
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

const UserWrapper = styled.section`
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 16px 16px 24px 16px;
`;

const UserImage = styled.div`
  width: 130px;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 150px;
  background-color: red;

  span {
    font-size: 40px;
    font-weight: 700;
  }
`;

const UserInfo = styled.div`
  flex: 1;
  h4 {
    font-size: 20px;
    font-weight: 700;
    color: rgb(231, 233, 234);
  }
  span {
    font-size: 15px;
    color: rgb(113, 118, 123);
  }
`;
