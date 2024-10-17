export async function getPostRecommend() {
  const res = await fetch("http://localhost:9090/api/postRecommends", {
    next: {
      tags: ["posts", "recommends"], // 서버 컴포넌트에서 업데이트 하는 용도
    },
    // cache: "no-store", // 캐싱 하지 않음
  });
  if(!res.ok) {
    throw new Error("Failed to fetch data");
  }

  // revalidateTag("posts", "recommends"); // 캐시 초기화
  // revalidatePath("/home"); // 홈 폴더에 관련한 요청을 새로고침

  return res.json();
}