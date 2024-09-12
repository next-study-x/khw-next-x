import styled from "@emotion/styled";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  children: React.ReactNode;
  post: {
    postId: number;
    content: string;
    user: {
      id: string;
      nickname: string;
      image: string;
    };
    createAt: Date;
    images: any[];
  };
};

export default function PostArticle({ children, post }: Props) {
  const router = useRouter();

  const onClick = () => {
    router.push(`/${post.user.id}/status/${post.postId}`);
  };

  return <StyledPost onClickCapture={onClick}>{children}</StyledPost>;
}

const StyledPost = styled.article`
  width: 100%;
  padding: 12px 16px;
  display: flex;
  gap: 8px;
  border-top: 1px solid rgb(47, 51, 54);
`;
