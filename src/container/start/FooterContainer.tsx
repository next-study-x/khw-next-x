"use client";

import Link from "next/link";
import styled from "@emotion/styled";
import { START_DATA } from "@/constants/start_data";

type StartDataKeys = keyof typeof START_DATA;

const FooterContainer = () => {
  return (
    <FooterWrapper>
      {Object.keys(START_DATA).map((keys) => {
        const data = START_DATA[keys as StartDataKeys];
        return (
          <Link key={keys} href={data.link} target="_blank">
            {data.name}
          </Link>
        );
      })}
    </FooterWrapper>
  );
};

const FooterWrapper = styled.nav`
  padding: 16px 12px;
  margin-bottom: 0px;

  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;

  color: rgb(113, 118, 123);

  a {
    padding-right: 16px;
    margin: 4px 0;

    font-size: 13px;
    word-wrap: break-word;
  }
`;

export default FooterContainer;
