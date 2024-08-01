"use client";

import styled from "@emotion/styled";
import { footer_data } from "@/const/footer_data";
import Link from "next/link";

const Footer = () => {
  return (
    <FooterContainer>
      {footer_data.map((data) => (
        <Link href={data.link}>{data.name}</Link>
      ))}
    </FooterContainer>
  );
};

const FooterContainer = styled.nav`
  padding: 16px 12px;
  margin-bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;

  color: rgb(113, 118, 123);
  /* background-color: red; */

  a {
    padding-right: 16px;
    margin: 4px 0;
    font-size: 13px;
    word-wrap: break-word;
  }
`;

export default Footer;
