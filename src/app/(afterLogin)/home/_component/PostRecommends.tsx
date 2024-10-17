"use client";

import { useQuery } from "@tanstack/react-query";
import { getPostRecommend } from "../_lib/getPostRecommend";
import Post from "../../_component/Post";
import { Post as IPost } from "@/model/Post";

export default function PostRecommends() {
  const { data } = useQuery<IPost[]>({
    queryKey: ["posts", "recommends"],
    queryFn: getPostRecommend,
  });

  return data?.map((post) => <Post key={post.postId} post={post} />);
}
