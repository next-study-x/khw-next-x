"use client";

import { useQuery } from "@tanstack/react-query";
import { getPostRecommend } from "../_lib/getPostRecommend";
import Post from "../../_component/Post";
import { Post as IPost } from "@/model/Post";

export default function PostRecommends() {
  const { data } = useQuery<IPost[]>({
    queryKey: ["posts", "recommends"],
    queryFn: getPostRecommend,
    staleTime: 60 * 1000, // 1분
    // gcTime: 300 * 1000, // 기본값 -> 가비지 컬렉터 타임 -> 5분 뒤에 정리됨
    // gcTime은 staleTime 보다 길어야함
  });

  return data?.map((post) => <Post key={post.postId} post={post} />);
}
