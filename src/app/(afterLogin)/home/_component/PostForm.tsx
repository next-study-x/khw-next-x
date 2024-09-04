"use client";

import Button from "@/components/common/Button";
import styled from "@emotion/styled";
import BrokenImageOutlinedIcon from "@mui/icons-material/BrokenImageOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import ChecklistOutlinedIcon from "@mui/icons-material/ChecklistOutlined";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import PendingActionsOutlinedIcon from "@mui/icons-material/PendingActionsOutlined";
import {
  ChangeEvent,
  ChangeEventHandler,
  FormEventHandler,
  useRef,
  useState,
} from "react";

export default function PostForm() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [content, setContent] = useState('');

  const onChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setContent(e.target.value);
  };

  const onSubmit: FormEventHandler = (e) => {
    e.preventDefault();
  };

  const handleClickImageUploader = () => {
    if (!inputRef.current) return;
    inputRef?.current.click();
  };

  return (
    <StyledPostForm onSubmit={onSubmit}>
      <UserImage />
      <PostSection>
        <textarea
          value={content}
          placeholder="What is happening?"
          onChange={onChange}
        />
        <ButtonGroup>
          <IconGroup>
            <span onClick={handleClickImageUploader}>
              <BrokenImageOutlinedIcon />
              <input type="file" ref={inputRef} />
            </span>
            <GifBoxOutlinedIcon />
            <ChecklistOutlinedIcon />
            <SentimentSatisfiedAltOutlinedIcon />
            <PendingActionsOutlinedIcon />
          </IconGroup>
          <ButtonWrapper>
            <Button type="fill" sx={{ height: "36px" }}>
              Post
            </Button>
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
    resize: none;

    &:focus {
      outline: none;
      border: none;
    }

    &::placeholder {
      font-family: Malgun Gothic;
    }
  }
`;

const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
  border-top: 1px solid rgb(47, 51, 54);

  svg {
    color: rgb(29, 155, 240);
  }
`;

const IconGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  span {
    cursor: pointer;
    input {
      display: none;
    }
  }
`;

const ButtonWrapper = styled.div`
  width: 100px;
`;
