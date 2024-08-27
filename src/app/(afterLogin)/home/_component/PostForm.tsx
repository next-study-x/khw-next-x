"use client";

import Button from "@/components/common/Button";
import styled from "@emotion/styled";
import ImageIcon from "@mui/icons-material/Image";

export default function PostForm() {
  const onSubmit = () => {};

  return (
    <StyledPostForm onSubmit={onSubmit}>
      <UserImage></UserImage>
      <PostSection>
        <textarea placeholder="What is happening?"></textarea>
        <ButtonGroup>
          <ImageIcon></ImageIcon>
          <ButtonWrapper>
            <Button type="fill">Post</Button>
          </ButtonWrapper>
        </ButtonGroup>
      </PostSection>
    </StyledPostForm>
  );
}

const StyledPostForm = styled.form`
  padding: 12px 16px;
  display: flex;
`;

const UserImage = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background-color: red;
  margin-right: 8px;
`;

const PostSection = styled.div`
  width: 100%;
  textarea {
    width: 100%;
    height: 80px;
    background-color: transparent;
    outline: none;
    border: none;
    font-size: 20px;
    color: rgb(231, 233, 234);

    &:focus {
      outline: none;
      border: none;
    }
  }
`;

const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    color: rgb(29, 155, 240);
  }
`;

const ButtonWrapper = styled.div`
  width: 100px;
`;
