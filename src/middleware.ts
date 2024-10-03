export { auth as middleware } from "./auth";

// 미들웨어를 적용해야하는 라우터 => 로그인이 필요함
export const config = {
  matcher: ["/compose/tweet", "/home", "/explore", "/messages", "/search"],
};
