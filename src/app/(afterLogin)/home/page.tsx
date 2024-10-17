import style from "./home.module.css";
import Tab from "@/app/(afterLogin)/home/_component/Tab";
import TabProvider from "@/app/(afterLogin)/home/_component/TabProvider";
import PostForm from "@/app/(afterLogin)/home/_component/PostForm";
import Post from "@/app/(afterLogin)/_component/Post";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getPostRecommend } from "./_lib/getPostRecommend";
import PostRecommends from "./_component/PostRecommends";

export default async function Home() {
  const queryClient = new QueryClient();
  // 5버전에서는 무조건 객체 형식으로 넣어야함
  await queryClient.prefetchQuery({
    queryKey: ["posts", "recommends"],
    queryFn: getPostRecommend,
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <main className={style.main}>
      <HydrationBoundary state={dehydratedState}>
        <TabProvider>
          <Tab />
          <PostForm />
         <PostRecommends/>
        </TabProvider>
      </HydrationBoundary>
    </main>
  );
}
