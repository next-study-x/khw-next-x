"use client";

import styled from "@emotion/styled";
import Image from "next/image";

const LogoContainer = () => {
  return (
    <LogoWrapper>
      <Image src={"/images/xLogo.png"} alt="x logo" width={350} height={350} />
    </LogoWrapper>
  );
};

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 2;
`;

export default LogoContainer;
