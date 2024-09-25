import { useEffect, useState } from "react";
import Link from "next/link";
import styled from "@emotion/styled";

type Props = {
  post: {
    postId: number;
    content: string;
    User: {
      id: string;
      nickname: string;
      image: string;
    };
    createdAt: Date;
    Images: any[];
  };
};

export default function PostImages({ post }: Props) {
  const [isClient, setIsClient] = useState(false);

  console.log(post);

  useEffect(() => {
    // 클라이언트에서만 실행되도록 설정
    setIsClient(true);
  }, []);

  if (!isClient || !post.Images || !post.Images.length) return null;

  if (post.Images.length === 1) {
    return (
      <OneImage>
        <Link
          href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[0].imageId}`}
          style={{
            backgroundImage: `url(${post.Images[0]?.link})`,
            backgroundSize: "contain",
          }}
        >
          <img src={post.Images[0]?.link} alt="" />
        </Link>
      </OneImage>
    );
  }
  if (post.Images.length === 2) {
    return (
      <TwoImage>
        <Link
          href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[0].imageId}`}
          style={{
            backgroundImage: `url(${post.Images[0]?.link})`,
            backgroundSize: "cover",
          }}
        ></Link>
        <Link
          href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[1].imageId}`}
          style={{
            backgroundImage: `url(${post.Images[1]?.link})`,
            backgroundSize: "cover",
          }}
        ></Link>
      </TwoImage>
    );
  }
  if (post.Images.length === 3) {
    return (
      <ThreeImage>
        <Link
          href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[0].imageId}`}
          style={{
            backgroundImage: `url(${post.Images[0]?.link})`,
            backgroundSize: "cover",
          }}
        ></Link>
        <div>
          <Link
            href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[1].imageId}`}
            style={{
              backgroundImage: `url(${post.Images[1]?.link})`,
              backgroundSize: "cover",
            }}
          ></Link>
          <Link
            href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[2].imageId}`}
            style={{
              backgroundImage: `url(${post.Images[2]?.link})`,
              backgroundSize: "cover",
            }}
          ></Link>
        </div>
      </ThreeImage>
    );
  }
  if (post.Images.length === 4) {
    return (
      <FourImage>
        <Link
          href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[0].imageId}`}
          style={{
            backgroundImage: `url(${post.Images[0]?.link})`,
            backgroundSize: "cover",
          }}
        ></Link>
        <Link
          href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[1].imageId}`}
          style={{
            backgroundImage: `url(${post.Images[1]?.link})`,
            backgroundSize: "cover",
          }}
        ></Link>
        <Link
          href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[2].imageId}`}
          style={{
            backgroundImage: `url(${post.Images[2]?.link})`,
            backgroundSize: "cover",
          }}
        ></Link>
        <Link
          href={`/${post.User.id}/status/${post.postId}/photo/${post.Images[3].imageId}`}
          style={{
            backgroundImage: `url(${post.Images[3]?.link})`,
            backgroundSize: "cover",
          }}
        ></Link>
      </FourImage>
    );
  }
  return null;
}

const PostImageSection = styled.div`
  display: inline-block;
  margin-top: 12px;
  width: 100%;
  border-radius: 16px;

  img {
    border-radius: 16px;
    max-height: 510px;
    width: 100%;
  }
`;

const OneImage = styled(PostImageSection)`
  a {
    max-height: 510px;
    background-repeat: no-repeat;
  }
`;

const TwoImage = styled(PostImageSection)`
  height: 272px;
  display: flex;
  flex-direction: row;
  gap: 2px;

  a {
    flex: 1;
  }

  a:first-child {
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
  }
  a:last-child {
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
  }
`;

const ThreeImage = styled(PostImageSection)`
  height: 272px;
  display: flex;
  flex-direction: row;
  gap: 2px;

  & > a:first-child {
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
  }

  & > a,
  & > div {
    flex: 1;
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 2px;
    a {
      flex: 1;
    }
    & > a:first-child {
      border-top-right-radius: 16px;
    }
    & > a:last-child {
      border-bottom-right-radius: 16px;
    }
  }
`;

const FourImage = styled(PostImageSection)`
  height: 272px;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  gap: 2px;

  & > a:nth-child(1) {
    border-top-left-radius: 16px;
  }

  & > a:nth-child(2) {
    border-top-right-radius: 16px;
  }

  & > a:nth-child(3) {
    border-bottom-left-radius: 16px;
  }

  & > a:nth-child(4) {
    border-bottom-right-radius: 16px;
  }
`;
