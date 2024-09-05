"use client";

import SearchBar from "@/components/common/SearchBar";
import styled from "@emotion/styled";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Tab from "./_component/Tab";
import PostContent from "../home/_component/PostContent";

interface Props {
  searchParams: { q: string; f?: string; pf?: string };
}


export default function Page({ searchParams }: Props) {
  return (
    <BodyWrapper>
      <FixedWrapper>
        <Flex>
          <ArrowBackIcon />
          <SearchBar width="520px" q={searchParams.q} />
        </Flex>
        <Tab />
      </FixedWrapper>
      <PostWrapper>
        <PostContent/>
        <PostContent/>
        <PostContent/>
      </PostWrapper>
    </BodyWrapper>
  );
}

const BodyWrapper = styled.div`
  max-width: 600px;
  min-height: 100vh;
  width: 600px;
  border-left: 1px solid rgb(47, 51, 54);
  border-right: 1px solid rgb(47, 51, 54);
  padding-top: 119px;
  overflow: hidden;

  h1 {
    margin-top: 24px;
  }
`;

const FixedWrapper = styled.div`
  position: fixed;
  width: 598px;
  top: 0px;
  background-color: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(12px);
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 16px 16px 6px 16px;
`;

const PostWrapper = styled.div`
  
`
