'use client'

import styled from "@emotion/styled";
import CommentForm from "@/app/(afterLogin)/[username]/status/[id]/_component/CommentForm";
import ActionButtons from "@/app/(afterLogin)/home/_component/ActionButtons";
import BackButton from "@/app/(afterLogin)/home/_component/BackButton";
import Post from "@/app/(afterLogin)/home/_component/Post";
import {faker} from "@faker-js/faker";

export default function PhotoModal() {
  const photo = {
    imageId: 1,
    link: faker.image.urlLoremFlickr(),
    Post: {
      content: faker.lorem.text()
    }
  }
  return (
    <Container>
      <BackButton />
      <ImageZone>
        <img src={photo.link} alt={photo.Post?.content} />
        <Image style={{backgroundImage: `url(${photo.link})`}} />
        <ButtonZone>
          <ButtonInner>
            <ActionButtons />
          </ButtonInner>
        </ButtonZone>
      </ImageZone>
      <CommentInner>
        <Post noImage/>
        <CommentForm />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </CommentInner>
    </Container>
  );
}

const Container = styled.div`
   background-color: rgba(0, 0, 0, 0.95);
    position: fixed;
    z-index: 10;
    left: 0;
    top: 0;
    width: 100dvw;
    height: 100dvh;
    display: flex;
    flex-direction: row;
`

const ImageZone = styled.div`
   flex: 1;
    display: flex;
    flex-direction: column;

    img {
      display: none;
    }
`

const Image = styled.div`
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    flex: 1;
`

const ButtonZone = styled.div`
  display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const ButtonInner = styled.div`
   width: 600px;
   height: 60px;
`

const CommentInner =styled.div`
    width: 350px;
    border-left: 1px solid rgb(47, 51, 54);
    overflow: auto;
`